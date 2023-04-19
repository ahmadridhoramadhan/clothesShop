import ProductNameAndPrice from "@/components/detailProductPage/ProductNameAndPrice";
import ProductSelectColor from "@/components/detailProductPage/ProductSelectColor";
import ProductSelectSize from "@/components/detailProductPage/ProductSelectSize";
import Layout from "@/components/layouts";
import ProductInterface from "@/utils/interface/ProductInterface";
import { imageType } from "@/utils/type/imageType";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { Cookies } from "react-cookie";


interface AddToCartInterface {
    color: string
    size: string
    name: string
    thumbnail: imageType
    price: number
    stock: number
}

export default function DetailProduct({ product }: { product: ProductInterface }) {
    const cookies = new Cookies()
    const Router = useRouter()
    const { id } = Router.query
    const [selectedValue, setSelectedValue] = useState("")

    const addToCart = (formData: AddToCartInterface) => {
        const cartItems = cookies.get('cartItems') || []
        const option = { maxAge: 20 * 24 * 60 * 60, path: '/' } // 20 days
        const newItem = {
            id: id,
            color: formData.color,
            size: formData.size,
            quantity: 1,
            name: formData.name,
            price: formData.price,
            stock: formData.stock,
            thumbnail: formData.thumbnail,
        }

        const isDuplicate = cartItems.some((cartItem: string) => {
            const parsedItem = JSON.parse(cartItem)
            return (
                parsedItem.color === newItem.color &&
                parsedItem.size === newItem.size &&
                parsedItem.name === newItem.name &&
                parsedItem.price === newItem.price &&
                parsedItem.stock === newItem.stock
            )
        })

        if (isDuplicate) {
            // If a duplicate object is found, update its quantity
            const updatedCartItems = cartItems.map((cartItem: string) => {
                const parsedItem = JSON.parse(cartItem)
                if (
                    parsedItem.color === newItem.color &&
                    parsedItem.size === newItem.size &&
                    parsedItem.name === newItem.name &&
                    parsedItem.price === newItem.price &&
                    parsedItem.stock === newItem.stock
                ) {
                    return JSON.stringify({
                        ...parsedItem,
                        quantity: parsedItem.quantity + 1
                    })
                }
                return cartItem
            })
            cookies.set('cartItems', updatedCartItems, option)
        } else {
            const updatedCartItems = [...cartItems, JSON.stringify(newItem)]
            cookies.set('cartItems', updatedCartItems, option)
        }
    }


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        const color = data.get('color') as string;
        const size = data.get('size') as string;
        const name = data.get('name') as string;
        const price = parseInt(data.get('price') as string);
        const thumbnail = JSON.parse(data.get('thumbnail') as string) as imageType;

        if (!color || !size) {
            alert('Please select color and size!');
            return;
        }

        const { stock, size: selectedSize } = JSON.parse(size) as { stock: number; size: string };
        const willSendData = {
            color,
            size: selectedSize,
            name,
            price,
            stock,
            thumbnail,
        };

        console.log(willSendData)
        // addToCart(willSendData);
    };


    const handleSelectedFormValue = (event: ChangeEvent<HTMLInputElement>) => { setSelectedValue(event.target.value) }

    return (
        <Layout title="DetailProduct">
            <div className="h-full">
                {/* Bagian preview product */}
                <section className="mx-auto max-w-7xl flex flex-col sm:flex-row">
                    <ProductNameAndPrice mobile={true} name={product.name} price={product.price} />
                    <div className="basis-2/4 border relative h-60">
                        <Image src="" alt="" fill />
                    </div>
                    <div className="flex flex-auto flex-col px-2">
                        <ProductNameAndPrice name={product.name} price={product.price} />

                        <section className="p-2">
                            {/* Ukuran dan jenis */}
                            <form onSubmit={handleFormSubmit} className="mt-5" id="addToCart">
                                <HiddenInput
                                    price={product.price}
                                    product_name={product.name}
                                    thumbnail_src={product.thumbnail}
                                />

                                <div className="mt-5">
                                    {/* Jenis */}
                                    <ProductSelectColor
                                        product={product}
                                        selectedValue={handleSelectedFormValue}
                                    />

                                    {/* Category */}
                                    <ProductSelectSize
                                        selected_color_value={selectedValue}
                                        product={product}
                                    />
                                </div>
                            </form>
                        </section>

                        {/* Button */}
                        <div className="flex">
                            <button
                                form="addToCart"
                                type="submit"
                                className="flex-auto bg-black py-3 text-white rounded-sm"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </section>

                {/* Deskripsi */}
                <section className="container mx-auto">
                    <div>Deskripsi yang isinya cuma teks dan penjelasan singkat</div>
                    <div>Sedikit gambar dan yang lain</div>
                    <div>Sedikit gambar dan yang lain</div>
                </section>

                {/* Product yang terkait atau di sarankan */}
                <section></section>
            </div>

        </Layout >
    )
}

function HiddenInput({ price, product_name, thumbnail_src }: { price: number, product_name: string, thumbnail_src: imageType }): JSX.Element {
    return (
        <div>
            <input type="hidden" name="thumbnail" value={JSON.stringify(thumbnail_src)} />
            <input type="hidden" name="price" value={price} />
            <input type="hidden" name="name" value={product_name} />
        </div>
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