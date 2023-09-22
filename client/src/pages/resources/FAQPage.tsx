import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
// eslint-disable-next-line import/no-named-as-default
import FAQAccordian from './sharedResources/FAQAccordian';
import AskQuestion from './sharedResources/AskQuestion';
import useMediaQuery from '../navbar/hooks/useMediaQuery';

function FAQPage() {
    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 810px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them

    return (
        <div>
            <Navbar />
            <Header header="FAQ" />
            <div className="text-center mt-16 text-4xl text-black font-semibold">
                {' '}
                Answers from your Advisor
            </div>

            <div className="w-1/2 mx-auto px-4 rounded-lg mt-16 mb-28 bg-wise-light-blue">
                <FAQAccordian />
            </div>
            <div className="mt-6">
                <div className="text-black text-center w-1/2 mx-auto mb-10 text-xl leading-[2rem]">
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
