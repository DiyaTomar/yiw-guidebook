import Navbar from './shared/Navbar'; // importing Navbar component
import Footer from './shared/Footer'; // importing Footer component
import HomeCarousel from './shared/HomeCarousel';

function App() {
    return (
        <div>
            <Navbar />
            {/* contains title text and carousel */}
            <div className="md:grid grid-cols-2 bg-blue-100 pb-36">
                <div className="pt-64 w-2/3 mx-auto">
                    <div className="text-7xl">Year in Wise Guidebook</div>
                    <div className="mt-12 text-2xl">
                        This is the tagline for the Home screen
                    </div>
                </div>
                <div className="my-36 h-3/4 mx-auto w-2/3">
                    <HomeCarousel />
                </div>
            </div>

            {/* div containing about section */}
            <div className="bg-blue-200">
                <div className="pt-24 text-4xl text-center">
                    What is the Year in Wise program?
                </div>
                <div className="text-center py-24 w-1/2 mx-auto text-2xl leading-[2]">
                    Welcome to the University of Virginia’s College at Wise, a
                    public, four-year residential liberal arts college located
                    in the lush mountains of Southwest Virginia. UVA Wise is
                    nationally-accredited and has been ranked among the top
                    public liberal art colleges in the U.S. The only division of
                    the University of Virginia located outside of
                    Charlottesville, we were founded in 1954 to provide a
                    high-quality education to the people of Southwest Virginia.
                    Since that time, we have become recognized nationally as an
                    excellent institution for academics, student engagement, and
                    student outcomes. If you are a Virginian placed on the wait
                    list for the College of Arts and Sciences at UVA, you can
                    attend UVA Wise for one year—completing 30 hours of
                    transferrable credit and maintaining a 3.0 GPA—and then
                    transfer to UVA Grounds in Charlottesville to complete your
                    degree. (No additional application to UVA’s College at Wise
                    is required.) We hope you will consider this opportunity,
                    and invite you to learn more about UVA Wise. As we like to
                    say, This is Where it all Begins.
                </div>
            </div>
            <div className="py-24 text-4xl text-center">
                <div> Testimonials </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
