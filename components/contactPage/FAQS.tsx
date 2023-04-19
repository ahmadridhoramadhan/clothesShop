import { PlusIcon } from "../icons/PlusIcon";
import { useState } from "react";

export default function FAQS({ question, answer }: { question: string; answer: string; }): JSX.Element {
    const [isAnswerOpen, setIsAnswerOpen] = useState(false);

    const show_answer = () => { setIsAnswerOpen(!isAnswerOpen); };

    return (
        <div className=" border-b border-black pb-1 transition-all duration-300">
            <div className="flex justify-between gap-5 items-center">
                <p>{question}</p>
                <button type="button" onClick={show_answer}><PlusIcon /></button>
            </div>
            <div className={"transition-all duration-300 " + (isAnswerOpen ? "my-5 px-3 h-fit" : "h-0 m-0 overflow-hidden")}>
                <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto hic esse quae animi quas minima quis deserunt? Unde fuga sit deleniti error? Excepturi, veritatis.</p>
            </div>
        </div>
    );
}
