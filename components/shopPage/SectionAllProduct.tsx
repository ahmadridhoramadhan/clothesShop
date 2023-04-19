import { ReactNode } from "react";

export default function SectionAllProduct({ children }: { children: ReactNode; }): JSX.Element {
    return (
        <section id="Our_recommendation" className="mt-40">
            <h1 className="mb-2 font-serif text-2xl xs:text-3xl md:text-4xl">new Product In This Mount</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-items-center overflow-auto gap-3 md:gap-5 scrollbar-hide justify-around">
                {children}
            </div>
        </section>
    );
}
