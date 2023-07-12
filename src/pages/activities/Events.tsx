import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import { experience } from './sharedActivity/activityDesc';
import ActivityTemplate from './sharedActivity/ActivityTemplate';

function Events() {
    return (
        <div>
            <Navbar />
            <Header header="Events" />
            <ActivityTemplate array={experience} />
            <Footer />
        </div>
    );
}

export default Events;
