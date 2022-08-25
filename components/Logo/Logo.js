import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const logoUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660935205/831E92C6-22B5-41F0-8E99-0CE2344011B2__1_-removebg_z2qjhb.png";
  return (
    <>
      {" "}
      <Link href="/">
        <div className=" w-36 h-36 relative ">
          <Image
            src={logoUrl}
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="h-full  "
          />
        </div>
        {/* <h1 className="flex items-end text-2xl font-bold dark:text-white cursor-pointer">
          Analytics Clever
          <svg
            width=".8em"
            height=".8em"
            viewBox="0 0 24 24"
            className="text-green-700"
          >
            <path
              fill="currentColor"
              d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"
            ></path>
          </svg>
        </h1> */}
      </Link>
    </>
  );
};

export default Logo;
