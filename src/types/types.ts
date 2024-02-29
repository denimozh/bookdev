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
    price: number;
    priceEBook?: number;
    priceAudioBook?: number;
    publisher?: string;
    publicationDate?: number;
    language?: string;
    printLength?: number;
    dimentions?: number;
    editorialReviews?: { review: string; source: string }[];
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
};

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
};

export type ActionTypes = {
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
};
