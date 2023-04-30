import { PlusIcon } from "@/components/icons/PlusIcon";
import { imageType } from "@/utils/type/imageType";
import Image from "next/image";
import { useContext, useEffect, useMemo, useState } from "react";
import { Cookies } from "react-cookie";
import { MinusIcon } from "../icons/MinusIcon";
import { cardCartItemInterface } from "./cardCartItemInterface";

import Link from "next/link";
import { refreshCartListContext } from ".";
import { useRouter } from "next/router";

export function CardCartItem({ cartItem }: { cartItem: cardCartItemInterface }): JSX.Element {
    const cookies = useMemo(() => new Cookies(), []);
    const thumbnail = JSON.parse(cartItem.thumbnail) as imageType
    const router = useRouter()

    // TODO:make this cart always update so if the product runs out it will be disabled or if the stock is changed so that you cannot order past the stock limit
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const [subTotal, setSubTotal] = useState(cartItem.price * cartItem.quantity);
    useEffect(() => {
        setQuantity(cartItem.quantity)
        setSubTotal(cartItem.price * cartItem.quantity)
    }, [cartItem.quantity, cartItem.price])


    const [checkoutItem, setCheckoutItem] = useState({})
    const { refreshCartState, setRefreshCartState } = useContext(refreshCartListContext)
    useEffect(() => {
        setSubTotal(cartItem.price * quantity);
        setRefreshCartState(prevRefreshCartState => !prevRefreshCartState);
    }, [quantity, cartItem.price, setRefreshCartState,])
    useEffect(() => {
        const cartItems = cookies.get('cartItems') || [];
        const option = { maxAge: 20 * 24 * 60 * 60, path: '/' }; // 20 days
        const indexDuplicate = cartItems.findIndex((fCartItem: string) => {
            const parsedItem = JSON.parse(fCartItem);
            return parsedItem.color === cartItem.color &&
                parsedItem.size === cartItem.size &&
                parsedItem.category === cartItem.category &&
                parsedItem.id === cartItem.id;
        });

        if (indexDuplicate !== -1) {
            const duplicateObj = JSON.parse(cartItems[indexDuplicate])
            if (duplicateObj.quantity <= cartItem.stock) {
                duplicateObj.quantity = quantity
                cartItems.splice(indexDuplicate, 1, JSON.stringify(duplicateObj))
                cookies.set('cartItems', cartItems, option)
            }
        }
    }, [quantity, cookies, cartItem, setRefreshCartState])
    useEffect(() => {
        const checkoutItem = {
            quantity: quantity,
            size: cartItem.size,
            name: cartItem.name,
            totalPrice: subTotal,
            thumbnail: JSON.parse(cartItem.thumbnail),
            color: cartItem.color
        }
        setCheckoutItem(checkoutItem)
    }, [quantity, cartItem, subTotal])



    function remove_this_cart() {
        const cartItems = cookies.get('cartItems') || [];
        const option = { maxAge: 20 * 24 * 60 * 60, path: '/' }; // 20 days

        const indexDuplicate = cartItems.findIndex((fCartItem: string) => {
            const parsedItem = JSON.parse(fCartItem);
            return parsedItem.color === cartItem.color &&
                parsedItem.size === cartItem.size &&
                parsedItem.category === cartItem.category &&
                parsedItem.id === cartItem.id;
        });

        if (indexDuplicate !== -1) {
            cartItems.splice(indexDuplicate, 1);
            cookies.set('cartItems', cartItems, option);
            setRefreshCartState(!refreshCartState)
        }
    }
    const increment_quantity = () => {
        if (quantity < cartItem.stock) {
            setQuantity(quantity + 1);
        }
    };
    const decrement_quantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="w-full flex border-b gap-3 p-1 box-border items-center mt-4 pl-3">
            <input type="hidden" name="checkoutItems[]" value={JSON.stringify(checkoutItem)} />
            <Link href={`shop/product/${cartItem.id}`}>
                <div className="overflow-hidden h-20 w-20 relative"><Image src={`${router.basePath}${thumbnail.base_url}${thumbnail.name}`} alt={thumbnail.alt} fill priority={false} /></div>
            </Link>
            <div className="overflow-hidden flex-auto">
                <p className="text-xl truncate">{cartItem.name}</p>
                <p className="text-sm text-gray-500 truncate">Color : {cartItem.color} / Size : {cartItem.size}</p>

                <div>
                    <div className="relative flex items-center">
                        <button type="button" onClick={decrement_quantity}><MinusIcon /></button>
                        <input type="number" name="" id="" value={quantity} className="w-8 border-0 text-center outline-none ring-0" readOnly />
                        <button type="button" onClick={increment_quantity}><PlusIcon /></button>
                    </div>
                </div>

                <div className="flex justify-between w-full">
                    <span className="text-sm truncate">{subTotal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    <button type="button" onClick={remove_this_cart}>Remove</button>
                </div>
            </div>
        </div>
    );
}
