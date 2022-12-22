import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#f7ab0a]">
          <ArrowUturnLeftIcon className="mr-2 h-5 w-5" />
          Go to Website
        </Link>

        <div className="hidden justify-center rounded-lg border-2 border-[#f7ab0a] p-5 md:flex">
          <h1 className="font-bold text-white">
            Need some help? Hit me up! 👉
          </h1>
          <Link
            href="https://www.ferrben.com/contact"
            className="ml-2 font-bold text-[#f7ab0a]"
          >
            Contact
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
