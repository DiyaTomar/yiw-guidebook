// file containing code for the navbar
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
// importing dropdown div component
import Dropdown from './Dropdown';

type Props = {};

function Navbar(props: Props) {
    // setting initial state of the dropdown for each navbar menu item so it doesn't appear on screen
    const [isOpenAcademics, setIsOpenAcademics] = useState<boolean>(false);
    const [isOpenActivities, setIsOpenActivities] = useState<boolean>(false);
    const [isOpenCollegeLife, setIsOpenCollegeLife] = useState<boolean>(false);
    const [isOpenResources, setIsOpenResources] = useState<boolean>(false);

    // styling for different components
    const linkStyles = 'hover:text-red-200 transition duration 300 p-4'; // navbar menu items when hovered

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

                    <li
                        // handling appearance of dropdown (hover shows dropdown)
                        onMouseEnter={() => setIsOpenAcademics(true)}
                        onMouseLeave={() => setIsOpenAcademics(false)}
                    >
                        <div>
                            {/* directs user to first page in Academics section */}
                            <Link
                                className={linkStyles}
                                to="/academics/requirements"
                            >
                                Academics
                            </Link>

                            {/* if isOpenAcademics is true, dropdown appears */}
                            {isOpenAcademics && (
                                <div className="absolute">
                                    <Dropdown
                                        subheadings={[
                                            'Requirements',
                                            'Credit Analyzer',
                                        ]}
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
                                className={linkStyles}
                                to="/activities/organizations"
                            >
                                Activities
                            </Link>

                            {/* if isOpenActivities is true, dropdown appears */}
                            {isOpenActivities && (
                                <div className="absolute">
                                    <Dropdown
                                        subheadings={[
                                            'Organizations',
                                            'Events',
                                            'Opportunities',
                                        ]}
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
                                className={linkStyles}
                                to="/collegelife/places-to-visit"
                            >
                                College Life
                            </Link>

                            {/* if isOpenCollegeLife is true, dropdown appears */}
                            {isOpenCollegeLife && (
                                <div className="absolute">
                                    <Dropdown
                                        subheadings={[
                                            'Places To Visit',
                                            'Student Experiences',
                                        ]}
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
                            <Link className={linkStyles} to="/resources/faq">
                                Resources
                            </Link>

                            {/* if isOpenResources is true, dropdown appears */}
                            {isOpenResources && (
                                <div className="absolute">
                                    <Dropdown
                                        subheadings={['FAQ', 'Other Resources']}
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                    <li className="hover:text-red-200 transition duration-300">
                        {/* directs user to the Contact Us section on the FAQ page of Resources */}
                        <Link to="/resources/faq"> Contact Us </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// exporting the navbar
export default Navbar;
