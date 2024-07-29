"use client";
import CountUp from "react-countup";

function Parallax() {
  return (
    <section className=" bg-[url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="bg-black/70">
        <div className="max-w-7xl mx-auto px-12 py-20 text-white">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center content-between gap-10">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={1.2} enableScrollSpy duration={5} decimals={1} />
                K+
              </h2>
              <p className="text-gray-300">Projects Done</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={100} enableScrollSpy duration={5} />+
              </h2>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={4.8} enableScrollSpy duration={5} decimals={1} />
              </h2>
              <p className="text-gray-300">Client Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                <CountUp end={6} enableScrollSpy duration={5} />+
              </h2>
              <p className="text-gray-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
