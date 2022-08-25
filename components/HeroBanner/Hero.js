import React from "react";
import Image from "next/image";

const Hero = ({ picture }) => {
  const imgUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660687286/lukas-blazek-mcSDtbWXUZU-unsplash_vg2h0a.jpg";
  return (
    <div className="h-72 md:h-80 lg:h-[600px] w-full relative">
      <Image
        src={picture ? picture : imgUrl}
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority="true"
        // placeholder="blur"
        className=" lg:brightness-50"
      />
    </div>
  );
};

export default Hero;
