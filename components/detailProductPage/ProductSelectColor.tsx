import ProductInterface from "@/utils/interface/ProductInterface";
import React, { ChangeEvent } from "react";
import ProductInputColor from "./ProductInputColor";

interface SelectColorInterface {
    product: ProductInterface;
    selectedValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function ProductSelectColor({ product, selectedValue }: SelectColorInterface): JSX.Element {
    const list_color = product.products.map((product, index) => {
        return (
            <ProductInputColor thumbnail_src={product.thumbnail} value={product.color} selectedValue={selectedValue} key={index} />
        );
    });
    return (
        <div>
            <div className="text-sm font-semibold mb-1">Color : </div>
            <div className="overflow-auto scrollbar-hide">
                <ul className="flex gap-1">
                    {list_color}
                </ul>
            </div>
        </div>
    );
}
