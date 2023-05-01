import Layout from "@/components/layouts";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import image1 from '../public/aboutUs/dall.png'
import image2 from '../public/aboutUs/s-o-c-i-a-l-c-u-t-aXJdmnxauwY-unsplash.jpg'
import image3 from '../public/aboutUs/hannah-morgan-ycVFts5Ma4s-unsplash.jpg'

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  const buttonStyle = "border-2 border-black px-3 py-2 hover:bg-black hover:text-white transition-all rounded-md shadow-lg";

  return (
    <Layout title="Home">
      <div className="overflow-hidden">
        <section
          className='overflow-hidden h-screen w-full bg-[url("../public/aboutUs/clem-onojeghuo-HpEDSZukJqk-unsplash.jpg")] bg-no-repeat flex-col bg-cover flex items-center justify-center'
          data-aos="fade-down"
          data-aos-duration="600">
          <h1
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="xl:text-9xl whitespace-nowrap lg:text-6xl md:text-5xl text-2xl text-white capitalize select-none">
            i dont know what am i do
          </h1>
          <div className="lg:mt-40 mt-14 select-none" data-aos="zoom-in-up" data-aos-delay="300">
            <Link href={""} className="md:px-10 md:py-5 px-3 py-2 md:text-2xl text-xl hover:bg-white transition-all hover:text-black font-semibold border-2 border-white xl:text-5xl text-white rounded-md">Go Shopping</Link>
          </div>
        </section>
        <div className="overflow-hidden">
          <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-60 p-5">
            <div className="basis-[40%] relative aspect-square bg-black" data-aos="fade-up-right"><Image src={image1} alt="" fill /></div>
            <div className="basis-[60%] flex items-start justify-center flex-col md:pl-6" data-aos="fade-down-left">
              <p className="break-words mt-6 md:text-lg">actually this website is not finished and everything in this content is all just fake data but if you are interested in the product that I made here please just <Link href={'https://berikhtiar.com/ahmad.ridh.3e7'} target="_blank" className="text-gray-600">click here</Link></p>
              <button type="button" className="border-2 border-black rounded-md shadow-lg px-4 py-2 hover:bg-black hover:text-white transition-all text-lg md:text-2xl">its Button</button>
            </div>
          </section>

          <section className="flex flex-col md:flex-row-reverse max-w-7xl mx-auto my-60 p-5">
            <div className="basis-[40%] relative aspect-video bg-black" data-aos="fade-left"><Image src={image2} alt="" /></div>
            <div className="basis-[60%] flex items-start justify-center flex-col md:pl-6" data-aos="fade-right">
              <p className="break-words mt-6 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque repudiandae placeat porro! Quo, debitis earum vitae explicabo obcaecati cupiditate fugiat veritatis sunt accusantium a praesentium recusandae non atque tempora.</p>
              <button type="button" className="border-2 border-black rounded-md shadow-lg px-4 py-2 hover:bg-black hover:text-white transition-all text-lg md:text-2xl">its Button</button>
            </div>
          </section>

          <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-60 p-5">
            <div className="basis-[40%] relative aspect-video bg-black" data-aos="zoom-in-right"><Image src={image3} alt="" /></div>
            <div className="basis-[60%] flex items-start justify-center flex-col md:pl-6" data-aos="zoom-in-left">
              <p className="break-words mt-6 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque repudiandae placeat porro! Quo, debitis earum vitae explicabo obcaecati cupiditate fugiat veritatis sunt accusantium a praesentium recusandae non atque tempora.</p>
              <button type="button" className="border-2 border-black rounded-md shadow-lg px-4 py-2 hover:bg-black hover:text-white transition-all text-lg md:text-2xl">its Button</button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
