export default function ContactInput({ InputType = "text", placeholder, name }: { InputType?: string; placeholder: string; name: string; }): JSX.Element {
    return (
        <div className="relative">
            <input type={InputType} placeholder=" " id={name} name={name} required className="peer w-full appearance-none border-b-2 border-black p-2 px-4 pt-3 pb-1 text-lg text-slate-900 outline-none" />
            <label htmlFor={name} className="absolute -left-px -top-3 text-sm text-sky-700 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-placeholder-shown:text-xl peer-placeholder-shown:font-semibold peer-placeholder-shown:text-gray-600 peer-focus:-left-px peer-focus:-top-3 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-sky-700">{placeholder}</label>
        </div>
    );
}
