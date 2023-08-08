import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar'; // importing Navbar component
import Footer from './shared/Footer'; // importing Footer component
import HomeCarousel from './shared/HomeCarousel';
import TestimonialHomeCard from './shared/TestimonialHomeCard';
import testimonials from './shared/homeTestimonialInfo';

function App() {
    return (
        <div>
            <Navbar />
            {/* contains title text and carousel */}

            <div className="md:grid grid-cols-2 relative pb-24 bg-home-bg bg-cover bg-no-repeat h-[41rem] z-[-1]">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                <div className="relative pt-52 w-2/3 ml-32 mx-auto text-white">
                    <div className="text-7xl font-bold">
                        Year in Wise Guidebook
                    </div>
                    <div className="mt-12 text-2xl font-light">
                        This is the tagline for the Home screen
                    </div>
                </div>
            </div>

            {/* <div className="relative pb-24 bg-home-bg bg-cover bg-no-repeat z-10 h-[41rem]">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                <div className="relative pt-52 ml-32 mx-auto text-white">
                    <div className="text-7xl font-bold">
                        Year in Wise Guidebook
                    </div>
                    <div className="mt-12 text-2xl">
                        This is the tagline for the Home screen
                    </div>
                </div>
            </div> */}

            {/* <div className="pb-24 bg-home-bg bg-cover bg-no-repeat z-10 brightness-50 h-[41rem]">
                <div className=" pt-52 ml-32 mx-auto brightness-200 text-white">
                    <div className="text-7xl font-bold">
                        Year in Wise Guidebook
                    </div>
                    <div className="mt-12 text-2xl">
                        This is the tagline for the Home screen
                    </div>
                </div>
            </div> */}

            {/* div containing about section */}
            <div className="md:flex bg-gray-200 text-dark-blue">
                <div className="basis-2/5 mx-24">
                    <div className="pt-36 text-2xl font-medium">
                        What is the Year in Wise program?
                    </div>
                    <div className="py-8 text-lg leading-[2] font-light">
                        If you are a Virginian placed on the wait list for the
                        College of Arts and Sciences at UVA, you can attend UVA
                        Wise for one year—completing 30 hours of transferrable
                        credit and maintaining a 3.0 GPA—and then transfer to
                        UVA Grounds in Charlottesville to complete your degree.
                        (No additional application to UVA’s College at Wise is
                        required.) We hope you will consider this opportunity,
                        and invite you to learn more about UVA Wise. As we like
                        to say, This is Where it all Begins.
                    </div>
                </div>

                <div className="my-28 p-8 mx-auto basis-3/5">
                    <HomeCarousel />
                </div>
            </div>
            <div className="mt-16 text-4xl text-center">
                <div> Testimonials </div>
                <div className="flex justify-evenly mt-4">
                    {testimonials.map((testimonial) => (
                        <TestimonialHomeCard
                            key={testimonial.id}
                            name={testimonial.name}
                            major={testimonial.major}
                            paragraph={testimonial.paragraph}
                        />
                    ))}
                </div>
                <div className="text-xl my-12 text-black">
                    Check out other testimonials on our{' '}
                    <Link
                        to="/college-life/student-experiences"
                        className="text-blue-500 hover:underline"
                    >
                        student experiences
                    </Link>{' '}
                    page!
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
