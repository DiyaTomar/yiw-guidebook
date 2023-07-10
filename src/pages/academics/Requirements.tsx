import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import ReqInfo from '../../shared/ReqInfo';

type Props = {};

const listStyling = 'list-disc list-inside text-xl py-2';

function Requirements(props: Props) {
    return (
        <div>
            <Navbar />
            <Header header="Requirements" />
            <div className="text-2xl mx-auto w-1/2 text-center py-16">
                This is the general description explaining how we&apos;ve
                compiled the information students need to know regarding the
                requirements to satisfy in order to successfully transfer to
                UVA.
            </div>
            <ReqInfo
                sectionName="Grade Requirements"
                sectionList={['List Item #1', 'List Item #2', 'List Item #3']}
            />

            <ReqInfo
                sectionName="UVA Wise Course Requirements"
                sectionList={['List Item #1', 'List Item #2', 'List Item #3']}
            />

            <ReqInfo
                sectionName="General UVA Requirements"
                sectionList={['List Item #1', 'List Item #2', 'List Item #3']}
            />

            <ReqInfo
                sectionName="General Academic Tips"
                sectionList={['List Item #1', 'List Item #2', 'List Item #3']}
            />

            <Footer />
        </div>
    );
}

export default Requirements;
