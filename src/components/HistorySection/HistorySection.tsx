"use client";

import { Typography } from "dicria-ui";
import React from "react";
import { Container } from "../Container/Container";
import { motion } from "framer-motion";
import { letterVariant, paragraphVariant, textReveal } from "./animation";

const HistorySection = () => {
  // Letter animation variant

  const AnimatedHeading = ({ text }: { text: string }) => (
    <motion.span
      variants={textReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50px" }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section
      id="about"
      className="bg-black text-white mb-8 w-full scroll-mt-20"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Typography
              as="h1"
              className="text-[52px] not-italic font-bold mb-2 font-gemunu"
            >
              <AnimatedHeading text="Our History" />
            </Typography>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="first-paragraph"
            >
              <motion.div variants={paragraphVariant} custom={0}>
                <Typography
                  as="p"
                  className="text-gray-300 font-roboto font-normal text-[18px]"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Typography>
              </motion.div>
            </motion.div>

            <br />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="second-paragraph"
            >
              <motion.div variants={paragraphVariant} custom={1}>
                <Typography
                  as="p"
                  className="text-gray-300 font-roboto font-normal text-[18px]"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Typography>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;
