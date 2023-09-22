import { BsFilter } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import CLTestimonialCard from './sharedCL/CLTestimonialCard';
import { TestimonialType, clTestimonials } from './sharedCL/CLTestimonialInfo';
import { FilterOption } from './sharedCL/types';

function StudentExperiences() {
    //  Array of FilterOption that holds objects with a label and value
    const filterOptions: FilterOption[] = [
        { label: 'All Testimonials', value: 'allTestimonials' },
        { label: 'Psychology', value: 'Psychology' },
        { label: 'Undecided', value: 'Undecided' },
    ];
    // useState to control whether the filter page is opened
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    // useState to hold all of the testimonials associated with the filter
    const [filteredTestimonials, setFilteredTestimonials] =
        useState<TestimonialType[]>(clTestimonials);
    // useState to hold all of the selected filters
    const [selectedFilters, setSelectedFilters] = useState<string[]>([
        'allTestimonials',
    ]);

    const toggleFilter = (filter: string) => {
        // if the filter we select is allTestimonials, it deselects the rest of the testimonials. If the filter we deselect is allTestimonails,
        // then no filters will be selected
        if (filter === 'allTestimonials') {
            setSelectedFilters((prevFilters) =>
                prevFilters.includes('allTestimonials')
                    ? []
                    : ['allTestimonials']
            );
        } else {
            setSelectedFilters((prevFilters) => {
                if (prevFilters.includes('allTestimonials')) {
                    // if allTestimonials is selected, then we can just set the selectedFilter to the newly selected filter, removing allTestimonials
                    const newFilters = [filter];
                    return newFilters;
                }
                // Toggle the individual filter
                if (prevFilters.includes(filter)) {
                    return prevFilters.filter((item) => item !== filter);
                }
                return [...prevFilters, filter];
            });
        }
    };

    const applyFilters = () => {
        if (selectedFilters.includes('allTestimonials')) {
            setFilteredTestimonials(clTestimonials);
        } else {
            setFilteredTestimonials(
                clTestimonials.filter((testimonial) =>
                    selectedFilters.includes(testimonial.major)
                )
            );
        }

        setIsFilterOpen(!isFilterOpen);
    };

    // method to open filter and close filter
    const handleToggleFilters = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <div>
            <Navbar />
            <Header header="Student Experiences" />
            <div className="relative flex justify-center">
                <div>
                    <div className="font-bold text-4xl text-center pt-[5.5rem] text-black">
                        Testimonials
                    </div>
                    <p className="font-normal text-lg text-center pt-5 pb-5 text-black">
                        Read past student experiences below!
                    </p>
                </div>

                <div className="absolute top-24 right-[5rem] w-56 ">
                    <button
                        type="button"
                        className="cursor-pointer flex items-center text-black"
                        onClick={handleToggleFilters}
                    >
                        <span className="mr-2">Filter by Major</span>
                        <BsFilter />
                    </button>

                    {isFilterOpen && (
                        <motion.div
                            className="z-[1]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: -25 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <div className="bg-gray-400 p-2 rounded-t-lg">
                                {filterOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        className="flex items-center space-x-4 gap-2"
                                        htmlFor={`filter_${option.value}`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={`filter_${option.value}`}
                                            className="peer relative h-8 mb-4 w-8 shrink-0 appearance-none rounded-sm border border-gray-800 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] checked:after:bg-[length:40px] checked:after:bg-center checked:after:bg-no-repeat checked:after:content-[''] checked:bg-union-blue hover:ring hover:ring-gray-300 focus:outline-none"
                                            checked={selectedFilters.includes(
                                                option.value
                                            )}
                                            onChange={() =>
                                                toggleFilter(option.value)
                                            }
                                        />
                                        <label
                                            htmlFor={`filter_${option.value}`}
                                            className="w-full cursor-pointer font-medium text-black"
                                        >
                                            {option.label}
                                        </label>
                                    </label>
                                ))}
                            </div>
                            <div className="bg-wise-light-blue rounded-b-2xl">
                                <button
                                    type="button"
                                    className="ml-10 my-4 w-32 border-black border-2 p-3 rounded-md bg-white hover:bg-gray-300 transition-all duration-500"
                                    disabled={selectedFilters.length === 0}
                                    onClick={applyFilters}
                                >
                                    Apply Filters
                                </button>
                                {selectedFilters.length === 0 && (
                                    <div className=" text-red-500">
                                        Please select an option
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="flex justify-center flex-wrap">
                {filteredTestimonials.map((testimonial) => (
                    <CLTestimonialCard
                        key={testimonial.id}
                        id={testimonial.id}
                        name={testimonial.name}
                        year={testimonial.year}
                        major={testimonial.major}
                        description={testimonial.description}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default StudentExperiences;
