import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function SectionPromo(): JSX.Element {
    const firstSlide = useRef<HTMLDivElement>(null!);
    const secondSlide = useRef<HTMLDivElement>(null!);
    const containerRef = useRef<HTMLDivElement>(null!);

    const [second, setSecond] = useState(false);
    const [first, setFirst] = useState(true);

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

    useEffect(() => {
        const container = containerRef.current;
        const firstSlideRef = firstSlide.current;
        const secondSlideRef = secondSlide.current;

        const handleScroll = () => {
            const containerScrollLeft = container.scrollLeft;
            const firstSlideLeft = firstSlideRef.offsetLeft;
            const secondSlideLeft = secondSlideRef.offsetLeft;

            if (containerScrollLeft >= (secondSlideLeft - 300)) {
                // Your code to handle second slide in view goes here
                setSecond(true);
                setFirst(false);
            } else if (containerScrollLeft >= firstSlideLeft) {
                // Your code to handle first slide in view goes here
                setFirst(true);
                setSecond(false);
            }
        };

        // const interval = setInterval(() => {
        //     if (first) {
        //         handleSecondSlide();
        //     } else if (second) {
        //         handleFirstSlide();
        //     }
        // }, 5000);
        container.addEventListener('scroll', handleScroll);

        return () => {
            // clearInterval(interval);
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="promo" className="relative aspect-[5/4] sm:aspect-[6/3] md:mb-20 mb-10">

            <div id="slide" className="overflow-auto rounded-xl bg-slate-100 w-full h-full snap-x snap-mandatory scrollbar-hide" ref={containerRef}>
                <div className="w-full bg-slate-200 h-full flex flex-nowrap">
                    <div className="w-full h-full flex-shrink-0 lg:flex-shrink bg-slate-300 snap-start" id="item-1" ref={firstSlide}><Image src="" alt="" /></div>
                    <div className="w-full h-full flex-shrink-0 lg:flex-shrink bg-slate-500 snap-end" id="item-2" ref={secondSlide}><Image src="" alt="" /></div>
                </div>
            </div>


            <button className="absolute sm:left-7 left-4 bottom-1/2 sm:scale-150 scale-105 rounded-full bg-black/10 text-white lg:hidden" onClick={(second) ? handleFirstSlide : handleSecondSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-9 w-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button className="absolute sm:right-7 right-4 bottom-1/2 sm:scale-150 scale-105 rounded-full bg-black/10 text-white lg:hidden" onClick={(first) ? handleSecondSlide : handleFirstSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-9 w-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <div className="absolute bottom-2 flex h-1 w-full gap-2 px-2 md:bottom-4 md:h-2 md:gap-5 md:px-5 lg:hidden" id="SlideNav">
                <button className={(first) ? 'inline-block w-full bg-black/90' : 'inline-block w-full bg-black/40'} onClick={handleFirstSlide}></button>
                <button className={(second) ? 'inline-block w-full bg-black/90' : 'inline-block w-full bg-black/40'} onClick={handleSecondSlide}></button>
            </div>
        </section>
    );
}
