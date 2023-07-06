import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function Organizations(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Organizations" />
            <Footer />
        </div>
    );
}

export default Organizations;
