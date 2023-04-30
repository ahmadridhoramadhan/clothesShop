import { imageType } from "@/utils/type/imageType";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";

interface InputRadioColorInterface {
    value: string;
    thumbnail: imageType;
    selectedValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function ProductInputColor({ value, thumbnail, selectedValue }: InputRadioColorInterface): JSX.Element {
    const router = useRouter()
    return (
        <li>
            <input type="radio" name="color" id={value} className="peer hidden" value={value} form="addToCart" onChange={selectedValue} />
            <label htmlFor={value} className="peer-checked:blur-[1px] peer-checked:brightness-75 transition-all peer-checked:scale-110">
                <div className="h-20 w-16 relative"><Image src={`${router.basePath}${thumbnail.base_url}${thumbnail.name}`} alt={thumbnail.alt} fill /></div>
            </label>
            <input type="hidden" name="thumbnail" value={JSON.stringify(thumbnail)} />
        </li>
    );
}
