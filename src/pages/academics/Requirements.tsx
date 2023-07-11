import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import ReqInfo from '../../shared/ReqInfo';
import ContactInfoCard from '../../shared/ContactInfoCard';
import info from '../../shared/staffInfo';

function Requirements() {
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

            <div className="text-center text-3xl pt-10">Program Advisors</div>
            <div className="md:flex gap-16 pb-16 py-8 justify-center">
                {info.map((advisor) => (
                    <ContactInfoCard
                        key={advisor.id}
                        name={advisor.name}
                        position={advisor.position}
                        number={advisor.number}
                        email={advisor.email}
                        office={advisor.office}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Requirements;
