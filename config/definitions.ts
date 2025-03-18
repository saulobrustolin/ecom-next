export type slug = {
    slug: string
}

interface Image {
    path: string;
}
  
export interface ImagesProductProps {
    images: Image[];
}

export interface availableVariable {
    id: number,
    type: string,
    value: string,
    fk_product: number
}