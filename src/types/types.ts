export type CatalogType = {
    id: string;
    slug: string;
    title: string;
    color: string;
    hoverColor: string;
}[];

export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    fragment?: string;
    img: string;
    priceHard?: number;
    priceEBook?: number;
    priceAudioBook?: number;
    publisher?: string;
    publicationDate?: number;
    language?: string;
    printLength?: number;
    dimentions?: number;
    editorialReviews?: { review: string, source: string }[];
    age?: number;
    hoverColor?: string;
}[];

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: String;
  };

  export type CartItemType = {
    id: string;
    title: string;
    img: string;
    price: number;
    optionTitle?: string;
    quantity?: number;
  }
  