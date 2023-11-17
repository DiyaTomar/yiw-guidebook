import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
    heading: string;
    subheadings: string[];
    activePath: string;
};

function Dropdown({ heading, subheadings, activePath }: Props) {
    return (
        <ul className="mt-2 ">
            {subheadings.map((subheading, index) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, staggerChildren: 1 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <li
                        key={`${index + Date.now()}`}
                        className={`bg-wise-light-blue text-white border-t-white border-t-2 p-4 hover:text-wise-red transition-all duration-300 ${
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
                </motion.div>
            ))}
        </ul>
    );
}

export default Dropdown;
