export interface simplifiedProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
}

export interface fullProduct {
  _id: string;
  price: number;
  name: string;
  slug: string;
  description: string;
  categoryName: string;
  images: any;
  price_id: string;
}
