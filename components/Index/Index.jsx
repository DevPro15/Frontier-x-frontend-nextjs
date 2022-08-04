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
            className="w-full px-2 pt-10 rounded-lg "
            alt="banner"
            src="https://lh3.googleusercontent.com/EIdiJxQ5xPNFFtQ1uhVHO0BZB5duF3IU3voOnkptZ74crZEbuTACV89YyOSIhampl4o2-4XjGd5Fh7JQUgBkA3PKxPvNdoCAoccR=h600"
          />
        </div>
        {/* THE CENTER CIRCLE IMAGE */}
        <div className="absolute w-12 h-12 overflow-hidden rounded-full mb-60 lg:mb-14 md:w-32 md:h-32 ring-1 ring-black-300 ring-offset-1">
          <Image
            objectFit="cover"
            src={CircleLogo}
            alt="circle image"
            priority
          />
        </div>
        {/* HEADER TEXT */}
        <div className="flex flex-col items-center justify-center w-full mt-20 md:mt-32">
          <h2 className="text-5xl font-semibold text-white">Lorem ipsum</h2>
          <p className="text-lg text-red-800 ">
            Created by: <span className="text-lg text-white"> lorem ipsum</span>
          </p>
          <p className="text-lg text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
        {/* 3 BUTTONS BELOW THE TEXT */}
        <div className="items-center justify-center mb-8 ml-2 md:ml-0 md:flex mt-14">
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
      <div className="flex flex-col items-center justify-center lg:flex-row ">
        <Accordion
          title="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?"
        />
        <AccordionScrollBar title="Lorem ipsum" />
      </div>
      <div className="w-full md:flex">
        <div className="w-5/12 sm:hidden lg:block"></div>
        <div className="w-full px-4 ml-0 lg:ml-0 lg:w-1/2 md:px-7">
          <Accordion2
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?"
          />
        </div>
        {/* <Accordion2
          title="Lorem ipsum"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iste voluptate tempora consequuntur voluptatibus architecto cum aliquid fugiat, minus esse eaque deserunt. Ad voluptate recusandae, eos mollitia rem unde praesentium?"
        /> */}
      </div>
    </div>
  );
}

export default Index;
