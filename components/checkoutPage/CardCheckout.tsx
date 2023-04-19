import Image from "next/image";
import CardCheckoutInterface from "../../utils/interface/CardCheckoutInterface";

export default function CardCheckout(props: CardCheckoutInterface): JSX.Element {
    const { thumbnail_src, product_color, product_name, product_price, product_quantity, product_size } = props;

    return (
        <div className="flex gap-2">
            <div className="relative md:w-28 md:h-28 w-20 h-20"><Image src={thumbnail_src} alt="Product Image" fill priority={false} /></div>
            <div className="flex flex-auto flex-col justify-between overflow-auto">
                <p className="truncate break-words text-xl">{product_name}</p>
                <div>
                    <p className="text-sm text-gray-700">Color : {product_color} / Size : {product_size} </p>
                    <div className="flex justify-between">
                        <span className="border-b-2 border-black px-1 pt-1 text-sm">{product_quantity} x</span>
                        <span className="text-lg">{product_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
