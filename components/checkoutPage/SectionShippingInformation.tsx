import InputText from "./InputText";

export function SectionShippingInformation(): JSX.Element {
    return (
        <section className="mt-10">
            <p className="mb-2 whitespace-nowrap text-2xl font-semibold">Shipping Information</p>
            <div className="flex flex-col gap-5">
                <InputText placeholder={"Country"} name={"country"} />
                <div className="flex gap-3 overflow-hidden pt-2">
                    <InputText name={"province"} placeholder={"Province"} additional_wrapper_class={"flex-auto"} />
                    <InputText name={"Postal_code"} placeholder={"Postal Code"} additional_wrapper_class={"basis-2/5"} />
                </div>
                <InputText name={"city"} placeholder={"City"} />
                <InputText name={"address"} placeholder={"Address"} />
                <InputText name={"address2"} placeholder={"apartment, suite, etc (optional)"} />
                <div className="flex gap-3 overflow-hidden pt-2">
                    <InputText name={"first_name"} placeholder={"First Name"} additional_wrapper_class={"flex-auto"} />
                    <InputText name={"last_name"} placeholder={"Last Name"} additional_wrapper_class={"flex-auto"} />
                </div>
            </div>
        </section>
    );
}
