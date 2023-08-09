// file containing code for the navbar
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { kebabCase } from 'lodash';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/solid'; /* imports the Bars3Icon and xMarkIcon from @heroicons module, utilizing the entire path */
import Logo from '../../assets/WiseLogo.svg';
// importing dropdown div component
import Dropdown from '../../shared/Dropdown';
import useMediaQuery from './hooks/useMediaQuery';
/* @heroicons.react provides free open-source svg icons and the 24 specifies a pixel size and the solid represents the style [Follow node modules path to see absolute path] */

function Navbar() {
    // setting initial state of the dropdown for each navbar menu item so it doesn't appear on screen
    const [isOpenAcademics, setIsOpenAcademics] = useState<boolean>(false);
    const [isOpenActivities, setIsOpenActivities] = useState<boolean>(false);
    const [isOpenCollegeLife, setIsOpenCollegeLife] = useState<boolean>(false);
    const [isOpenResources, setIsOpenResources] = useState<boolean>(false);

    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 1345px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them

    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);

    // storing current location path
    const location = useLocation();

    // const normalCarat =
    //     'h-0 w-0 mt-3 ml-3 border-solid border-transparent border-[7px] border-t-white transform';

    // const rotatedCarat = `${normalCarat} rotated-180`;

    // function that takes in heading
    const isHeadingActive = (heading: string) => {
        const convHeading = kebabCase(heading); // converts heading text to lowercase & adds hyphens in spaces
        const parts = location.pathname.split('/'); // splits the pathname tring wherever a / is detected
        const activeHeading = parts[1]; // accesses the heading portion of the address
        return convHeading === activeHeading; // returns true or false depending on if on that specific heading page
    };

    // styling for different components
    const linkStyles = 'hover:text-red-dark transition duration-300 p-4'; // navbar menu items when hovered

    return (
        // div containing entire navbar (using flex for row view)
        <nav className="flex h-24 bg-gray-100 text-blue-dark border-t-red-dark border-t-[5px]">
            {/* YIW + Logo (allocating 1/3 space for div, centered vertically) */}

            {/* inserting uva wise logo inside div */}
            <Link
                className="ml-12 flex items-center gap-3 basis-1/3 text-3xl font-semibold"
                to="/"
            >
                <img className="w-[16rem]" src={Logo} alt="logo" />
            </Link>

            {/* Menu options (centered vertically, positioned to right) */}
            {isAboveMediumScreens ? (
                <div className="flex items-center basis-2/3 justify-end font-semibold mr-10">
                    <div>
                        {/* List of headers (flex for row view, gap between list items with margin on right) */}
                        <ul className="flex gap-16 mr-12">
                            {/* changing hover text color with a transition time of 300ms */}

                            <li
                                // handling appearance of dropdown (hover shows dropdown)
                                onMouseEnter={() => setIsOpenAcademics(true)}
                                onMouseLeave={() => setIsOpenAcademics(false)}
                            >
                                <div>
                                    {/* directs user to first page in Academics section */}
                                    <Link
                                        // applying link hover styling & applying similar styling to heading if on one of the section's subpages
                                        className={`${linkStyles} ${
                                            isHeadingActive('Academics')
                                                ? 'text-red-dark'
                                                : ''
                                        } `}
                                        to="/academics/requirements"
                                    >
                                        Academics
                                    </Link>

                                    {/* if isOpenAcademics is true, dropdown appears */}
                                    {isOpenAcademics && (
                                        <div className="absolute">
                                            <Dropdown
                                                heading="Academics"
                                                subheadings={[
                                                    'Requirements',
                                                    'Credit Analyzer',
                                                ]}
                                                activePath={location.pathname} // passing the path to the webpage to Dropdown.tsx
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>

                            <li
                                // handling appearance of dropdown (hover shows dropdown)
                                onMouseEnter={() => setIsOpenActivities(true)}
                                onMouseLeave={() => setIsOpenActivities(false)}
                            >
                                <div>
                                    {/* directs user to first page in Activities section */}
                                    <Link
                                        // applying link hover styling & applying similar styling to heading if on one of the section's subpages
                                        className={`${linkStyles} ${
                                            isHeadingActive('Activities')
                                                ? 'text-red-dark'
                                                : ''
                                        } `}
                                        to="/activities/organizations"
                                    >
                                        Activities
                                    </Link>

                                    {/* if isOpenActivities is true, dropdown appears */}
                                    {isOpenActivities && (
                                        <div className="absolute">
                                            <Dropdown
                                                heading="Activities"
                                                subheadings={[
                                                    'Organizations',
                                                    'Events',
                                                    'Opportunities',
                                                ]}
                                                activePath={location.pathname} // passing the path to the webpage to Dropdown.tsx
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li
                                // handling appearance of dropdown (hover shows dropdown)
                                onMouseEnter={() => setIsOpenCollegeLife(true)}
                                onMouseLeave={() => setIsOpenCollegeLife(false)}
                            >
                                <div>
                                    {/* directs user to first page in College Life section */}
                                    <Link
                                        // applying link hover styling & applying similar styling to heading if on one of the section's subpages
                                        className={`${linkStyles} ${
                                            isHeadingActive('College Life')
                                                ? 'text-red-dark'
                                                : ''
                                        } `}
                                        to="/college-life/places-to-visit"
                                    >
                                        College Life
                                    </Link>

                                    {/* if isOpenCollegeLife is true, dropdown appears */}
                                    {isOpenCollegeLife && (
                                        <div className="absolute">
                                            <Dropdown
                                                heading="College Life"
                                                subheadings={[
                                                    'Places To Visit',
                                                    'Student Experiences',
                                                ]}
                                                activePath={location.pathname} // passing the path to the webpage to Dropdown.tsx
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li
                                // handling appearance of dropdown (hover shows dropdown)
                                onMouseEnter={() => setIsOpenResources(true)}
                                onMouseLeave={() => setIsOpenResources(false)}
                            >
                                <div>
                                    {/* directs user to first page in College Life section */}
                                    <Link
                                        // applying link hover styling & applying similar styling to heading if on one of the section's subpages
                                        className={`${linkStyles} ${
                                            isHeadingActive('Resources')
                                                ? 'text-red-dark'
                                                : ''
                                        } `}
                                        to="/resources/faq"
                                    >
                                        Resources
                                    </Link>

                                    {/* if isOpenResources is true, dropdown appears */}
                                    {isOpenResources && (
                                        <div className="absolute">
                                            <Dropdown
                                                heading="Resources"
                                                subheadings={[
                                                    'FAQ',
                                                    'Other Resources',
                                                ]}
                                                activePath={location.pathname} // passing the path to the webpage to Dropdown.tsx
                                            />
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* directs user to the Contact Us section on the FAQ page of Resources */}
                    <Link
                        className="p-3 rounded-md bg-blue-dark text-white hover:bg-blue-800"
                        to="/contact-us"
                    >
                        Contact Us
                    </Link>
                </div>
            ) : (
                !isMenuToggled && (
                    // if min-width is less than 1060 then utilize this below (primarily for mobile devices)
                    <button
                        className="absolute top-5 right-6 rounded-full bg-secondary-500 p-2" // Rounded full makes it fully circular. padding of 2 all around
                        onClick={() => setMenuToggled(!isMenuToggled)} // When we click the icon, the menu will close or open depending on its previous state
                        type="button"
                    >
                        <Bars3Icon className="h-12 w-12 text-blue-dark">
                            {' '}
                        </Bars3Icon>
                        {/* For an icon, you call it like this */}
                    </button>
                )
            )}

            {/* Mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="absolute bottom-0 right-0 z-40 h-full w-[300px] bg-blue-dark drop-shadow-xl">
                    {/* Exact Pixels in tailwind must be surrounded by [] */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={() => setMenuToggled(!isMenuToggled)}
                            type="button"
                        >
                            <XMarkIcon className="h-12 w-12 text-white" />{' '}
                            {/* XMarkIcon printed with button functionality */}
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="ml-[15%] flex flex-col gap-8 text-xl text-white">
                        {/* Div for innerleft side of the right side of the div that will hold the links */}
                        {/* text will appear smaller than default font sizes and gap of 8 seperates each child element */}
                        <div>
                            <div className="flex">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsOpenAcademics(!isOpenAcademics)
                                    }
                                    className={`${
                                        isHeadingActive('Academics')
                                            ? ' text-red-dark'
                                            : ''
                                    } `}
                                >
                                    Academics
                                </button>
                                {/* {!isOpenAcademics ? (
                                    <div className={`${normalCarat}`} />
                                ) : (
                                    <div className={`${rotatedCarat}`} />
                                )} */}
                            </div>

                            {isOpenAcademics && (
                                <div className="">
                                    <Dropdown
                                        heading="Academics"
                                        subheadings={[
                                            'Requirements',
                                            'Credit Analyzer',
                                        ]}
                                        activePath={location.pathname} // passing the path to the webpage to Dropdown.tsx
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            <Link
                                className={`${
                                    isHeadingActive('Activities')
                                        ? 'text-red-dark'
                                        : ''
                                } `}
                                to="/activities/organizations"
                            >
                                Activities
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={`${
                                    isHeadingActive('College Life')
                                        ? 'text-red-dark'
                                        : ''
                                } `}
                                to="/college-life/places-to-visit"
                            >
                                College Life
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={`${
                                    isHeadingActive('Resources')
                                        ? 'text-red-dark'
                                        : ''
                                } `}
                                to="/resources/faq"
                            >
                                Resources
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={`${
                                    isHeadingActive('Contact Us')
                                        ? 'text-red-dark'
                                        : ''
                                } `}
                                to="/contact-us"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

// exporting the navbar
export default Navbar;
