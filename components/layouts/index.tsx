import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";


interface LayoutInterface {
    children: ReactNode;
    title: string
}

export default function Layout({ children, title }: LayoutInterface) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}