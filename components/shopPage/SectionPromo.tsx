import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import manOutfit from '../../public/shop/man.jpg'
import womanOutfit from '../../public/shop/woman.jpg'
import { ChevronRight } from "../icons/ChevronRight";
import { ChevronLeft } from "../icons/ChevronLeft";
import { useRouter } from "next/router";

export default function SectionPromo(): JSX.Element {
    const firstSlide = useRef<HTMLDivElement>(null!);
    const secondSlide = useRef<HTMLDivElement>(null!);
    const containerRef = useRef<HTMLDivElement>(null!);
    const router = useRouter()

    const [second, setSecond] = useState(false);
    const [first, setFirst] = useState(true);

    const [visibleImageIndex, setVisibleImageIndex] = useState(0);
    useEffect(() => {
        const options = {
            root: containerRef.current,
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
        const images = containerRef.current.querySelectorAll('.image-container');
        images.forEach((image) => observer.observe(image));

        return () => observer.disconnect();
    }, [containerRef]);
    useEffect(() => {
        if (visibleImageIndex == 1) {
            setFirst(true)
            setSecond(false)
        } else {
            setFirst(false)
            setSecond(true)
        }
    }, [visibleImageIndex])

    function handleFirstSlide() {
        firstSlide.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    function handleSecondSlide() {
        secondSlide.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }


    return (
        <section id="promo" className="relative aspect-[5/4] sm:aspect-[6/3] md:mb-20 mb-10">

            <div id="slide" className="overflow-auto shadow-lg rounded-sm w-full h-full snap-x snap-mandatory scrollbar-hide" ref={containerRef}>
                <div className="w-full h-full flex flex-nowrap">
                    <div className="w-full h-full flex-shrink-0 lg:flex-shrink snap-start relative image-container after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:content-['MAN'] after:text-white after:font-bold after:text-5xl" data-index={1} id="item-1" ref={firstSlide}><Image src={manOutfit} alt="" className="object-cover" fill /></div>
                    <div className="w-full h-full flex-shrink-0 lg:flex-shrink snap-end relative image-container after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:content-['WOMAN'] after:text-white after:font-bold after:text-5xl" data-index={2} id="item-2" ref={secondSlide}><Image src={womanOutfit} alt="" className="object-cover" fill /></div>
                </div>
            </div>


            <button className="absolute sm:left-7 left-4 bottom-1/2 sm:scale-150 scale-105 rounded-full bg-black/10 text-white lg:hidden" onClick={(second) ? handleFirstSlide : handleSecondSlide}><ChevronLeft /></button>
            <button className="absolute sm:right-7 right-4 bottom-1/2 sm:scale-150 scale-105 rounded-full bg-black/10 text-white lg:hidden" onClick={(first) ? handleSecondSlide : handleFirstSlide}><ChevronRight /></button>
            <div className="absolute bottom-2 flex h-1 w-full gap-2 px-2 md:bottom-4 md:h-2 md:gap-5 md:px-5 lg:hidden" id="SlideNav">
                <button className={(first) ? 'inline-block w-full bg-black/90' : 'inline-block w-full bg-black/40'} onClick={handleFirstSlide}></button>
                <button className={(second) ? 'inline-block w-full bg-black/90' : 'inline-block w-full bg-black/40'} onClick={handleSecondSlide}></button>
            </div>
        </section>
    );
}
