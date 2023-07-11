type Props = {
    name: string;
    position: string;
    number: string;
    email: string;
    office: string;
};

function ContactInfoCard({ name, position, number, email, office }: Props) {
    return (
        <div className="bg-red-200 h-48 w-96 flex border-2 ">
            <div className="w-2/5 flex justify-center items-center">
                <img
                    className="h-32 w-32 rounded-full border-2"
                    src="https://i.imgflip.com/6yvpkj.jpg"
                    alt="hello"
                />
            </div>
            <div className="w-3/5 flex items-center">
                <div className="ml-6 ">
                    <div className="text-xl">{name}</div>
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
