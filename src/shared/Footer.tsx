import { FiInstagram } from 'react-icons/fi';
import {
    FaFacebookSquare,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
    return (
        <div className="md:flex h-56 bg-blue-500 text-white">
            <div className="basis-1/3">
                <div className="px-32 py-12 flex flex-col">
                    <span className="text-5xl text-white mb-4">YIW</span>
                    <span className="text-2xl text-white">
                        Developed by ...
                    </span>
                </div>
            </div>
            <div className="basis-1/3">
                <div className="px-32 py-12 gap-4 flex flex-col">
                    <span className="text 3xl text-white">Websites:</span>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a
                                href="https://www.uvawise.edu/"
                                className="hover:underline pb-2"
                            >
                                UVA Wise Website
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://my.uvawise.edu/"
                                className="hover:underline pb-2"
                            >
                                UVA Wise Portal
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://moodle.uvawise.edu/"
                                className="hover:underline pb-2"
                            >
                                Moodle
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="basis-1/3">
                <div className="px-32 py-12 gap-4 flex flex-col">
                    <span>Contact Us</span>
                    <span>UVA Wise Socials:</span>
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/uva_wise/">
                            <FiInstagram className="h-6 w-6" />
                        </a>
                        <a href="https://www.facebook.com/UVAWise/">
                            <FaFacebookSquare className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com/UVA_Wise">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/school/uvawise/">
                            <FaLinkedinIn className="h-6 w-6" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCd_ngvXIT81lcQmsnIPss_Q">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
