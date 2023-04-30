import { ReactNode } from "react";

export function SectionProduct({ children, title, isHorizontal = false }: { children: ReactNode; title: string; isHorizontal?: boolean; }): JSX.Element {
    return (
        <section className="mt-20">
            <h1 className="mb-2 font-serif text-2xl xs:text-3xl md:text-4xl border-y-2 border-black py-5 pl-5">{title}</h1>
            <div className={isHorizontal ? "flex overflow-auto gap-3 md:gap-5 scrollbar-hide" : "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-items-center overflow-auto gap-3 md:gap-7 scrollbar-hide justify-around"}>
                {children}
            </div>
        </section>
    );
}
