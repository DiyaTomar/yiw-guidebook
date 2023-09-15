/* eslint-disable react/prop-types */
import { SetStateAction, useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';
import questions from './QA';

type Props = {
    id: number;
    open: number;
};

function Icon({ id, open }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
                id === open ? 'rotate-180' : ''
            } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

export default function FAQAccordian() {
    const [open, setOpen] = useState(0);
    const headerStyles =
        'text-white text-xl mb-4 hover:text-wise-red transition duration-300';
    const bodyStyles = 'text-white text-md font-thin';
    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div>
            {questions.map((question) => (
                <Accordion
                    key={question.id}
                    open={open === question.id}
                    icon={<Icon id={question.id} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(question.id)}
                        className={headerStyles}
                    >
                        {question.question}
                    </AccordionHeader>
                    <AccordionBody className={bodyStyles}>
                        {question.answer}
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
}
