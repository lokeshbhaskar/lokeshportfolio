import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function ContactButton() {
  return (
    <button className="bg-orange-600 flex items-center justify-between gap-4 py-2 px-4 rounded-full mt-10">
      {/* Contact text */}
      <p className="font-bold text-white transition-colors duration-300 arrow-hover:text-[#fe8b5e]">
        Contact Me
      </p>
      {/* Arrow wrapper */}
      <Link href="/pages/contact">
        <span className="arrow-wrapper group p-2 bg-white rounded-full cursor-pointer">
          <GoArrowRight size={20} className="text-[#fe8b5e]" />
        </span>
      </Link>
    </button>
  );
}
