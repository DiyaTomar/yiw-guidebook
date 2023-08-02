import { BsFilter } from 'react-icons/bs';
import { useState } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import CLTestimonialCard from './sharedCL/CLTestimonialCard';
import { clTestimonials } from './sharedCL/CLTestimonialInfo';

function StudentExperiences() {
    // useState to control whether the filter page is opened
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

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

                <button
                    type="button"
                    className="absolute top-24 right-[5rem] cursor-pointer flex items-center text-black"
                    onClick={handleToggleFilters}
                >
                    <span className="mr-2">Filter by Major</span>
                    <BsFilter />
                </button>
            </div>

            <div className="flex justify-center flex-wrap">
                {clTestimonials.map((testimonial) => (
                    <CLTestimonialCard
                        key={testimonial.id}
                        id={testimonial.id}
                        name={testimonial.name}
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
