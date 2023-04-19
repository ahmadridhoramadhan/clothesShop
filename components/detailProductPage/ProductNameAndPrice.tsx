import React from "react";

interface ProductNameAndPriceInterface {
    mobile?: boolean;
    name: string;
    price: number;
}
export default function ProductNameAndPrice({ mobile = false, name, price }: ProductNameAndPriceInterface): JSX.Element {
    if (mobile) {
        return (
            <div className="my-4 sm:hidden">
                <h1 className="mt-3 mb-2 text-3xl font-semibold">{name}</h1>
                <h3 className="">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h3>
            </div>
        );
    } else {
        return (
            <div className="hidden sm:block">
                <h1 className="mt-3 text-2xl font-semibold">{name}</h1>
                <h3 className="font-mono text-gray-700">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h3>
            </div>
        );
    }
}
