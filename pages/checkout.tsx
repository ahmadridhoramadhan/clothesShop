import Layout from "@/components/layouts";
import { useEffect, useState } from "react";
import ButtonCancel from "../components/checkoutPage/ButtonCancel";
import ButtonContinue from "../components/checkoutPage/ButtonContinue";
import CardCheckout from "../components/checkoutPage/CardCheckoutItem";
import TableTotalPrice from "../components/checkoutPage/TableTotalPrice";
import { SectionShippingInformation } from "../components/checkoutPage/SectionShippingInformation";
import { SectionContactInformation } from "../components/checkoutPage/SectionContactInformation";
import { useRouter } from "next/router";



export default function Checkout() {

    const [checkoutItems, setCheckoutItems] = useState([])
    const router = useRouter()

    // ==================================================================
    useEffect(() => {
        let data = sessionStorage.getItem('checkoutItems') as string
        if (data == null || data == undefined) {
            router.back()
        } else {
            setCheckoutItems(JSON.parse(data))
        }
        sessionStorage.removeItem('checkoutItems')
    }, [router])

    const CheckoutItemList = checkoutItems.map((checkoutItem, index) => {
        const json_checkoutItem = JSON.parse(checkoutItem)
        return (
            <CardCheckout checkoutItem={json_checkoutItem} key={index} />
        )
    })
    const subtotal = checkoutItems.reduce((acc, checkoutItem) => {
        const json_checkoutItem = JSON.parse(checkoutItem)
        return acc + json_checkoutItem.totalPrice
    }, 0)

    // ==================================================================


    return (
        <Layout title="Checkout">
            <div className="mx-auto flex max-w-8xl flex-col gap-2 p-3 transition-all md:flex-row-reverse">
                <section className="flex flex-auto flex-col md:border-l-2 border-black md:pl-5">
                    <h1 className="text-3xl">Product List</h1>
                    <div className="mt-2 gap-2 flex flex-col md:flex-col-reverse h-full justify-between">
                        <TableTotalPrice subtotal={subtotal} />
                        <div className="border-t border-b md:border-b-0 border-black py-5 flex flex-col gap-4">
                            {CheckoutItemList}
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