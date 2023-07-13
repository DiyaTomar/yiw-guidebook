import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import LocationDropdown from './sharedCL/locationDropdown';

function PlacesToVisit() {
    return (
        <div>
            <Navbar />
            <Header header="Places To Visit" />
            <div className="md:flex">
                <div className="pt-16 pb-64 pl-48">
                    <LocationDropdown />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PlacesToVisit;
