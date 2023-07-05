import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';

type Props = {
    heading: string;
    subheadings: string[];
    activePath: string;
};

function Dropdown({ heading, subheadings, activePath }: Props) {
    return (
        <ul className="mt-2 bg-black p-4">
            {subheadings.map((subheading, index) => (
                <li
                    key={`${index + Date.now()}`}
                    className={`py-1 hover:text-red-200 transition-all duration-300 ${
                        activePath ===
                        `/${kebabCase(heading)}/${kebabCase(subheading)}`
                            ? 'text-red-200'
                            : ''
                    }`}
                >
                    <Link
                        to={`/${kebabCase(heading)}/${kebabCase(subheading)}`}
                    >
                        {subheading}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;
