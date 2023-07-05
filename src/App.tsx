import Navbar from './shared/Navbar'; // importing Navbar component
import Footer from './shared/Footer'; // importing Footer component
import HomeCarousel from './shared/HomeCarousel';

function App() {
    return (
        <div>
            <Navbar />
            <div className="md:grid grid-cols-2 bg-blue-100 pb-36">
                <div className="pt-64 w-2/3 mx-auto">
                    <div className="text-8xl">Year in Wise Guidebook</div>
                    <div className="mt-12 text-3xl">
                        This is the tagline for the Home screen
                    </div>
                </div>
                <div className="my-36 h-3/4 mx-auto w-2/3">
                    <HomeCarousel />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
