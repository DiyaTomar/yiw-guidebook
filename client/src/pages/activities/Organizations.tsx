import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import { organization } from './sharedActivity/activityDesc';
import ActivityTemplate from './sharedActivity/ActivityTemplate';

function Organizations() {
    return (
        <div>
            <Navbar />
            <Header header="Organizations" />
            <ActivityTemplate array={organization} />
            <Footer />
        </div>
    );
}

export default Organizations;
