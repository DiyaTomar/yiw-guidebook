import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
// eslint-disable-next-line import/no-named-as-default
import FAQAccordian from './sharedResources/FAQAccordian';

function FAQPage() {
    return (
        <div>
            <Navbar />
            <Header header="FAQ" />

            <div className="w-1/2 mx-auto px-4 rounded-lg my-20 bg-blue-200">
                <FAQAccordian />
            </div>

            <Footer />
        </div>
    );
}

export default FAQPage;
