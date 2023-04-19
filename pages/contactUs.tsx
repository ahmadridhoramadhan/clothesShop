import Layout from "@/components/layouts";
import ContactInput from "../components/contactPage/ContactInput";
import ContactTextarea from "../components/contactPage/ContactTextarea";
import { AddreasIcon } from "../components/icons/AddreasIcon";
import { TelephoneIcon } from "../components/icons/TelephoneIcon";
import { EmailIcon } from "../components/icons/EmailIcon";
import FAQS from "../components/contactPage/FAQS";


export default function ContactUs() {
    return (
        <Layout title="Contact Us">
            <div className="container mx-auto">
                <section>
                    <div className="my-auto w-full">
                        <div className="my-7 xl:flex select-none">
                            <h1 className="text-center sm:text-left sm:mb-3 text-4xl sm:text-6xl font-bold md:text-7xl">FAQS</h1>
                            <p className="text-center text-gray-700 sm:text-left break-words max-w-md sm:ml-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi delectus voluptatibus tenetur nulla ullam officiis?</p>
                        </div>
                        <div className="max-w-5xl mx-auto flex flex-col gap-3">
                            <FAQS question="Which countries do you deliver to?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto hic esse quae animi quas minima quis deserunt? Unde fuga sit deleniti error? Excepturi, veritatis." />
                            <FAQS question="What payment methods do you accept?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto hic esse quae animi quas minima quis deserunt? Unde fuga sit deleniti error? Excepturi, veritatis." />
                            <FAQS question="Can I change my order details or shipping address after I&apos;ve placed my order?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto hic esse quae animi quas minima quis deserunt? Unde fuga sit deleniti error? Excepturi, veritatis." />
                            <FAQS question="how to cooperate with us?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto hic esse quae animi quas minima quis deserunt? Unde fuga sit deleniti error? Excepturi, veritatis." />

                        </div>
                    </div>
                </section>

                <section className="flex min-h-screen">
                    <div className="my-auto flex w-full flex-col-reverse p-2 xl:flex-row xl:items-center xl:justify-center">
                        <div className="xl:max-w-2xl xl:basis-3/5">
                            <form action="" className="flex flex-col gap-4 border px-3 py-5 shadow-lg">
                                <ContactInput name={"name"} placeholder={"Name"} />
                                <ContactInput name={"email"} InputType="email" placeholder={"Email"} />
                                <ContactInput name="subject" placeholder={"Subject"} />

                                <ContactTextarea name={"message"} placeholder={"Message"} />

                                <button type="submit" className="button">Send</button>
                            </form>
                        </div>

                        <div className="xl:ml-10 xl:basis-2/5">
                            <h2 className="text-center font-semibold xl:text-start xl:text-lg">Get In Touch</h2>
                            <h1 className="text-center text-3xl font-bold md:text-4xl xl:text-start xl:text-5xl">Contact our support team</h1>
                            <div className="flex flex-col sm:justify-between md:flex-row md:items-center xl:flex-col xl:items-start">
                                <p className="mt-3 max-w-xl break-words text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde itaque quaerat, voluptatum delectus repellendus quia dolor distinctio tempora omnis quos! Culpa aliquid blanditiis incidunt lab</p>

                                <ul className="my-5 mx-5 text-2xl font-semibold">
                                    <li>
                                        <a href="" className="my-2 block whitespace-nowrap transition-colors hover:text-gray-500 sm:my-3 xl:my-5"><AddreasIcon /> My addreas</a>
                                    </li>
                                    <li>
                                        <a href="" className="my-2 block whitespace-nowrap transition-colors hover:text-gray-500 sm:my-3 xl:my-5"><TelephoneIcon /> +62 974 - 83928 - 5962</a>
                                    </li>
                                    <li>
                                        <a href="" className="my-2 block whitespace-nowrap transition-colors hover:text-gray-500 sm:my-3 xl:my-5"><EmailIcon /> My email</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

