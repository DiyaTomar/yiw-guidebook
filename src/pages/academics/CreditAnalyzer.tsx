import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function CreditAnalyzer(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Credit Analyzer" />

            <div className="pt-16 mx-auto w-1/2 text-black text-center">
                UVA&apos;s Transfer Credit Analyzer allows student to see if
                their courses transfer by providing the equivalent course code
                at UVA.
                <br />
                <div className="pt-4">
                    Select the course subject to refine your search results.
                </div>
            </div>

            <div>
                <iframe
                    className="mx-auto py-24 relative"
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="800"
                    height="900"
                    loading="lazy"
                    src="http://ascs8.eservices.virginia.edu/AsEquivs/Home/EquivsShow?schoolId=1000170"
                />
            </div>

            <Footer />
        </div>
    );
}

export default CreditAnalyzer;
