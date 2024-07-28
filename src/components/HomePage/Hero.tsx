import Link from "next/link";

function Hero() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black/50">
        <div className="max-w-7xl mx-auto px-5 min-h-[85vh] flex flex-col  justify-center text-white">
          <h1 className="text-4xl font-medium">
            Get your target leads based on your targeted criteria. <br /> Highly
            targeted & verified lead <br /> at affordable cost.
          </h1>
          <p className="mt-4 ">
            Using your search criteria we will find & build highly targeted lead
            list within 48 hrs. <br /> Just let us know your requirements and be
            relaxed.
          </p>
          <div className="mt-5 flex gap-6">
            <Link
              className="bg-indigo-700 p-3 rounded-md text-sm font-medium transition-all duration-200 ease-linear hover:bg-black hover:scale-[.96]"
              href="/"
            >
              CONTACT US
            </Link>
            <Link
              className="bg-yellow-600 py-3 px-8 rounded-md text-sm font-medium transition-all duration-200 ease-linear hover:bg-indigo-700 hover:scale-[.96]"
              href="/"
            >
              HIRE US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
