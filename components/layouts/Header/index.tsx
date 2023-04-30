import InputText from "@/components/checkoutPage/InputText"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState, useMemo } from "react"
import { Cookies } from "react-cookie";
import OnOutClick from "../../event/OnOutClick"
import { BurgerMenuIcon } from "../../icons/BurgerMenuIcon"
import { CartIcon } from "../../icons/CartIcon"
import { SearchIcon } from "../../icons/SearchIcon"
import { XIcon } from "../../icons/XIcon"

import { Cart } from "../../cart";

export default function Header() {
    const router = useRouter()

    const [isInputOpen, setIsInputOpen] = useState(false)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    function show_input(): void { setIsInputOpen(!isInputOpen) }
    function show_burger_menu(): void { setIsBurgerMenuOpen(!isBurgerMenuOpen) }
    function show_cart(): void { setIsCartOpen(!isCartOpen); setIsBurgerMenuOpen(false) }

    useEffect(() => {
        if (!isBurgerMenuOpen) {
            setTimeout(() => {
                document.querySelector("#mobile")?.querySelectorAll("div")[4].classList.add("hidden")
            }, 300);
        } else {
            document.querySelector("#mobile")?.querySelectorAll("div")[4].classList.add("opacity-0")
            setTimeout(() => {
                document.querySelector("#mobile")?.querySelectorAll("div")[4].classList.add("opacity-100")
            }, 10);
        }
    }, [isBurgerMenuOpen])

    return (
        <>
            <header className="sticky top-0 z-30 bg-white border-b border-black pb-1">
                <section className="md:grid grid-cols-3 hidden container mx-auto pt-3">
                    <div className="flex justify-self-start">
                        <Link href="/contactUs" className={router.pathname === '/contactUs' ? 'rounded-full border-2 border-black bg-black py-3 px-5 text-white transition-colors duration-300' : 'rounded-full border-2 border-black py-3 px-5 transition-colors duration-300 bg-white text-black hover:text-white hover:bg-black'}>Contact</Link>
                        <Link href="/" className={(router.pathname === '/') ? 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:bg-black after:transition-all after:w-full' : 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:w-0 after:bg-black after:transition-all hover:after:w-full'}> <span className="whitespace-nowrap">About Us</span></Link>
                        <Link href="/shop" className={(router.pathname === '/shop/product/[id]' || router.pathname == '/shop') ? 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:bg-black after:transition-all after:w-full' : 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:w-0 after:bg-black after:transition-all hover:after:w-full'}>shop</Link>
                    </div>
                    <div className="justify-self-center">
                        <span className="">logo</span>
                    </div>
                    <div className="flex gap-3 items-center justify-self-end">
                        <form action="" method="get" className="select-none">
                            <div className="relative select-none z-50">
                                <input type="search" name="search" id="search" placeholder="Search Something" className={"bg-white/10 pl-9 pt-2 pb-[6px] pr-2 outline-none border-b-2 border-black transition-all box-border duration-300 " + (isInputOpen ? "w-56 xl:w-96" : "w-0 pl-0 pr-0")} />
                                <label htmlFor="search" className={"absolute top-2 " + (isInputOpen ? "left-2" : "right-3")} onClick={show_input}>
                                    <SearchIcon additional_class="" />
                                </label>
                            </div>
                            <OnOutClick eventClick={show_input} valueEventClick={isInputOpen} />
                        </form>
                        <button type="button" className="" onClick={show_cart}>
                            <CartIcon />
                        </button>
                    </div>
                </section>

                <section className="sticky top-0  md:hidden" id="mobile">
                    <div className={"flex relative top-0 z-20 left-0 right-0 justify-between py-2 px-3 items-center bg-white transition-all duration-100 " + (isBurgerMenuOpen ? "" : "")}>
                        <div><button type="button" onClick={show_burger_menu}>{isBurgerMenuOpen ? <XIcon /> : <BurgerMenuIcon />}</button></div>
                        <div>LOGO</div>
                        <div><button type="button" className="" onClick={show_cart}><CartIcon /></button></div>
                    </div>

                    <div className={"fixed z-10 bottom-0 left-0 top-0 right-0 bg-white pt-20 px-3 flex flex-col justify-between pb-40 transition-all duration-300 " + (isBurgerMenuOpen ? "" : "opacity-0")}>
                        <div className="relative select-none">
                            <InputText name="search" placeholder="Search" typeInput="search" additional_label_class="text-gray-600 font-semibold" />
                            <button type="submit" className="absolute right-3 bottom-3"><SearchIcon /></button>
                        </div>

                        <div className="flex flex-col gap-4 ml-5">
                            <Link href={"/shop"} className="text-2xl font-semibold after:absolute relative after:-left-2 after:bg-black after:bottom-3 after:h-1 after:w-1"><span className={(router.pathname == '/shop/product/[id]' || router.pathname == '/shop') ? "after:absolute relative after:-right-2 after:bottom-0 after:-left-2 after:h-1 after:bg-black pb-1 text-gray-600" : ""}>SHOP</span></Link>
                            <Link href={"/"} className="text-2xl font-semibold after:absolute relative after:-left-2 after:bg-black after:bottom-3 after:h-1 after:w-1"><span className={(router.pathname == '/') ? "after:absolute relative after:-right-2 after:bottom-0 after:-left-2 after:h-1 after:bg-black pb-1 text-gray-600" : ""}>About Us</span></Link>
                            <Link href={"/contactUs"} className="text-2xl font-semibold after:absolute relative after:-left-2 after:bg-black after:bottom-3 after:h-1 after:w-1"><span className={(router.pathname == '/contactUs') ? "after:absolute relative after:-right-2 after:bottom-0 after:-left-2 after:h-1 after:bg-black pb-1 text-gray-600" : ""}>Contact Us</span></Link>
                        </div>
                    </div>
                </section>
            </header>
            <Cart isCartOpen={isCartOpen} show_cart={show_cart} />
        </>
    )
}