import { useRouter } from "next/router"
import { useEffect } from "react"


function Test() {
    const router = useRouter()
    useEffect(() => {
        let data = sessionStorage.getItem('checkoutItems') as string
        data = JSON.parse(data)
        console.log(data)
        sessionStorage.removeItem('checkoutItems')
        console.log('test')
    }, [router])

    return (
        <div>
            <h1>Checkout Page</h1>
        </div>
    )
}

export default Test
