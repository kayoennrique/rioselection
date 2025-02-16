"use client";

import { Button, Typography } from "dicria-ui";
import Image from "next/image";
import React from "react";
import { Container } from "../Container/Container";

const RecruitmentSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Desktop background image */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-0 w-1/3 h-auto opacity-75">
          <Image
            src="/rioselection.png"
            alt="Decorative element"
            className="object-cover h-full w-full"
            width={400}
            height={1000}
          />
        </div>
      </div>

      <Container>
        {/* Desktop layout */}
        <div className="relative w-full h-screen hidden md:flex items-center">
          <div className="absolute left-0 bottom-0 w-1/2 h-4/5">
            <div className="relative w-full h-full">
              <Image
                src="/img.png"
                alt="Paintball player"
                className="object-contain h-full"
                width={736}
                height={492}
              />
            </div>
          </div>

          <div className="relative ml-auto w-1/2 z-10">
            <Typography
              as="h2"
              className="text-[52px] not-italic font-gemunu font-bold text-white mb-4"
            >
              Contact and Recruitment
            </Typography>
            <Typography
              as="p"
              className="font-roboto text-[18px] text-gray-300 font-normal mb-6"
            >
              Want to get in touch or become a member? Talk to us!
            </Typography>
            <Button
              textbutton="Get in touch"
              className="bg-[#24C1F2] hover:bg-cyan-600 text-white text-[22px] not-italic font-bold width-[288px] height-[57px] py-2 px-8 rounded-lg transition-colors duration-300 font-roboto"
              onClick={() => console.log("Get in touch clicked")}
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="relative w-full h-screen flex flex-col md:hidden">
          <div className="relative w-full h-[65%]">
            <Image
              src="/img.png"
              alt="Paintball player"
              className="object-cover w-full h-full"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6 mt-4">
            <Typography
              as="h1"
              className="text-[52px] not-italic font-gemunu font-bold text-white mb-2"
            >
              Contact and Recruitment
            </Typography>
            <Typography
              as="p"
              className="font-roboto text-[18px] text-gray-300 font-normal mb-4"
            >
              Want to get in touch or become a member? Talk to us!
            </Typography>
            <Button
              textbutton="Get in touch"
              className="bg-[#24C1F2] hover:bg-cyan-600 text-white text-[16px] not-italic font-bold py-3 px-8 rounded-lg transition-colors duration-300 font-roboto w-full max-w-[200px]"
              onClick={() => console.log("Get in touch clicked")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecruitmentSection;
