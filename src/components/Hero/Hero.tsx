"use client";

import { Button, Typography } from "dicria-ui";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="relative h-screen w-full " id="home">
      <div className="absolute inset-0">
        <Image
          src="/hero-image.png"
          alt="Hero background"
          className="w-full h-full object-cover brightness-50 opacity-80"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <Typography
          as="h1"
          size="80px"
          className="md:text-6xl font-bold text-white font-gemunu mb-4"
        >
          Ready for battle?
        </Typography>
        <Typography
          as="p"
          size="32px"
          className="text-[12px] md:text-2xl text-white font-roboto mb-8"
        >
          Join Rio Selection and show your strength!
        </Typography>
        <Button
          textbutton="Get in touch"
          className="bg-[#24C1F2] hover:bg-cyan-600 text-white text-[22px] not-italic font-bold w-full lg:w-[288px] h-[57px] py-2 px-8 rounded-lg transition-colors duration-300 font-roboto"
          onClick={() => console.log("Get in touch clicked")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
