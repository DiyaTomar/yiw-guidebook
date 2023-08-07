import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import ContactInfoCard from '../../shared/ContactInfoCard';
import info from '../../shared/staffInfo';

function OtherResources() {
    return (
        <div>
            <Navbar />
            <Header header="Other Resources" />
            <div className="w-5/6 mx-auto text-center">
                <div className="text-3xl font-bold mt-16">Important Links</div>
                <ul className="text-xl mt-4">
                    <li className="hover:underline">
                        <a
                            href="https://www.facebook.com/groups/380557069459316"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Year in Wise Facebook Group
                        </a>
                    </li>
                    <li className="hover:underline">
                        <a
                            href="http://ascs8.eservices.virginia.edu/AsEquivs/Home/EquivsShow?schoolId=1000170"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Transfer Credit Analyzer
                        </a>
                    </li>
                    <li className="hover:underline">
                        <a
                            href="https://as.virginia.edu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            UVA Arts and Sciences Website
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="text-3xl font-bold text-center mt-16">
                    Contact Info
                </div>
                <div className="md:flex gap-16 pb-16 py-8 justify-center">
                    {info.map((advisor) => (
                        <ContactInfoCard
                            key={advisor.id}
                            name={advisor.name}
                            image={advisor.image}
                            position={advisor.position}
                            number={advisor.number}
                            email={advisor.email}
                            office={advisor.office}
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="text-3xl font-bold text-center mt-8">
                    Campus Map
                </div>
                <img
                    className="mx-auto mt-8 mb-16"
                    src="https://www.uvawise.edu/sites/default/files/inline-images/UVA%20Wise%20Campus%20Map.png"
                    height={600}
                    width={600}
                    alt="Campus Map"
                />
            </div>
            <Footer />
        </div>
    );
}

export default OtherResources;
