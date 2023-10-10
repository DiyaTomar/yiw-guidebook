import { TestimonialType } from './CLTestimonialInfo';

type Props = {
    id: number;
    name: string;
    major: string;
    year: string;
    description: string;
    onTestimonialClick: (testimonial: TestimonialType) => void;
};

function CLTestimonialCard({
    id,
    name,
    major,
    year,
    description,
    onTestimonialClick,
}: Props) {
    const isOdd = id % 2 === 1;
    const shortenedDescription = `${description.substring(0, 275)}...`;

    function onClickHandler() {
        onTestimonialClick({ id, name, major, year, description });
    }

    return (
        <div
            className={`relative m-8 border-4 border-black h-96 w-96 rounded-md ${
                isOdd ? 'bg-red-50' : 'bg-blue-50'
            }`}
        >
            <div className="w-2/3 mx-auto py-10">
                <h1 className="text-black font-bold text-xl">{name}</h1>
                <h3 className="text-black text-lg">
                    {major} | {year}
                </h3>
                <p className="text-black text-sm text-justify pt-4">
                    {shortenedDescription}
                </p>
            </div>

            {/* Bottom Left Triangle */}
            <div className="absolute bottom-0 left-0 border-b-solid border-b-[70px] border-r-[70px] border-r-transparent border-wise-red" />
            {/* Top Right Triangle */}
            <div className="absolute top-0 right-0 border-t-solid border-t-[70px] border-l-[70px] border-l-transparent border-wise-light-blue" />
            <div
                className={`absolute bottom-3 right-5 text-md mr-3 mb-2 font-bold z-10 text-gray-500 transition duration-300 ${
                    isOdd ? 'hover:text-wise-red' : 'hover:text-wise-light-blue'
                }`}
            >
                <button onClick={onClickHandler} type="button">
                    READ MORE
                </button>
            </div>
        </div>
    );
}

export default CLTestimonialCard;
