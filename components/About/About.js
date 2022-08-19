import Image from "next/image";
import React from "react";

const About = () => {
  const profilUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660930519/moi_pdiid5.jpg";
  return (
    <div className=" lg:flex lg:justify-center">
      <div className="lg:absolute z-20 top-[20em] lg:flex lg:justify-center lg:flex-col  w-full lg:w-[70%] p-4 ">
        <div className=" flex items-end mb-4 ">
          <div className=" h-36  w-36 relative ">
            <Image
              src={profilUrl}
              alt="Photo profil"
              layout="fill"
              objectFit="cover"
              // objectPosition="center"
              className=" rounded-full"
            />
          </div>
          <h3 className="text-2xl font-extrabold font-Montserrat lg:text-white">
            Junior Wembopa
          </h3>
        </div>
        <div className="px-4  lg:bg-white lg:px-10 py-10 dark:bg-black">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui unde
            sunt officia aliquid nihil, aut minima corrupti autem, facere
            aperiam reiciendis, magnam asperiores ab molestiae dolorum impedit?
            Veritatis, in cupiditate. Repellendus quisquam sunt quod ullam
            mollitia, odio porro illo! Ab a facilis beatae molestias ad incidunt
            rerum, impedit porro nihil provident nam, voluptate, fuga autem
            dolore! Odio aliquid veniam nemo! Amet, eum obcaecati, magni
            delectus, asperiores necessitatibus unde debitis ut sapiente beatae
            modi error nesciunt sint saepe voluptatem ullam id perferendis
            aliquid nihil commodi minima aut nobis? Ab, enim est. Quos,
            eligendi. Inventore unde quidem impedit! Molestiae iure voluptate
            blanditiis in ea accusamus similique facere reprehenderit earum
            dolor minus neque voluptates voluptas quod, assumenda odit enim
            magnam doloremque id ducimus. Sint possimus distinctio provident
            obcaecati magnam repellendus, eligendi fuga recusandae consequuntur,
            corporis illo saepe reiciendis nesciunt, enim non asperiores velit
            eos explicabo! Atque at quia distinctio non tempore repellat porro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
