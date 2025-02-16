"use client";

import { Typography } from "dicria-ui";
import React from "react";
import { Container } from "../Container/Container";

const HistorySection = () => {
  return (
    <section id="about" className="bg-black text-white mb-8 w-full">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Typography
              as="h1"
              className="text-[52px] not-italic font-bold mb-2 font-gemunu"
            >
              Our History
            </Typography>
            <Typography
              as="p"
              className="text-gray-300 font-roboto font-normal text-[18px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
            <br />
            <Typography
              as="p"
              className="text-gray-300 font-roboto font-normal text-[18px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;
