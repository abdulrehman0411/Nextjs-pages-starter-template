import React from "react";
import Image from "next/image";
import Vector from "@/images/Vector.png";
const Footer = () => {
  return (
    <div>
      <Image src={Vector} alt={""} height={1000} width={900}></Image>
    </div>
  );
};

export default Footer;
