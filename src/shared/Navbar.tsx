// file containing code for the navbar
import Logo from '../assets/logo.png';
// importing dropdown div component
import Dropdown from './Dropdown';

type Props = {};

function Navbar(props: Props) {
    return (
        // div containing entire navbar (using flex for row view)
        <div className="flex h-24 bg-blue-900 text-white">
            {/* YIW + Logo (allocating 1/3 space for div, centered vertically) */}
            <div className="ml-12 flex gap-3 items-center basis-1/3 text-3xl">
                {/* inserting uva wise logo inside div */}
                <img className="w-10" src={Logo} alt="logo" />
                Year In Wise
            </div>
            {/* Menu options (centered vertically, positioned to right) */}
            <div className="flex items-center basis-2/3 justify-end">
                {/* List of headers (flex for row view, gap between list items with margin on right) */}
                <ul className="flex gap-16 mr-12">
                    {/* changing hover text color with a transition time of 300ms */}
                    <li className="hover:text-red-200 transition duration-300">
                        Academics
                        <Dropdown subheadings={['hi', 'yo']} />
                    </li>
                    <li className="hover:text-red-200 transition duration-300">
                        Activities
                    </li>
                    <li className="hover:text-red-200 transition duration-300">
                        College Life
                    </li>
                    <li className="hover:text-red-200 transition duration-300">
                        Resources
                    </li>
                    <li className="hover:text-red-200 transition duration-300">
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
    );
}

// exporting the navbar
export default Navbar;
