import React from "react";
import Image from "next/image";
import Logo2 from "../../../../public/images/logo-2-01-01.png";

//  FOOTER COMPONENT

function Footer() {
  return (
    <footer
      className="bg-[#19151B] h-40"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <a className="flex items-center content-center w-48" href="#">
        <Image src={Logo2} objectFit="cover" />
      </a>
    </footer>
  );
}

export default Footer;
