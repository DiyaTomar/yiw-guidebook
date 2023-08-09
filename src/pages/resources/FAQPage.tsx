import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
// eslint-disable-next-line import/no-named-as-default
import FAQAccordian from './sharedResources/FAQAccordian';
import AskQuestion from './sharedResources/AskQuestion';

function FAQPage() {
    return (
        <div>
            <Navbar />
            <Header header="FAQ" />
            <div className="text-center mt-16 text-4xl text-black">
                {' '}
                Answers from your Advisor
            </div>

            <div className="w-1/2 mx-auto px-4 rounded-lg my-20 bg-blue-200">
                <FAQAccordian />
            </div>
            <div className="mt-6">
                <div className="text-black w-1/2 mx-auto mb-10 text-3xl leading-[3rem]">
                    If you do not you see your question answered, then feel free
                    to ask a question below!
                </div>
                <AskQuestion />
            </div>
            <Footer />
        </div>
    );
}

export default FAQPage;
