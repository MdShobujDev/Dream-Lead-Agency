import Link from "next/link";
import { MdKeyboardReturn } from "react-icons/md";

export default function NotFound() {
  return (
    <section className="min-h-screen ">
      <div className="max-w-7xl flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl">Not Found</h2>
          <p>Could not find requested resource</p>
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-400 transition-all flex items-center"
          >
            <MdKeyboardReturn /> Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
