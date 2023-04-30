import React, { Suspense, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Cookies } from "react-cookie";
import { XIcon } from "../icons/XIcon";
import { CardCartItem } from "./CardCartItem";
import { useRouter } from "next/router";


export const refreshCartListContext = createContext<{
    refreshCartState: boolean;
    setRefreshCartState: React.Dispatch<React.SetStateAction<boolean>>;
}>({ refreshCartState: false, setRefreshCartState: () => { } })


export function Cart({ isCartOpen, show_cart }: { isCartOpen: boolean; show_cart: () => void; }): JSX.Element {
    const cookies = useMemo(() => new Cookies(), []);
    const router = useRouter()

    const [cartItems, setCartItems] = useState([]);
    const [showCartItemsList, setShowCartItemsList] = useState<React.ReactNode>();

    const { refreshCartState } = useContext(refreshCartListContext);
    const [refreshCartListFromRemoveCart, setRefreshCartListFromRemoveCart] = useState(false);

    const [totalCartList, setTotalCartList] = useState(0);
    const incrementTotalCartList = useCallback((productPrice: number) => { setTotalCartList(prevTotal => prevTotal + productPrice); }, [setTotalCartList]);

    useEffect(() => {
        setCartItems(cookies.get('cartItems') || []);
    }, [cookies, refreshCartState, refreshCartListFromRemoveCart]);
    useEffect(() => {
        setTotalCartList(0);
        const show_cart_items_list = cartItems.map((cartItem, index) => {
            const JSON_cartItem = JSON.parse(cartItem);
            incrementTotalCartList(JSON_cartItem.price * JSON_cartItem.quantity);
            return (
                <div key={index}>
                    <CardCartItem cartItem={JSON_cartItem} />
                </div>
            );
        });
        setShowCartItemsList(show_cart_items_list);
    }, [cartItems, incrementTotalCartList]);



    function handleFormCheckout(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const data = formData.getAll('checkoutItems[]')

        sessionStorage.setItem('checkoutItems', JSON.stringify(data))
        router.push('/checkout')
    }

    return (
        <div className={"fixed h-full right-0 z-50 flex transition-all duration-300 " + (isCartOpen ? 'w-full' : 'w-0')} id="cart">
            <button type="button" className="flex-auto" onClick={show_cart}></button>
            <div className="flex h-full w-full flex-col bg-white sm:h-auto sm:w-auto sm:min-w-[38rem]">
                <div className="flex justify-between border-b-2 border-black px-5 py-4">
                    <p className="whitespace-nowrap text-4xl font-semibold">My Cart</p>
                    <button onClick={show_cart} type="button"><XIcon /></button>
                </div>

                <div className="flex-auto overflow-auto scrollbar-hide">
                    <Suspense fallback={<h2> Loading...</h2>}>
                        <refreshCartListContext.Provider value={{ refreshCartState: refreshCartListFromRemoveCart, setRefreshCartState: setRefreshCartListFromRemoveCart }}>
                            <form onSubmit={handleFormCheckout} id="checkout">
                                {showCartItemsList}
                            </form>
                        </refreshCartListContext.Provider>
                    </Suspense>
                </div>

                <div className="border-t-2 border-black p-4 sm:p-5">
                    <table className="mb-3 w-full sm:mb-5">
                        <tbody>
                            <tr>
                                <td className="sm:w-28 w-20 text-3xl font-semibold sm:text-4xl">Total</td>
                                <td className="text-3xl font-bold">:</td>
                                <td className="whitespace-nowrap text-end text-xl font-semibold sm:text-2xl">{totalCartList.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" form="checkout" className={`w-full bg-black py-4 text-white sm:text-xl ${router.pathname == '/checkout' ? 'cursor-not-allowed' : ''}`} disabled={router.pathname == '/checkout'}>Checkout Now</button>
                </div>
            </div>
        </div>
    );
}