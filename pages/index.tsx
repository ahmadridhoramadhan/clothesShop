import Layout from "@/components/layouts";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import dummyImage from "../public/favicon.ico"

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  const buttonStyle = "border-2 border-black px-3 py-2 hover:bg-black hover:text-white transition-all rounded-md shadow-lg";

  return (
    <Layout title="Home">
      <div className="overflow-hidden">
        <section
          className='overflow-hidden h-screen w-full bg-[url("../public/vercel.svg")] bg-no-repeat flex-col bg-cover flex items-center justify-center'
          data-aos="fade-down"
          data-aos-duration="600">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="xl:text-9xl whitespace-nowrap lg:text-6xl md:text-5xl text-2xl text-white">
            i dont now what am i do
          </h1>
          <div className="lg:mt-40 mt-14" data-aos="zoom-in-up" data-aos-delay="300">
            <Link href={""} className="md:px-10 md:py-5 px-3 py-2 md:text-2xl text-xl hover:bg-white transition-all hover:text-black font-semibold border-2 border-white xl:text-5xl text-white rounded-md">Go Shopping</Link>
          </div>
        </section>
        <div className="overflow-hidden">
          <section className="my-60 mx-auto max-w-7xl gap-10 p-10 md:flex xl:gap-20">
            <div className="basis-3/4 bg-slate-200 relative h-72" data-aos="fade-up-right"><Image src="" alt="something" fill /></div>
            <div className="flex-auto" data-aos="fade-down-left">
              <p className="mt-7 break-words text-justify xl:mt-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas magnam commodi, laudantium odit odio, aliquid repellat possimus expedita sapiente modi incidunt ipsum nisi dolorum quae sed pariatur, ducimus nobis reprehenderit?</p>
              <button className={buttonStyle}>button</button>
            </div>
          </section>

          <section className="my-60 mx-auto flex max-w-7xl flex-col-reverse gap-10 p-10 md:flex-row xl:gap-20">
            <div className="flex-auto" data-aos="fade-right">
              <p className="mt-7 break-words text-justify xl:mt-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas magnam commodi, laudantium odit odio, aliquid repellat possimus expedita sapiente modi incidunt ipsum nisi dolorum quae sed pariatur, ducimus nobis reprehenderit?</p>
              <button className={buttonStyle}>button</button>
            </div>
            <div className="basis-3/4 bg-slate-200 relative h-72" data-aos="fade-left"><Image src="" alt="something" fill /></div>
          </section>

          <section className="my-60 mx-auto max-w-7xl gap-10 p-10 md:flex xl:gap-20">
            <div className="basis-3/4 bg-slate-200 relative h-72" data-aos="zoom-in-right"><Image src="" alt="something" fill /></div>
            <div className="flex-auto" data-aos="zoom-in-left">
              <p className="mt-7 break-words text-justify xl:mt-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas magnam commodi, laudantium odit odio, aliquid repellat possimus expedita sapiente modi incidunt ipsum nisi dolorum quae sed pariatur, ducimus nobis reprehenderit?</p>
              <button className={buttonStyle}>button</button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
