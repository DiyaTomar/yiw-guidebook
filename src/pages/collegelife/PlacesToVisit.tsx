import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function PlacesToVisit(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Places To Visit" />
            <Footer />
        </div>
    );
}

export default PlacesToVisit;
