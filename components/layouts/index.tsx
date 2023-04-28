import Head from "next/head";
import { ReactNode, createContext, useState } from "react";
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
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}