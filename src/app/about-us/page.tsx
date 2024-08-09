import aboutImage from "@/../public/images/about.png";
import missionAndVissionImage from "@/../public/images/mission-vission.png";
import TeamMember from "@/components/TeamMember";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

function AboutPage() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* about us start here */}
        <div className=" bg-white m-5 p-7 rounded-xl shadow-lg">
          <h1 className="text-4xl font-medium text-center">
            About Our Company
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-3 items-center mt-3 text-justify">
            <div className=" md:flex-[0_0_58%] lg:flex-[0_0_65%] flex flex-col gap-2 text-gray-600">
              <p>
                At <span className="font-medium">Dream Lead Agency,</span> we
                specialize in turning your business goals into reality by
                connecting you with high-quality leads that drive growth. As a
                premier B2B lead generation agency, we understand that every
                business is unique, and so are its needs. That’s why we focus on
                delivering tailored lead generation strategies that align with
                your specific objectives.
              </p>
              <p>
                Our team of experienced professionals combines cutting-edge
                technology with proven marketing techniques to identify and
                engage the right prospects for your business. We pride ourselves
                on our ability to generate leads that are not just numerous but
                also relevant, ensuring that your sales pipeline is always
                filled with potential clients who are genuinely interested in
                what you have to offer.
              </p>
              <p>
                Whether you’re a startup looking to build your client base or an
                established company aiming to expand into new markets, Dream
                Lead Agency is here to help you succeed. We are committed to
                providing measurable results, maintaining transparency, and
                fostering long-term partnerships that empower your business to
                thrive.
              </p>
              <p className="font-medium">Dream big, and let us lead the way.</p>
            </div>
            <div className=" md:flex-[0_0_42%]  lg:flex-[0_0_35%]">
              <Image
                src={aboutImage}
                alt="about our company"
                width={350}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* about us end here  */}

        {/* our CEO and Founder info */}
        <div className="bg-white m-5 p-5 rounded-xl shadow-lg">
          <h1 className=" font-bold text-2xl text-center">FOUNDER & CEO</h1>
          <div className="flex flex-col min-[850px]:flex-row gap-4 mt-2">
            {/* left side  */}
            <div className="flex flex-col items-center w-full bg-gray-50 p-5 rounded-xl">
              <div className="w-20 h-20 bg-gray-400 rounded-full"></div>
              <h2 className=" mt-3 leading-5 font-medium">Md Roni Sorkar</h2>
              <p className="text-xs font-medium text-gray-500">Founder & CEO</p>
              <div className="flex items-center gap-2 mt-4 text-xl">
                <a href="#">
                  <FaFacebook className="text-blue-600 hover:scale-[0.9] transition-all" />
                </a>
                <a href="#">
                  <FaSquareXTwitter className="hover:scale-[0.9] transition-all" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-sky-600 hover:scale-[0.9] transition-all" />
                </a>
                <a href="#">
                  <FaSquareInstagram className=" text-orange-500 hover:scale-[0.9] transition-all" />
                </a>
              </div>
            </div>
            {/* right side  */}
            <div>
              <p className="text-justify mb-2">
                The Founder & CEO of Dream Lead Agency, Md Roni Sorkar, is a
                distinguished expert in B2B lead generation. With a proven track
                record, he has successfully completed over 1,000 projects and
                served more than 500 international clients. Roni’s dedication to
                delivering top-notch results has established him as a trusted
                leader in the industry, driving Dream Lead Agency to new heights
                of success.
              </p>
              <Link
                className="mt-2 bg-indigo-700 p-3 rounded-md text-sm font-medium transition-all duration-200 ease-linear hover:bg-black hover:scale-[.96] text-white "
                href="/"
              >
                Hire Md Roni Sorkar
              </Link>
            </div>
          </div>
        </div>

        {/* team member section  */}
        <div>
          <TeamMember />
        </div>

        {/* our mission and vission  */}
        <div className="bg-white m-5 p-5 rounded-xl shadow-lg">
          <div
            className="flex mt-3 items-center flex-col 
          "
          >
            {/* left side  */}
            <div>
              <Image
                src={missionAndVissionImage}
                alt="Mission and Vission"
                width={350}
                height={300}
              />
            </div>

            {/* right side  */}
            <div>
              <h1 className="text-4xl font-medium  text-center mb-3">
                Our Mission and Vision
              </h1>
              <div className="text-justify">
                <h2 className="font-medium underline">Mission</h2>
                <p className="text-gray-500">
                  At Dream Lead Agency, our mission is to empower businesses by
                  connecting them with the right opportunities for growth. We
                  strive to deliver innovative and effective B2B lead generation
                  solutions that drive meaningful results for our clients. Our
                  goal is to build lasting partnerships through trust,
                  transparency, and a relentless focus on quality, helping
                  businesses of all sizes achieve their full potential.
                </p>
              </div>
              <div>
                <h2 className="font-medium underline mt-2">Vision</h2>
                <p className=" text-gray-500">
                  Our vision is to be the leading B2B lead generation agency,
                  recognized globally for our excellence in delivering
                  high-quality leads and unmatched client service. We aim to
                  redefine how businesses approach growth by providing
                  strategic, data-driven solutions that open new doors and
                  create lasting value. At Dream Lead Agency, we aspire to be
                  the go-to partner for companies seeking sustainable, scalable
                  success in a constantly evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
