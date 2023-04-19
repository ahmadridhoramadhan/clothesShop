import { imageType } from "@/utils/type/imageType";
import Image from "next/image";
import React, { ChangeEvent } from "react";

interface InputRadioColorInterface {
    value: string;
    thumbnail_src: imageType;
    selectedValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function ProductInputColor({ value, thumbnail_src, selectedValue }: InputRadioColorInterface): JSX.Element {
    return (
        <li>
            <input type="radio" name="color" id={value} className="peer hidden" value={value} form="addToCart" onChange={selectedValue} />
            <label htmlFor={value} className="peer-checked:blur-[1px] peer-checked:brightness-75 transition-all peer-checked:scale-110">
                <div className="h-20 w-16 relative"><Image src={thumbnail_src.base_url + thumbnail_src.name} alt={thumbnail_src.alt} fill /></div>
            </label>
        </li>
    );
}
