import InputText from "./InputText";

export function SectionContactInformation() {
    return (
        <section className="mt-10">
            <p className="mb-2 whitespace-nowrap text-2xl font-semibold">Contact Information</p>
            <div className="flex flex-col gap-4">
                <InputText typeInput="email" name={"email"} placeholder={"Email"} />
                <InputText name={"phone_number"} placeholder={"Phone Number"} />
            </div>
        </section>
    );
}
