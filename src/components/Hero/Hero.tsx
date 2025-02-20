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
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <Typography
          as="h1"
          size="80px"
          className="md:text-6xl font-bold text-white font-gemunu mt-20 mb-4"
        >
          The battle starts now!
        </Typography>
        <Typography
          as="p"
          className="text-[32px] w-auto text-white mt-8 font-roboto mb-8"
        >
          Train hard, push your limits, and feel the adrenaline!
        </Typography>
        <Button
          textbutton="Get in touch"
          className="bg-[#24C1F2] hover:bg-cyan-600 text-white text-[22px] not-italic font-bold w-full lg:w-[288px] h-[57px] py-2 px-8 rounded-lg transition-colors duration-300 font-roboto"
          onClick={() =>
            window.open(
              "https://www.instagram.com/rioselectionpaintballteam/",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
};

export default HeroSection;
