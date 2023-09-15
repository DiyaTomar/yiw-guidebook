import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import ReqInfoCard from './sharedAcademics/ReqInfoCard';
import ContactInfoCard from '../../shared/ContactInfoCard';
import info from '../../shared/staffInfo';
import allRequirements from './sharedAcademics/requirementText';

function Requirements() {
    return (
        <div>
            <Navbar />
            <Header header="Requirements" />
            {/* <div className="text-2xl mx-auto w-1/2 text-center py-16">
                This is the general description explaining how we&apos;ve
                compiled the information students need to know regarding the
                requirements to satisfy in order to successfully transfer to
                UVA.
            </div> */}
            <div className="mt-12">
                {allRequirements.map((requirement) => (
                    <ReqInfoCard
                        key={requirement.id}
                        id={requirement.id}
                        sectionName={requirement.sectionName}
                        sectionList={requirement.sectionList}
                    />
                ))}
            </div>

            <div className="text-center text-3xl pt-16 font-semibold">
                Program Advisors
            </div>
            <div className="flex flex-wrap gap-16 pb-16 py-8 justify-center">
                {info.map((advisor) => (
                    <ContactInfoCard
                        key={advisor.id}
                        image={advisor.image}
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
