// file containing code for the navbar
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { kebabCase } from 'lodash';
import Logo from '../assets/logo.png';
// importing dropdown div component
import Dropdown from './Dropdown';

function Navbar() {
    // setting initial state of the dropdown for each navbar menu item so it doesn't appear on screen
    const [isOpenAcademics, setIsOpenAcademics] = useState<boolean>(false);
    const [isOpenActivities, setIsOpenActivities] = useState<boolean>(false);
    const [isOpenCollegeLife, setIsOpenCollegeLife] = useState<boolean>(false);
    const [isOpenResources, setIsOpenResources] = useState<boolean>(false);

    // storing current location path
    const location = useLocation();

    // function that takes in heading
    const isHeadingActive = (heading: string) => {
        const convHeading = kebabCase(heading); // converts heading text to lowercase & adds hyphens in spaces
        const parts = location.pathname.split('/'); // splits the pathname tring wherever a / is detected
        const activeHeading = parts[1]; // accesses the heading portion of the address
        return convHeading === activeHeading; // returns true or false depending on if on that specific heading page
    };

    // styling for different components
    const linkStyles = 'hover:text-red-200 transition duration-300 p-4'; // navbar menu items when hovered

    return (
        // div containing entire navbar (using flex for row view)
        <div className="flex h-24 bg-blue-900 text-white">
            {/* YIW + Logo (allocating 1/3 space for div, centered vertically) */}

            {/* inserting uva wise logo inside div */}
            <Link
                className="ml-12 flex items-center gap-3 basis-1/3 text-3xl font-semibold"
                to="/"
            >
                <img className="w-10" src={Logo} alt="logo" />
                Year in Wise
            </Link>

            {/* Menu options (centered vertically, positioned to right) */}
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
                                            ? 'text-red-300'
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
                                            ? 'text-red-300'
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
                                            ? 'text-red-300'
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
                                            ? 'text-red-300'
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
                    className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-400 text-white hover:bg-blue-600"
                    to="/contact-us"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}

// exporting the navbar
export default Navbar;
