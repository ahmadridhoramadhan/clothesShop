import { imageType } from "@/utils/type/imageType";
import Image from "next/image";
import CardCheckoutInterface from "../../utils/interface/CardCheckoutInterface";

export default function CardCheckout({ checkoutItem }: { checkoutItem: CardCheckoutInterface }): JSX.Element {
    return (
        <div className="flex gap-2">
            <div className="relative md:w-28 md:h-28 w-20 h-20"><Image src={checkoutItem.thumbnail.base_url + checkoutItem.thumbnail.name} alt={checkoutItem.thumbnail.alt} fill priority={false} /></div>
            <div className="flex flex-auto flex-col justify-between overflow-auto">
                <p className="truncate break-words text-xl">{checkoutItem.name}</p>
                <div>
                    <p className="text-sm text-gray-700">Color : {checkoutItem.color} / Size : {checkoutItem.size} </p>
                    <div className="flex justify-between">
                        <span className="border-b-2 border-black px-1 pt-1 text-sm">{checkoutItem.quantity} x</span>
                        <span className="text-lg">{checkoutItem.totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
