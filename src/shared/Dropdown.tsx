type Props = {
    subheadings: string[];
};

function Dropdown({ subheadings }: Props) {
    return (
        <ul className="mt-2 bg-black p-4">
            {subheadings.map((subheading) => (
                <li className="py-1">{subheading}</li>
            ))}
        </ul>
    );
}

export default Dropdown;
