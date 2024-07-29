import Link from "next/link";
import {
  FaCaretRight,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import {
  FaLocationDot,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50 shadow">
      <div className="max-w-7xl mx-auto p-6 flex flex-col justify-between gap-10 min-[950px]:flex-row">
        <div className="flex-[1_1_40%]">
          <Link href={"/"} className="font-bold text-2xl">
            Dream <span className="text-indigo-700">Lead Agency</span>
          </Link>
          <p className="text-gray-500">
            We help businesses to build high quality hand curated contact list
            on their target criteria & outreach on them to generate qualified
            leads
          </p>
        </div>
        <div className="flex-[1_1_60%] flex justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-medium mb-2">Company</h2>
            <ul className="text-gray-500 max-w-max">
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> About Us
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Contact Us
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Why Hire Us
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Terms and Conditions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium mb-2">Explore</h2>
            <ul className="text-gray-500 max-w-max">
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Services
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Pricing
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Portfolio
              </li>
              <li className="flex items-center cursor-pointer hover:text-indigo-700 hover:underline transition-all">
                <FaCaretRight /> Our Team
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium mb-2">Contact Us</h2>
            <ul className="text-gray-500">
              <li className="flex  items-center gap-1">
                <FaPhone className="text-indigo-600" />
                +88 01572994969
              </li>
              <li className="flex items-center gap-1">
                <FaSquareWhatsapp className="text-green-600" />
                +88 01572994969
              </li>
              <li className="flex items-center gap-1">
                <FaEnvelope className="text-orange-500" />
                info@dreamleadagency.com
              </li>
              <li className="flex gap-1">
                <FaLocationDot className="text-blue-700" />
                Kashiahata, Dhunat, Bogra, Zip 5841, <br /> Dhaka, Bangladesh
              </li>
            </ul>
            <ul className="flex items-center gap-3 mt-2 text-2xl">
              <li>
                <FaFacebook className="text-blue-500 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaLinkedin className="text-sky-600 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaSquareXTwitter className="cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom footer section  */}
      <div className="border-t border-slate-400 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved by{" "}
          <span className="text-indigo-700">Dream Lead Agency</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
