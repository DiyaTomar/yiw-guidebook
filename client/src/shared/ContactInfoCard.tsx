type Props = {
    name: string;
    position: string;
    number: string;
    email: string;
    office: string;
    image: string;
};

function ContactInfoCard({
    name,
    position,
    number,
    email,
    office,
    image,
}: Props) {
    return (
        <div className="bg-wise-light-blue h-48 w-96 flex border-2 ">
            <div className="w-2/5 flex justify-center items-center">
                <img
                    className="h-32 w-32 rounded-full border-2"
                    src={image}
                    alt="advisor img"
                />
            </div>
            <div className="w-3/5 flex items-center text-white">
                <div className="ml-6 ">
                    <div className="text-xl font-medium">{name}</div>
                    <div className="pb-2 text-sm">{position}</div>
                    <ul className="text-xs">
                        <li>{number}</li>
                        <li>{email}</li>
                        <li>{office}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoCard;
