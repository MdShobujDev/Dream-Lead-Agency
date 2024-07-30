import Link from "next/link";

function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Pricing Plans</h1>
        <p>
          Maximize your prospecting and sales conversions using Accurate,
          Verified & Relevant data based on your target persona
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10 ">
        <div className="border flex flex-col items-center justify-center gap-7 p-5 rounded-3xl shadow bg-teal-200">
          <div className="text-center font-medium">
            <h2 className="text-3xl font-bold">Basic</h2>
            <p>$20</p>
          </div>
          <div className="text-center">
            <p>
              50 leads | contact name | Title | Email | Business Name | Location
              | Website
            </p>
          </div>
          <div className="text-center flex flex-col gap-2 font-medium ">
            <h2>1 Day Delivery</h2>
            <h2>1 Time Revision</h2>
            <h2>4 hours of work</h2>
            <h2>Formating & clean up</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              className="bg-green-600 text-white font-medium p-3 rounded-md cursor-pointer"
              href="/"
            >
              Order Now
            </Link>
            <Link
              className="bg-blue-600 text-white font-medium p-3 rounded-md cursor-pointer"
              href="/"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
