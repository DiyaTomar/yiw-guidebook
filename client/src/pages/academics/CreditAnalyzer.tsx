import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import CreditPDF from '../../assets/UVa Wise to UVa Traditional Curr..pdf';
import useMediaQuery from '../navbar/hooks/useMediaQuery';

function CreditAnalyzer() {
    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 818px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them
    return (
        <div>
            <Navbar />
            <Header header="Credit Analyzer" />

            <div className="pt-16 mx-auto w-1/2 text-black text-center">
                UVA&apos;s Transfer Credit Analyzer allows student to see if
                their courses transfer by providing the equivalent course code
                at UVA.{' '}
                <a
                    className="hover:underline text-blue-700"
                    href="http://ascs8.eservices.virginia.edu/asequivs"
                    target="_blank_"
                >
                    Click here to access the website.
                </a>
                <br />
                <div className="pt-12">
                    To view what courses satisfy the traditional curriculum,
                    check out this compiled PDF by your advisor Professor
                    McKnight! Always make sure to check in with them to get the
                    latest updates.
                </div>
            </div>

            <div>
                {isAboveMediumScreens && (
                    <iframe
                        className="mx-auto my-16 relative border-2 border-gray-800"
                        title="Inline Frame Example"
                        width={800}
                        height={900}
                        loading="lazy"
                        src={CreditPDF}
                    />
                )}
                {!isAboveMediumScreens && (
                    <iframe
                        className="mx-auto my-16 relativ border-2 border-gray-800"
                        title="Inline Frame Example"
                        loading="lazy"
                        width={400}
                        height={550}
                        src={CreditPDF}
                    />
                )}
            </div>

            <Footer />
        </div>
    );
}

export default CreditAnalyzer;
