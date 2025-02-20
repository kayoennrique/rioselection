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
              <motion.div
                variants={paragraphVariant}
                className="w-full max-w-[860px] mx-auto text-center px-4 md:px-6"
                custom={0}
              >
                <Typography
                  as="p"
                  className="text-gray-300 font-roboto leading-8 font-normal text-base sm:text-lg"
                >
                  Today, we have two official teams, one based in the United
                  States and the other in Brazil. Since 2014, we&apos;ve
                  experienced remarkable growth, earning multiple titles and
                  continuously expanding our influence in the sport. Our
                  dedication and commitment have led us to compete in the
                  Paintball World Cup more than seven times, an achievement that
                  few teams can claim. Beyond our success on the field, we are
                  deeply committed to the development of paintball as a sport.
                  We strive to inspire new players, share our knowledge, and
                  contribute to the growth of the paintball community—both in
                  Brazil and internationally. Every season, we challenge
                  ourselves to reach new heights, always pushing the limits of
                  what&apos;s possible for Rio Selection. Our legacy is built on
                  passion, resilience, and an unwavering commitment to
                  excellence. We know the journey is far from over, and
                  we&apos;re ready for whatever challenges lie ahead.
                </Typography>
              </motion.div>
            </motion.div>

            <div className="my-6"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="first-paragraph"
            >
              <motion.div
                variants={paragraphVariant}
                className="w-full max-w-[860px] mx-auto text-center px-4 md:px-6"
                custom={0}
              >
                <Typography
                  as="p"
                  className="text-gray-300 font-roboto leading-8 font-normal text-base sm:text-lg"
                >
                  Our journey in competitive paintball began in 2014, when we
                  first had the opportunity to play in the United States. Back
                  then, we didn&apos;t have an official name or a fully
                  structured team. That&apos;s when Rio Selection was born—a
                  group of passionate players coming together simply for the
                  love of the sport, with no major competitive ambitions at
                  first. As time went on, our team grew stronger, gaining
                  experience and competing in increasingly prestigious
                  tournaments. One of the most pivotal moments in our history
                  was participating in the World Cup, the most renowned
                  paintball championship in the world. This competition not only
                  helped solidify our presence in the U.S. but also strengthened
                  our reputation in Brazil, making Rio Selection a recognized
                  name in the paintball community.
                </Typography>
              </motion.div>
            </motion.div>

            <div className="my-6"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="second-paragraph"
            >
              <motion.div
                variants={paragraphVariant}
                className="w-full max-w-[860px] text-center mx-auto px-4 md:px-6"
                custom={1}
              >
                <Typography
                  as="p"
                  className="text-gray-300 font-roboto leading-8 font-normal text-base sm:text-lg"
                >
                  Today, we have two official teams, one based in the United
                  States and the other in Brazil. Since 2014, we&apos;ve
                  experienced remarkable growth, earning multiple titles and
                  continuously expanding our influence in the sport. Our
                  dedication and commitment have led us to compete in the
                  Paintball World Cup more than seven times, an achievement that
                  few teams can claim. Beyond our success on the field, we are
                  deeply committed to the development of paintball as a sport.
                  We strive to inspire new players, share our knowledge, and
                  contribute to the growth of the paintball community—both in
                  Brazil and internationally. Every season, we challenge
                  ourselves to reach new heights, always pushing the limits of
                  what&apos;s possible for Rio Selection. Our legacy is built on
                  passion, resilience, and an unwavering commitment to
                  excellence. We know the journey is far from over, and
                  we&apos;re ready for whatever challenges lie ahead.
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
