import { imageType } from "../type/imageType";

export default interface ProductInterface {
    id: number;
    price: number;
    name: string;
    total_stock: number;
    carousel_images: Array<imageType>;
    thumbnail: imageType;
    short_product_description: string;
    descriptions: Array<
        {
            img: imageType;
            text: string;
        }
    >;
    products: Array<
        {
            color: string;
            available_sizes: Array<{
                stock: number;
                size: string;
            }>;
            thumbnail: imageType;
        }
    >;
}
