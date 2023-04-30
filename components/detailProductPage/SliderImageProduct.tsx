import ProductInterface from "@/utils/interface/ProductInterface";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";

export default function SliderImageProduct({ product, additional_class }: { product: ProductInterface; additional_class?: string }): JSX.Element {
    const [howMuchImage, setHowMuchImage] = useState(0)
    const [visibleImageIndex, setVisibleImageIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const options = {
            root: sliderRef.current,
            threshold: 0.5,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const index = parseInt((entry.target as HTMLElement).dataset.index!);
                if (entry.isIntersecting) {
                    setVisibleImageIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const images = sliderRef.current.querySelectorAll('.image-container');
        images.forEach((image) => observer.observe(image));

        return () => observer.disconnect();
        setHowMuchImage(sliderRef.current.querySelectorAll('img').length)
    }, [sliderRef]);

    const NextSlider = (index: number) => {
        const imgNode = sliderRef.current.querySelectorAll('img')
        imgNode[(index < imgNode.length - 1 ? index + 1 : index)].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    const PrevSlider = (index: number) => {
        const imgNode = sliderRef.current.querySelectorAll('img')[(index > 0 ? index - 1 : index)]
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }


    const imageProductList = product.carousel_images.map((image, index) => (
        <div className="w-full h-full shrink-0 snap-center relative image-container" key={index} data-index={index}>
            <Image src={`${image.base_url}${image.name}`} alt={image.alt} fill />
        </div>
    ));
    return (
        <div className={`relative ${additional_class}`} id="SliderImageProduct">
            <button className="absolute left-2 bottom-1/2 bg-black/10 rounded-full text-white z-10" type="button" onClick={() => PrevSlider(visibleImageIndex)}><ChevronLeft /></button>
            <button className="absolute right-2 bottom-1/2 bg-black/10 rounded-full text-white z-10" type="button" onClick={() => NextSlider(visibleImageIndex)}><ChevronRight /></button>
            <div className="scrollbar-hide snap-mandatory scroll-smooth snap-x aspect-video overflow-auto flex flex-nowrap" ref={sliderRef}>
                {imageProductList}
            </div>
        </div>
    );
}