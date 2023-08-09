import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import CreditPDF from '../../assets/UVa Wise to UVa Traditional Curr..pdf';

function CreditAnalyzer() {
    return (
        <div>
            <Navbar />
            <Header header="Credit Analyzer" />

            <div className="pt-16 mx-auto w-1/2 text-black text-center">
                UVA&apos;s Transfer Credit Analyzer allows student to see if
                their courses transfer by providing the equivalent course code
                at UVA. To access the website, click{' '}
                <a
                    className="hover:underline text-blue-700"
                    href="http://ascs8.eservices.virginia.edu/asequivs"
                    target="_blank_"
                >
                    here
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
                <iframe
                    className="mx-auto py-16 relative"
                    title="Inline Frame Example"
                    width="800"
                    height="900"
                    loading="lazy"
                    src={CreditPDF}
                />
            </div>

            <Footer />
        </div>
    );
}

export default CreditAnalyzer;
