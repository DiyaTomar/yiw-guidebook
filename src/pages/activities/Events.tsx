import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function Events(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Events" />
            <Footer />
        </div>
    );
}

export default Events;
