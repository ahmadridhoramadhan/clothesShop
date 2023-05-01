import ProductNameAndPrice from "@/components/detailProductPage/ProductNameAndPrice";
import ProductSelectColor from "@/components/detailProductPage/ProductSelectColor";
import ProductSelectSize from "@/components/detailProductPage/ProductSelectSize";
import Layout from "@/components/layouts";
import ProductInterface from "@/utils/interface/ProductInterface";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { Cookies } from "react-cookie";
import SliderImageProduct from "../../../../components/detailProductPage/SliderImageProduct";
import { ProductDescription } from "../../../../components/detailProductPage/ProductDescription";
import { refreshCartListContext } from "@/components/cart";

interface AddToCartInterface {
    color: string
    size: string | number
    id: number
    thumbnail: string
    price: number
    stock: number
    name: string
    category: string
}

export default function DetailProduct({ product }: { product: ProductInterface }) {
    const cookies = new Cookies()
    const Router = useRouter()
    const { id } = Router.query
    const [selectedValue, setSelectedValue] = useState("")


    const [refreshCartState, setRefreshCartState] = useState(false)


    const addToCart = (formData: AddToCartInterface) => {
        const cartItems = cookies.get('cartItems') || []
        const option = { maxAge: 20 * 24 * 60 * 60, path: '/' } // 20 days
        const data = {
            id: formData.id,
            color: formData.color,
            size: formData.size,
            price: formData.price,
            name: formData.name,
            thumbnail: formData.thumbnail,
            stock: formData.stock,
            category: formData.category,
            quantity: 1,
        }

        const indexDuplicate = cartItems.findIndex((cartItem: string) => {
            const parsedItem = JSON.parse(cartItem)
            // Mengecek apakah ada objek dengan properti yang sama, namun tidak termasuk `quantity`
            return parsedItem.color === data.color &&
                parsedItem.size === data.size &&
                parsedItem.id === data.id
        })

        if (indexDuplicate !== -1) {
            // Jika ditemukan objek yang sama, maka update quantity-nya
            const duplicateObj = JSON.parse(cartItems[indexDuplicate])
            if (duplicateObj.quantity < data.stock) {
                duplicateObj.quantity += 1
                cartItems.splice(indexDuplicate, 1)
                cartItems.push(JSON.stringify(duplicateObj))
            } else {
                alert('out of stock!')
            }
        } else {
            // jika tidak maka akan dimasukkan data dari data dari form
            cartItems.push(JSON.stringify(data))
        }
        cookies.set('cartItems', cartItems, option)

        setRefreshCartState(!refreshCartState)
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        const color = data.get('color') as string;
        const size = data.get('size') as string;
        const name = data.get('name') as string
        const category = data.get('category') as string
        const stock = data.get('stock')
        const price = data.get('price')
        const thumbnail = data.get('thumbnail') as string

        if (!color || !size) {
            alert('Please select color and size!');
            return;
        }

        const { size: selectedSize } = JSON.parse(size) as { size: string | number };
        const willSendData = {
            color: color,
            size: selectedSize,
            id: parseInt(Array.isArray(id) ? id[0] : id ?? '', 10),
            price: price !== null ? parseInt(price as string, 10) : 0,
            stock: stock !== null ? parseInt(stock as string, 10) : 0,
            thumbnail: thumbnail,
            category: category,
            name: name,
        };
        addToCart(willSendData);
    };

    const handleSelectedFormValue = (event: ChangeEvent<HTMLInputElement>) => { setSelectedValue(event.target.value) }


    return (
        <refreshCartListContext.Provider value={{ refreshCartState: refreshCartState, setRefreshCartState: setRefreshCartState }}>
            <Layout title="DetailProduct">
                <div className="h-full">
                    <section className="mx-auto max-w-[115rem] flex flex-col sm:flex-row">
                        <div>
                            <ProductNameAndPrice mobile={true} name={product.name} price={product.price} />
                        </div>

                        <div className="basis-3/4 md:p-5 p-2">
                            <SliderImageProduct product={product} />
                        </div>

                        <div className="flex flex-auto flex-col px-2 justify-evenly pb-40">
                            <div>
                                <ProductNameAndPrice name={product.name} price={product.price} />
                            </div>

                            <section className="p-2">
                                <form onSubmit={handleFormSubmit} className="mt-5" id="addToCart">

                                    <input type="hidden" name="price" value={product.price} />
                                    <input type="hidden" name="name" value={product.name} />
                                    <input type="hidden" name="category" value={product.category} />

                                    <div className="mt-5">
                                        <ProductSelectColor product={product} setSelectedValue={handleSelectedFormValue} selectedValue={selectedValue} />

                                        <ProductSelectSize selected_color_value={selectedValue} product={product} />
                                    </div>
                                </form>
                            </section>

                            <div className="flex">
                                <button form="addToCart" type="submit" className="flex-auto bg-black py-3 text-white rounded-sm">Add to Cart</button>
                            </div>
                        </div>
                    </section>

                    {/* Deskripsi */}
                    <section className="container mx-auto">

                        <ProductDescription product={product} />

                    </section>

                    {/* Product yang terkait atau di sarankan */}
                    <section></section>
                </div>

            </Layout >
        </refreshCartListContext.Provider>
    )
}

export async function getStaticPaths() {
    const dataAllProducts: Array<ProductInterface> = require('@/db/products.json')
    const paths = dataAllProducts.map((product: ProductInterface) => ({
        params: {
            id: String(product.id),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: { params: { id: number } }) {
    const id = context.params.id
    const dataAllProducts: Array<ProductInterface> = require('@/db/products.json')
    const product = dataAllProducts.find(obj => obj.id == id)
    return {
        props: {
            product,
        },
    };
}