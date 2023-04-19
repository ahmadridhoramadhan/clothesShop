export default function ContactTextarea({ name, placeholder }: { name: string; placeholder: string; }): JSX.Element {
    return (
        <div className="relative mt-5">
            <textarea name={name} id={name} placeholder=" " required className="peer h-48 w-full border-2 border-black p-3 px-5 text-lg"></textarea>
            <label htmlFor={name} className="absolute -left-px -top-4 bg-white px-3 font-semibold text-sky-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-700 peer-focus:-left-px peer-focus:-top-4 peer-focus:text-sm peer-focus:text-sky-700">{placeholder}</label>
        </div>
    );
}
