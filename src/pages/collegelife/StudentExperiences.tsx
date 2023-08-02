import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import CLTestimonialCard from './sharedCL/CLTestimonialCard';
import clTestimonials from './sharedCL/CLTestimonialInfo';

function StudentExperiences() {
    return (
        <div>
            <Navbar />
            <Header header="Student Experiences" />
            <div className="font-bold text-4xl text-center pt-[5.5rem] text-black">
                Testimonials
            </div>
            <p className="font-normal text-lg text-center pt-5 pb-5 text-black">
                Read past student experiences below!
            </p>
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
