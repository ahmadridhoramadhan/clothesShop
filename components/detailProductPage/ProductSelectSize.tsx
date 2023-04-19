import ProductInterface from "@/utils/interface/ProductInterface";
import React from "react";
import ProductInputSize from "@/components/detailProductPage/ProductInputSize";

interface SelectSizeInterface {
    selected_color_value: string;
    product: ProductInterface;
}
export default function ProductSelectSize({ selected_color_value, product }: SelectSizeInterface): JSX.Element {
    const selected_color = product.products.find(obj => obj.color === selected_color_value);
    const list_size = selected_color?.available_sizes.map((size, index) => {
        if (size.stock > 0) {
            return (
                <ProductInputSize value={size} key={index} />
            );
        }
    });
    return (
        <div className="mt-3 border-y-2 py-2">
            <div className="text-sm font-semibold">Size :</div>
            <ul className="flex">
                {list_size}
            </ul>
        </div>
    );
}
