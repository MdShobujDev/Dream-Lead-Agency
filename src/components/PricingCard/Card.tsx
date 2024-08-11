import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

function Card() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Pricing Plans</h1>
        <p>
          Maximize your prospecting and sales conversions using Accurate,
          Verified & Relevant data based on your target persona
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <div className="grid  min-[900px]:grid-cols-3 min-[600px]:grid-cols-2 grid-cols-1 gap-5 w-11/12 ">
          {/* =========================== */}
          {/* basic */}
          {/* =========================== */}
          <div className=" p-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl overflow-hidden">
            <div className=" bg-white  p-4 rounded-xl h-full flex flex-col justify-between">
              <h2 className=" font-medium mt-5">Basic</h2>

              <div>
                <h1 className="text-[27px]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-pink-600">
                  $<span className="text-3xl">30</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm my-4">
                Essential B2B lead generation with targeted outreach and data
                insights to kickstart your sales funnel.
              </p>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
              </ul>
              {/* button  */}

              <div className=" bg-gradient-to-r from-blue-500 to-violet-500 max-w-max mx-auto mt-5 px-8 py-2 cursor-pointer text-white font-medium rounded-md">
                <Link href={"/"}>Get started</Link>
              </div>
            </div>
          </div>
          {/* =========================== */}
          {/* basic  */}
          {/* =========================== */}
          {/* =========================== */}
          {/* advanced  */}
          {/* =========================== */}
          <div className=" p-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl overflow-hidden">
            <div className=" bg-white  p-4 rounded-xl h-full w-full flex flex-col justify-between">
              <div className="flex w-full items-center justify-end ">
                <div className="bg-violet-600/10  rounded">
                  <p className="leading-none text-xs p-1 rounded font-medium  bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-pink-600">
                    Popular
                  </p>
                </div>
              </div>

              <h2 className=" font-medium">Advanced</h2>

              <div>
                <h1 className="text-[27px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-pink-600">
                  $<span className="text-3xl">50</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm my-4">
                Comprehensive B2B lead generation with advanced analytics,
                personalized campaigns, and optimized conversion strategies.
              </p>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
              </ul>
              {/* button  */}

              <div className=" bg-gradient-to-r from-blue-500 to-violet-500 max-w-max mx-auto mt-5 px-8 py-2 cursor-pointer text-white font-medium rounded-md">
                <Link href={"/"}>Get started</Link>
              </div>
            </div>
          </div>
          {/* =========================== */}
          {/* advanced  */}
          {/* =========================== */}
          {/* =========================== */}
          {/* business  */}
          {/* =========================== */}
          <div className=" p-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl overflow-hidden">
            <div className=" bg-white  p-4 rounded-xl h-full flex flex-col justify-between">
              <h2 className=" font-medium mt-5">Business</h2>

              <div>
                <h1 className="text-[27px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-pink-600">
                  $<span className="text-3xl">70</span>
                </h1>
              </div>
              <p className="text-gray-400 text-sm my-4">
                Premium B2B lead generation with full-scale solutions, AI-driven
                insights, and dedicated account management for maximum ROI.
              </p>
              <ul className="text-gray-400 text-sm flex flex-col gap-3">
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
                <li className="flex  items-center gap-2">
                  <div className="bg-violet-600/10 p-1 rounded-full">
                    <FaCheck className=" text-violet-400 text-xs" />
                  </div>
                  <p>Lorem ipsum dolor</p>
                </li>
              </ul>
              {/* button  */}

              <div className=" bg-gradient-to-r from-blue-500 to-violet-500 max-w-max mx-auto mt-5 px-8 py-2 cursor-pointer text-white font-medium rounded-md">
                <Link href={"/"}>Get started</Link>
              </div>
            </div>
          </div>
          {/* =========================== */}
          {/* business  */}
          {/* =========================== */}
        </div>
      </div>
    </section>
  );
}

export default Card;
