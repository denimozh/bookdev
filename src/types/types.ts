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