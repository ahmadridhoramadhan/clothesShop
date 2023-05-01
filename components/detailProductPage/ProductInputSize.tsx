import React, { ChangeEvent } from "react";

export default function ProductInputSize({ value, setSelectedSize }: { value: { size: string | number; stock: number; }, setSelectedSize: (event: ChangeEvent<HTMLInputElement>) => void }): JSX.Element {
    return (
        <li className="relative flex justify-center border-r-2 border-black/60 transition-all after:absolute after:bottom-0 after:h-1 after:w-0 after:bg-black/70 after:transition-all after:duration-300 first:rounded-l-lg first:border-l-0 last:rounded-r-lg last:border-r-0 hover:after:w-2/3">
            <input type="radio" name="size" id={typeof value.size === 'number' ? value.size.toString() : value.size} value={JSON.stringify(value)} className="peer hidden" form="addToCart" onChange={setSelectedSize} />
            <label htmlFor={typeof value.size === 'number' ? value.size.toString() : value.size} className=" relative inline-flex h-11 w-14 select-none items-center justify-center after:absolute after:top-0 after:h-1 after:w-0 after:rounded-lg after:bg-black after:transition-all after:duration-500 peer-checked:after:w-4/5">{value.size}</label>
            <input type="hidden" name="stock" value={value.stock} />
        </li>
    );
}
