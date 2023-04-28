import ProductInterface from "@/utils/interface/ProductInterface";
import React from "react";
import Image from "next/image";

export function ProductDescription({ product }: { product: ProductInterface; }): JSX.Element {
    const list_descriptions = product.descriptions.map((description, index) => (
        <div className="flex md:odd:flex-row justify-around items-center flex-col md:even:flex-row-reverse first:mt-0 md:first:mt-20 mt-20 last:mb-20" key={index}>
            <div className="relative md:basis-[35%] w-[80%] md:w-auto aspect-square"><Image alt={description.img.alt} src={description.img.base_url + description.img.name} fill></Image></div>
            <div className="basis-[50%] p-8">
                <p className="break-words">{description.text}</p>
            </div>
        </div>
    ));
    return (
        <>
            {list_descriptions}
        </>
    );
}
