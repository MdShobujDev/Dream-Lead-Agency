"use client";

import Logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Header() {
  const [isToggole, setIsToggole] = useState(false);
  const handleToggole = () => {
    setIsToggole(() => !isToggole);
  };

  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Why Hire Us", link: "/why-hire-us" },
    { id: 4, name: "Pricing", link: "/pricing" },
    { id: 5, name: "About", link: "/about-us" },
    { id: 6, name: "Contact", link: "/contact-us" },
  ];
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="shadow-lg sticky top-0 bg-white  z-50">
        {/* big screen nav bar  */}
        <nav className=" max-w-7xl mx-auto px-5  flex items-center justify-between gap-4">
          <div>
            <Link href={"/"} className="font-bold text-2xl">
              <Image src={Logo} alt="Dream Lead Agency" width={90} />
            </Link>
          </div>
          <div className="min-[950px]:flex hidden gap-8 items-center">
            <div className="flex ">
              {navItems.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className={` hover:text-indigo-700 px-3 hover:bg-indigo-50 py-5 transition-all duration-300 text-sm font-medium ${
                    pathname === item.link
                      ? "text-indigo-700 underline underline-offset-4"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="bg-black text-white font-medium text-xs cursor-pointer p-3 rounded hover:bg-indigo-700 transition-all duration-300">
              <Link href={"/"}>GET 50 FOR FREE</Link>
            </div>
          </div>
          {/* toggole button  */}
          <div
            className="min-[950px]:hidden block p-2 transition-all duration-300 ease-linear cursor-pointer text-xl"
            onClick={handleToggole}
          >
            {isToggole ? <FaXmark /> : <FaBarsStaggered />}
          </div>
        </nav>
      </div>
      {/* // small screen nav bar */}
      <div className="min-[950px]:hidden block relative">
        <div
          className={`flex flex-col gap-5 bg-gray-100 absolute  top-0 ${
            isToggole ? "left-0 right-0" : "-left-96"
          } transition-all duration-500 ease-out`}
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.id}
                className={`hover:text-indigo-700 transition-all py-2 px-5 duration-300 text-sm font-medium hover:bg-indigo-100 ${
                  pathname === item.link
                    ? "text-indigo-700 underline underline-offset-4"
                    : ""
                }`}
                href={item.link}
                onClick={() => setIsToggole(() => !isToggole)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="bg-black mx-5 mb-3 text-white font-medium text-xs cursor-pointer p-3 rounded hover:bg-indigo-700 transition-all duration-300 text-center">
            <Link href={"/"}>GET 50 FOR FREE</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
