import ProductInterface from "@/utils/interface/ProductInterface";
import Image from "next/image";
import React from "react";

export default function CarouselImageProduct({ product, additional_class }: { product: ProductInterface; additional_class?: string }): JSX.Element {
    const imageProductList = product.carousel_images.map((image, index) => (
        <div className="w-full h-full shrink-0 snap-center relative" key={index}>
            <Image src={`${image.base_url}${image.name}`} alt={image.alt} fill />
        </div>
    ));

    return (
        <div className={additional_class}>
            <div className="scrollbar-hide snap-mandatory scroll-smooth snap-x aspect-video overflow-auto flex flex-nowrap">
                {imageProductList}
            </div>
        </div>
    );
}
