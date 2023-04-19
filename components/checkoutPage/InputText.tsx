import { InputTextInterface } from "@/utils/interface/InputTextInterface";

export default function InputText(props: InputTextInterface): JSX.Element {
    const { name, placeholder, additional_wrapper_class = "", typeInput = "text", additional_input_class = "", additional_label_class = "" } = props;

    return (
        <div className={"relative " + additional_wrapper_class}>
            <input type={typeInput} name={name} id={name} className={"peer w-full border-b-2 border-black pb-1 pl-3 pt-2 text-xl outline-none " + additional_input_class} placeholder=" " />
            <label htmlFor={name} className={"absolute bottom-8 left-1 text-sm transition-all peer-placeholder-shown:bottom-2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-xl peer-focus:bottom-8 peer-focus:left-1 peer-focus:text-sm " + additional_label_class}>{placeholder}</label>
        </div>
    );
}
