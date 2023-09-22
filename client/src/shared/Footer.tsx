import { FiInstagram } from 'react-icons/fi';
import {
    FaFacebookSquare,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
    return (
        <div className="md:flex text-white bg-wise-blue text-center md:text-left">
            <div className="basis-1/3">
                <div className="px-32 py-12 flex flex-col">
                    <span className="text-5xl text-white mb-4">YIW</span>
                    <span className="text-2xl text-white">
                        Developed by ...
                    </span>
                </div>
            </div>
            <div className="basis-1/3 bg-wise-blue">
                <div className="px-32 py-12 gap-4 flex flex-col">
                    <span className="text 3xl text-white">Websites:</span>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a
                                href="https://www.uvawise.edu/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                            >
                                UVA Wise Website
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://my.uvawise.edu/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                            >
                                UVA Wise Portal
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://moodle.uvawise.edu/"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                            >
                                Moodle
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="basis-1/3 bg-wise-blue">
                <div className="px-32 py-12 gap-4 flex flex-col">
                    <span>Contact Us</span>
                    <span>UVA Wise Socials:</span>
                    <div className="flex gap-2 justify-center md:justify-start">
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
