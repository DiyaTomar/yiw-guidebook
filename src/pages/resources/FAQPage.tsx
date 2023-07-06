import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function FAQPage(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="FAQ" />
            <Footer />
        </div>
    );
}

export default FAQPage;
