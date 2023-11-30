import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';

type Props = {
    heading: string;
    subheadings: string[];
    activePath: string;
};

function Dropdown({ heading, subheadings, activePath }: Props) {
    return (
        <ul className="mt-2 ">
            {subheadings.map((subheading, index) => (
                <div>
                    <li
                        key={`${index + Date.now()}`}
                        className={`bg-wise-light-blue text-white  border-t-2 p-4 hover:text-wise-red transition-all duration-300 ${
                            activePath ===
                            `/${kebabCase(heading)}/${kebabCase(subheading)}`
                                ? 'text-wise-red'
                                : 'text-white'
                        }`}
                    >
                        <Link
                            to={`/${kebabCase(heading)}/${kebabCase(
                                subheading
                            )}`}
                        >
                            {subheading}
                        </Link>
                    </li>
                </div>
            ))}
        </ul>
    );
}

export default Dropdown;
