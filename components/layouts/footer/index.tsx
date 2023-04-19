import Image from "next/image"
import iconEmail from "../../../public/icon/email.png"
import iconGithub from "../../../public/icon/github.png"
import iconInstagram from "../../../public/icon/instagram.png"
import iconWhatsApp from "../../../public/icon/whatsapp.png"
import iconLinkedin from "../../../public/icon/linkedin.png"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-10">
            <section id="LargeFooter" className="mx-auto max-w-7xl border-b pb-5">
                <div className="md:flex w-full gap-10 px-10">
                    <div id="description" className="flex-auto mb-10 md:mb-0">
                        <div>logo</div>
                        <p className="break-words max-w-xl mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde eos dignissimos, ullam sit quam reiciendis ex cupiditate vitae? Facere blanditiis voluptas, optio vero distinctio suscipit Link vitae adipisci amet totam.</p>
                    </div>

                    <div className="flex flex-auto gap-10">

                        <div id="follow" className="basis-1/5 text-lg flex-auto">
                            <h5 className="text-white font-semibold text-xl whitespace-nowrap">Contact Me</h5>
                            <ul>
                                <li className="my-3"><Link href="https://github.com/ahmadridhoramadhan" target={"_blank"} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full"><Image src={iconGithub} alt="github" className="h-4 w-4 inline" /> github</Link></li>
                                <li className="my-3"><Link href="https://www.instagram.com/ramadhanahmadridho/?hl=id" target={"_blank"} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full"><Image src={iconInstagram} alt="instagram" className="h-4 w-4 inline" /> instagram</Link></li>
                                <li className="my-3"><Link href="mailto:ahmadridhor02@gmail.com" target={"_blank"} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full"><Image src={iconEmail} alt="Email" className="h-4 w-4 inline" /> email</Link></li>
                                <li className="my-3"><Link href="https://wa.me/62882020539449" target={"_blank"} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full"><Image src={iconWhatsApp} alt="whatsApp" className="h-4 w-4 inline" /> whatsapp</Link></li>
                                <li className="my-3"><Link href="https://www.linkedin.com/in/ahmad-ridho-ramadhan-6aa322247/" target={"_blank"} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full"><Image src={iconLinkedin} alt="Linkedin" className="h-4 w-4 inline" /> linkedin</Link></li>
                            </ul>
                        </div>

                        <div id="src" className="basis-1/5 flex-auto">
                            <h5 className="text-white font-semibold text-xl">Source</h5>
                            <ul>
                                <li><Link href={'/source'} className="relative transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:border-b-2 after:border-sky-700 after:transition-all hover:text-white hover:after:w-full">all sources</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="my-10 text-center text-2xl">Created By <span className="whitespace-nowrap">Ahmad Ridho Ramadhan</span></section>
        </footer>
    )
}