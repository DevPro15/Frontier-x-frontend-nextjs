import React from "react";
import Image from "next/image";
import CircleLogo from "../../public/images/logo-3-01.png";
import { VscGraph } from "react-icons/vsc";
import { TbCircles } from "react-icons/tb";
import { RiPriceTagFill } from "react-icons/ri";
import Accordion from "./Accordions";
import AccordionScrollBar from "./AccordionScrollBar";
import Accordion2 from "./Accordion2";

// PAGE COMPONENT IN WHICH ACCORDIAN AND THE PAGE HAS BEEN DON EXCEPT HEADER & FOOTER

function Index() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* THE HERO BANNER */}
        <div className="relative flex justify-center ">
          <img
            className="w-full pt-10 px-2 rounded-lg "
            src="https://lh3.googleusercontent.com/EIdiJxQ5xPNFFtQ1uhVHO0BZB5duF3IU3voOnkptZ74crZEbuTACV89YyOSIhampl4o2-4XjGd5Fh7JQUgBkA3PKxPvNdoCAoccR=h600"
          />
        </div>
        {/* THE CENTER CIRCLE IMAGE */}
        <div className="absolute w-12 h-12 overflow-hidden rounded-full mb-60 lg:mb-14 md:w-32 md:h-32 ring-1 ring-black-300 ring-offset-1">
          <Image objectFit="cover" src={CircleLogo} priority />
        </div>
        {/* HEADER TEXT */}
        <div className="flex flex-col items-center justify-center w-full mt-20 md:mt-32">
          <h2 className="font-semibold text-5xl text-white">Lorem ipsum</h2>
          <p className="text-red-800 text-lg ">
            Created by: <span className="text-white text-lg"> lorem ipsum</span>
          </p>
          <p className="text-white text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
        {/* 3 BUTTONS BELOW THE TEXT */}
        <div className="justify-center items-center ml-2 md:ml-0 md:flex mb-8 mt-14">
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <VscGraph className="mr-2" /> Lorem ipsum
          </button>
          <button
            type="button"
            className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            <TbCircles className="mr-2" /> Lorem ipsum
          </button>
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <RiPriceTagFill className="mr-2" /> Lorem ipsum
          </button>
        </div>
      </div>
      {/* FUNCTIONAL ACCORDION COMPONENTS */}
      <div className="flex justify-center items-center flex-col lg:flex-row ">
        <Accordion
          title="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?"
        />
        <AccordionScrollBar title="Lorem ipsum" />
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row lg:ml-96 ">
        <Accordion2
          title="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?"
        />
      </div>
    </div>
  );
}

export default Index;
