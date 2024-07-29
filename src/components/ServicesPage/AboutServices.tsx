import { FaAngleRight } from "react-icons/fa";

function AboutServices() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-center text-3xl font-medium">About our Services</h1>
        <ul className="flex flex-col gap-2 mt-3">
          <li className="flex items-center gap-1">
            <div className="bg-indigo-200 text-xl p-1 rounded-full">
              <FaAngleRight />
            </div>
            <p className="mt-1.5">B2B lead</p>
          </li>
          <li className="flex items-center gap-1">
            <div className="bg-indigo-200 text-xl p-1 rounded-full">
              <FaAngleRight />
            </div>
            <p className="mt-1.5">Direct Phone Number</p>
          </li>
          <li className="flex items-center gap-1">
            <div className="bg-indigo-200 text-xl p-1 rounded-full">
              <FaAngleRight />
            </div>
            <p className="mt-1.5">Mobile Phone Number</p>
          </li>
          <li className="flex items-center gap-1">
            <div className="bg-indigo-200 text-xl p-1 rounded-full">
              <FaAngleRight />
            </div>
            <p className="mt-1.5">Personal Email</p>
          </li>
          <li className="flex items-center gap-1">
            <div className="bg-indigo-200 text-xl p-1 rounded-full">
              <FaAngleRight />
            </div>
            <p className="mt-1.5">Business Email enrichment</p>
          </li>
        </ul>
        <h1 className="text-xl font-medium my-4">
          Are looking for an expert data miner to collect mobile phone numbers,
          direct phone numbers, <br /> and personal email addresses?
        </h1>
        <p className="text-gray-600">
          I can Help you to Find Any Contact Person, Industry Person, Email and
          Phone Number. Direct Dials Number Collect From Verified Source. I am
          also expert with B2B Lead generation, Email Finding, Contact List
          Building, Any Industry Leads/ Decision makers, Data
          Appending/Enrichment lists.
        </p>
        <div className="mt-5">
          <h2 className="text-lg font-medium ">I Will Provide:</h2>
          <div className="ml-8 mt-2">
            <ul className="text-gray-600 list-disc">
              <li>First and Last Name</li>
              <li>Job Title/Role</li>
              <li>Person Business/Personal Cell Phone Number</li>
              <li>Business Email Address(100% Valid Zero Bounce)</li>
              <li>LinkedIn URL</li>
              <li>Business Name</li>
              <li>Business Website</li>
              <li>Business Address</li>
            </ul>
          </div>
          <p className="mt-5 text-gray-600">
            And Anything That You want as your required Information Paid Tools
            That I use for Phone Numbers: <br /> Seamless.ai, Zoominfo, Lusa,
            SalesQL, Apollo.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-medium mt-5">
            What About Verifying Emails:
          </h1>
          <p className="mt-2 text-gray-600">
            Email Verify with NeverBounce and also Send Emails by mail to check
            Bounce rate. <br /> So you will get a 100% Verified List with zero
            Bounce.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-medium mt-5">
            Personal Phone Number Service, Using Tools:
          </h1>
          <ul className="text-gray-600 list-decimal ml-8">
            <li>Lusha</li>
            <li>Zoominfo</li>
            <li>ContactOut</li>
            <li>Kendo</li>
            <li>seamless</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
