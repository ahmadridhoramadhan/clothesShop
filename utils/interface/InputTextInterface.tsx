export interface InputTextInterface {
    name: string;
    placeholder: string;
    additional_wrapper_class?: string;
    typeInput?: "text" | "email" | "number" | "password" | "search";
    additional_input_class?: string;
    additional_label_class?: string;
}
