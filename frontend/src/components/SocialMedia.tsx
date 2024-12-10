import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="flex justify-between px-4 pb-2 pt-4 text-accent ">
            <a
                href="https://instagram.com/@gogili-hotel"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineInstagram className="cursor-pointer" />
            </a>
            <a
                href="https://facebook.com/@gogili-hotel"
                target="_blank"
                rel="noreferrer"
            >
                <FaFacebookF className="cursor-pointer" />
            </a>
            <a
                href="https://twitter.com/@gogili-hotel"
                target="_blank"
                rel="noreferrer"
            >
                <FaTwitter className="cursor-pointer" />
            </a>
        </div>
    );
};

export default SocialMedia;
