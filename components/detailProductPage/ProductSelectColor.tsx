import ProductInterface from "@/utils/interface/ProductInterface";
import React, { ChangeEvent } from "react";
import ProductInputColor from "./ProductInputColor";

interface SelectColorInterface {
    product: ProductInterface;
    setSelectedValue: (event: ChangeEvent<HTMLInputElement>) => void;
    selectedValue: string
}
export default function ProductSelectColor({ product, setSelectedValue, selectedValue }: SelectColorInterface): JSX.Element {
    const list_color = product.products.map((product, index) => {
        return (
            <ProductInputColor thumbnail={product.thumbnail} value={product.color} selectedValue={setSelectedValue} key={index} />
        );
    });
    console.log(selectedValue)
    return (
        <div>
            <div className="text-sm font-semibold mb-1">Color : <span className="font-semibold text-xl">{selectedValue}</span></div>
            <div className="overflow-auto scrollbar-hide">
                <ul className="flex gap-1">
                    {list_color}
                </ul>
            </div>
        </div>
    );
}
