import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
// eslint-disable-next-line import/no-named-as-default
import FAQAccordian from './sharedResources/FAQAccordian';
import AskQuestion from './sharedResources/AskQuestion';
import { TContact } from './sharedResources/ TContact';

function FAQPage() {
    const [contactHistory, setContactHistory] = useState<TContact[]>([]);
    useEffect(() => {
        // Only happens on first render [empty Dependencies array]
        async function fetchContact() {
            const res = await fetch(`http://localhost:3000/contact`);
            const info = await res.json();
            console.log(info);
            // setContactHistory(info);
        }
        fetchContact();
    }, []);
    return (
        <div>
            <Navbar />
            <Header header="FAQ" />
            <div className="text-center mt-16 text-4xl text-black">
                {' '}
                Answers from your Advisor
            </div>

            <div className="w-1/2 mx-auto px-4 rounded-lg my-20 bg-wise-light-blue">
                <FAQAccordian />
            </div>
            <div className="mt-6">
                <div className="text-black text-center md:text-left w-1/2 mx-auto mb-10 text-3xl leading-[3rem]">
                    If you do not you see your question answered, then feel free
                    to ask a question below!
                </div>
                <AskQuestion />
            </div>

            {/* {contactHistory.map((entry) => (
                <div key={entry.id}> {entry.name} </div>
            ))} */}

            <Footer />
        </div>
    );
}

export default FAQPage;
