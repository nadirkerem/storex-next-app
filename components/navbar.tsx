"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import { categories } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-3xl font-bold md:text-4xl">
            Store
            <span className="text-primary">X</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {categories.map((category) => (
            <div key={category.id}>
              {pathname === category.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={category.href}
                >
                  {category.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={category.href}
                >
                  {category.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"ghost"}
            className="flex h-16 w-16 flex-col gap-y-1.5 rounded-none"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
