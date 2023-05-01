import ProductInterface from "@/utils/interface/ProductInterface";
import React, { ChangeEvent, useState } from "react";
import ProductInputSize from "@/components/detailProductPage/ProductInputSize";

interface SelectSizeInterface {
    selected_color_value: string;
    product: ProductInterface;
}
export default function ProductSelectSize({ selected_color_value, product }: SelectSizeInterface): JSX.Element {
    const selected_color = product.products.find(obj => obj.color === selected_color_value);
    const [selectedSize, setSelectedSize] = useState('')
    const handleSelectedSize = (event: ChangeEvent<HTMLInputElement>) => { setSelectedSize(event.target.value) }
    const list_size = selected_color?.available_sizes.map((size, index) => {
        if (size.stock > 0) {
            return (
                <ProductInputSize value={size} key={index} setSelectedSize={handleSelectedSize} />
            );
        }
    });
    return (
        <div className="mt-3 border-y-2 py-2 overflow-auto">
            <div className="text-sm font-semibold">Size : <span className="font-semibold text-xl">{selectedSize ? (JSON.parse(selectedSize).size) : ''}</span></div>
            <ul className="flex mt-3">
                {list_size}
            </ul>
        </div>
    );
}
