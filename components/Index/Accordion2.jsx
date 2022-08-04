import { useState } from "react";
import { TbCircles } from "react-icons/tb";
import { RiArrowUpSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsBoxArrowUpLeft } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";

// THE SIMPLE ACCORDION BUTTON WITH THE INNER TEXT

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="w-full mb-9 leading-4 rounded-md p-3 text-white bg-[#19151B] ml-0 lg:ml-16 ">
      {/* ACCORDION BUTTON WITH THE TITLE */}
      <button
        className="relative flex items-center w-full h-10 px-2 text-left bg-transparent border-none outline-none cursor-pointer "
        onClick={toggle}
        type="button"
      >
        <TbCircles className="mr-3" />
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-md">{props.title}</h1>
          {isShowing ? <MdOutlineKeyboardArrowDown /> : <RiArrowUpSLine />}
        </div>
      </button>
      {/* THE INNER TEXT SHOWED WHEN ACCORDION BUTTON IS CLICKED */}

      {/* THE INNER TEXT IS CALLED THROUGH PROPS & LINKS WITH THE ICONS ARE WRITTEN BELOW */}
      <div
        className="w-full p-3 mt-4 overflow-auto h-72 "
        style={{
          display: isShowing ? "block" : "none",
        }}
      >
        {props.content}
        <div className="flex flex-col">
          <div
            className="flex mt-9"
            style={{ justifyContent: "space-between", width: "70%" }}
          >
            <div className="flex">
              <BsBoxArrowUpLeft className="mr-2" />
              <Link href="#">
                <span className="text-red-600">Lorem ipsum.com</span>
              </Link>
            </div>
            <div className="flex">
              <FaDiscord className="mr-2" />
              <Link href="#">
                <span className="text-red-600">@Lorem ipsum</span>
              </Link>
            </div>
          </div>

          <div
            className="flex my-9 "
            style={{ justifyContent: "space-between", width: "70%" }}
          >
            <div className="flex">
              <GrInstagram className="mr-2" />
              <Link href="#">
                <span className="text-red-600">@Lorem ipsum</span>
              </Link>
            </div>
            <div className="flex">
              <FiTwitter className="mr-2" />
              <Link href="#">@Lorem ipsum</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
