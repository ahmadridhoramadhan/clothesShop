import { ReactNode } from "react";

export default function SectionNewProductThisMount({ children }: { children: ReactNode; }): JSX.Element {
    return (
        <section id="newProduct" className="mt-40">
            <h1 className="mb-2 font-serif text-2xl xs:text-3xl md:text-4xl">new Product In This Mount</h1>
            <div className="flex overflow-auto gap-3 md:gap-5 scrollbar-hide">
                {children}
            </div>
        </section>
    );
}
