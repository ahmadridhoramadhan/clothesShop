import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { CartIcon } from "../../icons/CartIcon"
import { SearchIcon } from "../../icons/SearchIcon"
import OnOutClick from "../../event/OnOutClick"

export default function Header() {
    const router = useRouter()
    const [isInputOpen, setIsInputOpen] = useState(false)
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    function input_show(): void { setIsInputOpen(!isInputOpen) }
    function burger_menu_show(): void { setIsBurgerMenuOpen(!isBurgerMenuOpen) }

    return (
        <header className="sticky top-0 z-30">
            <section className="md:grid grid-cols-3 hidden container mx-auto mt-3">
                <div className="flex justify-self-start">
                    <Link href="/contactUs" className={router.pathname === '/contactUs' ? 'rounded-full border-2 border-black bg-black py-3 px-5 text-white transition-colors duration-300' : 'rounded-full border-2 border-black py-3 px-5 transition-colors duration-300 bg-white text-black hover:text-white hover:bg-black'}>Contact</Link>
                    <Link href="/" className={(router.pathname === '/') ? 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:bg-black after:transition-all after:w-full' : 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:w-0 after:bg-black after:transition-all hover:after:w-full'}> <span className="whitespace-nowrap">About Us</span></Link>
                    <Link href="/Shop" className={(router.pathname === '/Shop') ? 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:bg-black after:transition-all after:w-full' : 'relative py-2 px-4 after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-1 after:w-0 after:bg-black after:transition-all hover:after:w-full'}>shop</Link>
                </div>
                <div className="justify-self-center">
                    <span className="">logo</span>
                </div>
                <div className="flex gap-3 items-center justify-self-end">
                    <form action="" method="get" className="select-none">
                        <div className="relative select-none z-50">
                            <input type="search" name="search" id="search" className={"rounded-md pl-9 pt-2 pb-[6px] pr-2 transition-all box-border duration-300 " + (isInputOpen ? "w-96" : "w-0 pl-0 pr-0")} />
                            <label htmlFor="search" className={"absolute top-2 " + (isInputOpen ? "left-2" : "right-3")} onClick={input_show}>
                                <SearchIcon additional_class="" />
                            </label>
                        </div>
                        <OnOutClick eventClick={input_show} valueEventClick={isInputOpen} />
                    </form>
                    <button type="button" className="">
                        <CartIcon />
                    </button>
                </div>
            </section>

            <section className="sticky top-0 flex justify-between my-2 border-b-2 border-black px-3 items-center md:hidden">
                <div><button type="button"><BurgerMenuIcon /></button></div>
                <div>LOGO</div>
                <div><button type="button"><CartIcon /></button></div>

                {/* <div className="fixed bg-black/30 left-0 w-3/4 top-0 bottom-0">

                </div> */}
            </section>
        </header>
    )
}

function BurgerMenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}
