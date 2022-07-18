import { useState } from "react";
import { TbCircles } from "react-icons/tb";
import { RiArrowUpSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";

// ACCORDION WITH THE SELECTABLE CARDS

export default function AccordionScrollBar(props) {
  const [isShowing1, setIsShowing1] = useState(true);

  const toggle = () => {
    setIsShowing1(!isShowing1);
  };

  return (
    <div className="w-11/12 md:ml-5  lg:w-1/2 mb-9 leading-4 rounded-md p-3 text-white bg-[#19151B] ">
      {/* SELECTABLE ACCORDION BUTTON  */}
      <button
        className="w-full relative px-2 border-none bg-transparent outline-none cursor-pointer flex h-10 items-center text-left "
        onClick={toggle}
        type="button"
      >
        <TbCircles className="mr-3" />
        <div className="flex justify-between w-full">
          <h1 className="text-md flex font-semibold">
            {props.title}
            <AiOutlineQuestionCircle className="ml-3" />
          </h1>
          {isShowing1 ? <MdOutlineKeyboardArrowDown /> : <RiArrowUpSLine />}
        </div>
      </button>
      <div
        className="overflow-auto p-1 w-full h-72 mt-4"
        style={{
          display: isShowing1 ? "block" : "none",
        }}
      >
        {/* THE SELECTABLE CARDS */}
        <div className="md:flex mb-2 justify-center items-center">
          <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
            <p className="text-slate-400">Accesories & ears</p>
            <br />
            <h3>Lorem ipsum</h3>
            <br />
            <h3 className="text-slate-400">9%</h3>
          </button>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Arms</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">15%</h3>
            </button>
          </div>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Background</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">2%</h3>
            </button>
          </div>
        </div>
        <div className="md:flex mb-2 justify-center items-center">
          <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
            <p className="text-slate-400">Eye</p>
            <br />
            <h3>Lorem ipsum</h3>
            <br />
            <h3 className="text-slate-400">32%</h3>
          </button>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Glasses</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">3%</h3>
            </button>
          </div>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Hair & Hats</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">2%</h3>
            </button>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
            <p className="text-slate-400">Head</p>
            <br />
            <h3>Lorem ipsum</h3>
            <br />
            <h3 className="text-slate-400">92%</h3>
          </button>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Legs & Clothes</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">2%</h3>
            </button>
          </div>
          <div>
            <button className="mb-2 focus:border-4 active:border-4 h-32 w-44 p-4 bg-[#050708] flex flex-col justify-center items-center ml-2 rounded-lg border-rose-500">
              <p className="text-slate-400">Mouth</p>
              <br />
              <h3>Lorem ipsum</h3>
              <br />
              <h3 className="text-slate-400">46%</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
