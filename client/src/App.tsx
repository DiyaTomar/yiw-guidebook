import { Link } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar'; // importing Navbar component
import Footer from './shared/Footer'; // importing Footer component
import HomeCarousel from './shared/HomeCarousel';
import TestimonialHomeCard from './shared/TestimonialHomeCard';
import testimonials from './shared/homeTestimonialInfo';
import useMediaQuery from './pages/navbar/hooks/useMediaQuery';

function App() {
    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 810px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them
    return (
        <div>
            <Navbar />
            {/* contains title text and carousel */}

            <div className="relative pb-24 bg-home-bg bg-cover bg-no-repeat h-[41rem] z-[-1] ">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
                {isAboveMediumScreens && (
                    <div className="relative pt-56 w-[40rem] ml-32 mx-auto text-white ">
                        <div className="relative text-white bg-wise-light-blue p-4 rounded-2xl ">
                            <div className="absolute top-1 left-1 bg-wise-blue h-full w-full z-[-2] rounded-2xl" />
                            <div className="absolute top-2 left-2 bg-wise-red h-full w-full z-[-3] rounded-2xl" />
                            <div className="absolute top-3 left-3 bg-white h-full w-full z-[-4] rounded-2xl" />
                            <div className="text-8xl font-bold">
                                Year in Wise
                            </div>
                            <div className="mt-12 text-2xl font-normal">
                                This is Where it all Begins
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {!isAboveMediumScreens && (
                <div className="h-40 bg-wise-blue text-white text-center text-4xl pt-4 border-wise-red border-4 border-y-transparent">
                    Year in Wise
                    <div className="mt-4 text-2xl">
                        This is where it all begins
                    </div>
                </div>
            )}

            {/* div containing about section */}
            <div className="md:flex text-wise-blue">
                <div className="basis-2/5 mx-24 text-center md:text-left">
                    <div className="pt-24 text-2xl font-medium">
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
                        and invite you to learn more about UVA Wise.
                    </div>
                </div>

                <div className="px-24 py-12 md:py-24 mb-14 mx-auto basis-3/5">
                    <HomeCarousel />
                </div>
            </div>
            <div className="pt-16 text-4xl text-center bg-gray-50 text-wise-blue">
                <div> Testimonials </div>
                <div className="flex flex-wrap justify-evenly mt-4">
                    {testimonials.map((testimonial) => (
                        <TestimonialHomeCard
                            key={testimonial.id}
                            name={testimonial.name}
                            major={testimonial.major}
                            paragraph={testimonial.paragraph}
                        />
                    ))}
                </div>
                <div className="text-xl py-12 text-wise-blue">
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
