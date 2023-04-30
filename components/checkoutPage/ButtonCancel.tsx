import { useRouter } from "next/router";


export default function ButtonCancel(): JSX.Element {
    const router = useRouter()
    const cancel = () => {
        router.back()
    }
    return (
        <button type="button" onClick={cancel} className="flex-auto border-2 border-black py-3"><span className="triangle mr-1 inline-block h-3 w-3 -rotate-90 bg-black"></span>Cancel</button>
    );
}
