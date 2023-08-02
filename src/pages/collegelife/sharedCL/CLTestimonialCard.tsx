type Props = {
    id: number;
    name: string;
    major: string;
    description: string;
};

function CLTestimonialCard({ id, name, major, description }: Props) {
    const isOdd = id % 2 === 1;

    return (
        <div
            className={`relative m-8 border-4 border-black h-96 w-96 rounded-md ${
                isOdd ? 'bg-red-50' : 'bg-blue-50'
            }`}
        >
            <div className="w-2/3 mx-auto py-10">
                <h1 className="text-black font-bold text-xl">{name}</h1>
                <h3 className="text-black text-lg">{major}</h3>
                <p className="text-black text-sm pt-4">{description}</p>
            </div>

            {/* Bottom Left Triangle */}
            <div className="absolute bottom-0 left-0 border-b-solid border-b-[70px] border-r-[70px] border-r-transparent border-red-800" />
            {/* Top Right Triangle */}
            <div className="absolute top-0 right-0 border-t-solid border-t-[70px] border-l-[70px] border-l-transparent border-blue-900" />
        </div>
    );
}

export default CLTestimonialCard;
