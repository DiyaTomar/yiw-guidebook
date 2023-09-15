import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import { opportunity } from './sharedActivity/activityDesc';
import ActivityTemplate from './sharedActivity/ActivityTemplate';

function Opportunities() {
    return (
        <div>
            <Navbar />
            <Header header="Opportunities" />
            <ActivityTemplate array={opportunity} />
            <Footer />
        </div>
    );
}

export default Opportunities;
