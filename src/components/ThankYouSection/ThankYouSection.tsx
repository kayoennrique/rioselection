"use client";

import React from "react";
import { Container } from "../Container/Container";
import { Typography } from "dicria-ui";
import Image from "next/image";

const ThankYouSection = () => {
  return (
    <Container>
      {/* Desktop Layout */}
      <section className="relative w-full bg-black text-white hidden md:flex items-center overflow-hidden justify-between px-8">
        <div className="w-[565px] md:w-1/2 mr-32 z-10">
          <Typography
            as="p"
            size="36px"
            className="lg:text-3xl font-bold font-gemunu"
          >
            We cannot fail to thank our partner who is also part of our team.
          </Typography>
        </div>

        <div className="relative right-8 transform">
          <Image src="/logo-dye.svg" alt="Duo Logo" width={455} height={204} />
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden w-full bg-black text-white flex flex-col items-center px-4 py-8">
        <Typography as="p" className="text-center mb-6 text-[32px] font-gemunu">
          We cannot fail to thank our partner who is also part of our team.
        </Typography>

        <div className="w-auto">
          {" "}
          <Image src="/logo-dye.svg" alt="Duo Logo" width={292} height={186} />
        </div>
      </section>
    </Container>
  );
};

export default ThankYouSection;
