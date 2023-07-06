import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';

type Props = {};

function CreditAnalyzer(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Credit Analyzer" />
            <Footer />
        </div>
    );
}

export default CreditAnalyzer;
