import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
const Logo = () => {
  return (
    <div>
      <header>
        <Image src={logo} alt={"image"} height={400} width={200}></Image>
      </header>
    </div>
  );
};

export default Logo;
