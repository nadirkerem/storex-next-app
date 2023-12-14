"use client";

import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";

import { urlFor } from "@/lib/sanity";

import { CartProduct } from "./add-to-cart";

export default function BuyNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: CartProduct) {
  const { checkoutSingleItem } = useShoppingCart();

  function handleBuyNow(price_id: string) {
    checkoutSingleItem(price_id);
  }

  const product = {
    price_id,
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
  };

  return (
    <Button onClick={() => handleBuyNow(product.price_id)}>Add To Cart</Button>
  );
}
