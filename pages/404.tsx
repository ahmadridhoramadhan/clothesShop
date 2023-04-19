import { Router, useRouter } from "next/router"
import { useEffect } from "react";

export default function NotFoundPage() {
    const route = useRouter();
    useEffect(() => {
        setTimeout(() => {
            route.push("/")
        }, 5000)
    }, [route]);
    return (
        <div className="h-screen flex justify-center items-center w-full">
            <div className="">
                <h1 className="text-9xl text-center">404</h1>
                <h2 className="text-xl text-center">Page Not Found</h2>
            </div>
        </div>
    )
}