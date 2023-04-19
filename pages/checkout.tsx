import Layout from "@/components/layouts";
import { useEffect, useMemo, useState } from "react";
import { Cookies } from "react-cookie";
import ButtonCancel from "../components/checkoutPage/ButtonCancel";
import ButtonContinue from "../components/checkoutPage/ButtonContinue";
import CardCheckout from "../components/checkoutPage/CardCheckout";
import TableTotalPrice from "../components/checkoutPage/TableTotalPrice";
import { SectionShippingInformation } from "../components/checkoutPage/SectionShippingInformation";
import { SectionContactInformation } from "../components/checkoutPage/SectionContactInformation";


export default function Checkout() {
    const [checkout_items, setCheckout_items] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const formData = useMemo(() => {
        const cookies = new Cookies()
        return cookies.get('checkout') || []
    }, [])

    if (!formData) {
        console.log('form data is empty')
    }

    // cookies.remove('checkout')
    const getObjectValue = (object: any, get: string) => {
        const objectDup = JSON.parse(object)
        return objectDup[get]
    }

    useEffect(() => {
        setCheckout_items(formData)
        setSubtotal(2)
    }, [formData])
    useEffect(() => {
        let total = 0;
        checkout_items.forEach((checkout_item) => {
            total += parseInt(getObjectValue(checkout_item, "totalPrice"));
        });
        setSubtotal(total);
    }, [checkout_items])


    const checkout_list_item = checkout_items.map((checkout_item, index) =>
        <CardCheckout
            key={index}
            product_color={getObjectValue(checkout_item, "color")}
            product_name={getObjectValue(checkout_item, "name")}
            product_price={parseInt(getObjectValue(checkout_item, "totalPrice"))}
            product_quantity={parseInt(getObjectValue(checkout_item, "quantity"))}
            product_size={getObjectValue(checkout_item, "size")}
            thumbnail_src="/favicon.ico" />
    )


    return (
        <Layout title="Checkout">
            <div className="mx-auto flex max-w-8xl flex-col gap-2 p-3 transition-all md:flex-row-reverse">
                <section className="flex flex-auto flex-col md:border-l-2 border-black md:pl-5">
                    <h1 className="text-3xl">Product List</h1>
                    <div className="mt-2 gap-2 flex flex-col md:flex-col-reverse h-full justify-between">
                        <TableTotalPrice subtotal={subtotal} />
                        <div className="border-t border-b md:border-b-0 border-black py-5 flex flex-col gap-4">
                            {checkout_list_item}
                        </div>
                    </div>
                </section>
                <section className="basis-5/12 lg:basis-3/5">
                    <SectionContactInformation />

                    <SectionShippingInformation />
                    <div className="mt-5 flex gap-3">
                        <ButtonCancel />
                        <ButtonContinue />
                    </div>
                </section>
            </div>
        </Layout>
    )
}