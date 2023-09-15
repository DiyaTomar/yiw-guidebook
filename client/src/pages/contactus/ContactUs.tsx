import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
// eslint-disable-next-line import/no-named-as-default
import ContactUsForm from './sharedResources/ContactUsForm';

function ContactUs() {
    return (
        <div>
            <Navbar />
            <Header header="Contact Us" />
            <div className="text-md mt-10 w-1/3 mx-auto text-center">
                Please submit any questions that you may have and we will try to
                respond as soon as possible.
            </div>
            <ContactUsForm />
            <Footer />
        </div>
    );
}

export default ContactUs;
