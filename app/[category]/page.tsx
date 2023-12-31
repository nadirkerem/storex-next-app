import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { client } from "@/lib/sanity";

import { simplifiedProduct } from "../interface";

async function getData(category: string) {
  const query = `
  *[_type == "product" && category->name == "${category}"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products For{" "}
            {params.category[0].toLocaleUpperCase() +
              params.category.slice(1).toLocaleLowerCase()}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="Product Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <Link href={`/${product.categoryName.toLocaleLowerCase()}`}>
                      {product.categoryName[0].toLocaleUpperCase() +
                        product.categoryName.slice(1).toLocaleLowerCase()}
                    </Link>
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
