"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface CartProduct {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToCart({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: CartProduct) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    price_id,
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
