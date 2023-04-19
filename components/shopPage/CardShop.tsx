import Image from "next/image";
import Link from "next/link";
import { CardShopInterface } from "../../utils/interface/CardShopInterface";

export default function CardShop(props: CardShopInterface): JSX.Element {
    const { Product_name, product_price, thumbnail_src, id } = props;

    return (
        <Link href={'shop/product/' + id}>
            <div className="">
                <div className="h-44 w-32 relative xs:w-40 xs:h-52 md:w-60 md:h-80 lg:w-80 lg:h-96">
                    <Image src={thumbnail_src.base_url + thumbnail_src.name} alt={thumbnail_src.alt} fill />
                </div>

                <div className="">
                    <h4 className="text-lg xs:text-xl md:text-3xl">{Product_name}</h4>
                    <h5 className="text-xs text-green-700 md:text-base">{product_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h5>
                </div>
            </div>

        </Link>
    );
}
