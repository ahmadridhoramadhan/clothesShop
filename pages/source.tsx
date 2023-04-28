import { AddressIcon } from "@/components/icons/AddressIcon"
import { BurgerMenuIcon } from "@/components/icons/BurgerMenuIcon"
import { CartIcon } from "@/components/icons/CartIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { PlusIcon } from "@/components/icons/PlusIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import { TelephoneIcon } from "@/components/icons/TelephoneIcon"
import Layout from "@/components/layouts"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export default function source() {
    return (
        <Layout title="Source Page">
            <div className="container mx-auto transition-all">
                <section className="my-44">
                    <h1 className="ml-3 mb-2 text-3xl font-bold md:text-4xl">Penjelasan Singkat Web Ini</h1>
                    <p className="ml-3 break-words px-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae quidem dolore labore aspernatur iste necessitatibus quam laboriosam similique enim, harum culpa distinctio corrupti error quibusdam incidunt sequi molestias ea ut. Nihil illo veritatis dolores!</p>
                </section>

                <section className="my-44">
                    <h2 className="ml-2 mb-2 text-3xl font-bold md:text-5xl">Image</h2>
                    <p className="ml-3 break-words px-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dicta voluptas fuga, voluptates dignissimos vel.</p>

                    <div>
                        <div className="my-6">
                            <h3 className="ml-2 text-xl font-semibold text-green-700 transition-colors hover:text-green-800 md:text-2xl"><Link href="" target="_blank">Unsplash</Link></h3>
                            <div className="grid grid-cols-2 justify-items-center gap-5 border-t-2 border-black pt-5 sm:grid-cols-4 xl:grid-cols-5">
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                            </div>
                        </div>

                        <div className="my-6">
                            <h3 className="ml-2 text-xl font-semibold text-green-700 transition-colors hover:text-green-800 md:text-2xl"><Link href="" target="_blank">Unsplash</Link></h3>
                            <div className="grid grid-cols-2 justify-items-center gap-5 border-t-2 border-black pt-5 sm:grid-cols-4 xl:grid-cols-5">
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                                <SourceImage link={""} Image_src={""} alt={""} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-44">
                    <h2 className="mb-2 ml-2 text-3xl font-bold md:text-5xl">Icon</h2>
                    <p className="ml-3 break-words px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, amet.</p>

                    <div className="">

                        <div className="my-6">
                            <h3 className="ml-2 text-xl font-semibold text-green-700 transition-colors hover:text-green-800 md:text-2xl"><Link href="https://heroicons.com/" target="_blank">HeroIcons</Link></h3>
                            <div className="grid grid-cols-3 justify-items-center gap-5 border-t-2 border-black pt-5 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
                                <SourceIcon ><CartIcon /></SourceIcon>
                                <SourceIcon ><PlusIcon /></SourceIcon>
                                <SourceIcon ><EmailIcon /></SourceIcon>
                                <SourceIcon ><SearchIcon /></SourceIcon>
                                <SourceIcon ><AddressIcon /></SourceIcon>
                                <SourceIcon ><TelephoneIcon /></SourceIcon>
                                <SourceIcon ><BurgerMenuIcon /></SourceIcon>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="my-44">
                    <h2 className="ml-2 mb-2 text-3xl font-bold md:text-5xl">Font</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        <SourceFont font_name="Jenis font" link="" />
                        <SourceFont font_name="Jenis font" link="" />
                    </div>
                </section>
            </div>
        </Layout>
    )
}

function SourceImage({ link, Image_src, alt }: { link: string, Image_src: string, alt: string }) {
    return (
        <div>
            <Link href={link}><Image src={Image_src} alt={alt} className="h-32 w-32 transition-all hover:scale-105 sm:h-40 sm:w-40 md:h-44 md:w-44 xl:h-60 xl:w-60" /></Link>
        </div>
    )
}

function SourceIcon({ children }: { children: ReactNode }) {
    return (
        <div className="h-20 w-20 border border-black transition-all hover:border-2 hover:bg-slate-50 sm:h-32 sm:w-32 lg:h-40 lg:w-40 flex justify-center items-center">{children}</div>
    )
}

function SourceFont({ font_name, link }: { font_name: string, link: string }) {
    return (
        <div className="ml-3 px-2">
            <Link href={link}>
                <h3 className="ml-5 text-xl font-semibold text-green-700">{font_name}</h3>
            </Link>
            <p className="max-w-sm break-words text-justify text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non perspiciatis adipisci error numquam laborum autem corrupti consequuntur deleniti asperiores?</p>
        </div>
    )
}