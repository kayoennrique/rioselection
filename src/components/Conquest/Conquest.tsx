"use client";

import React from "react";
import { Container } from "../Container/Container";
import Image from "next/image";
import { Typography } from "dicria-ui";
import { motion } from "framer-motion";
import { achievementVariant, fadeIn, imageVariant } from "./animations";

const achievements = [
  { title: "Carioca Champion 2020 D5", emoji: "🥇" },
  { title: "Brazilian 2020 D5", emoji: "🥈" },
  { title: "Carioca Champion 2021 D4", emoji: "🥇" },
  { title: "Brazilian 2021 D5", emoji: "🥈" },
  { title: "Brazilian 2022 D5", emoji: "🥉" },
  { title: "Brazilian 2022 D4", emoji: "🥉" },
];

const AchievementsSection = () => {
  return (
    <Container>
      <section className="bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto md:px-8 px-4">
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                key="desktop-text-section"
              >
                <motion.div custom={0} variants={fadeIn}>
                  <Typography
                    as="h1"
                    className="text-[52px] font-bold text-white font-gemunu text-left"
                  >
                    Passion. Strategy. Victory.
                  </Typography>
                </motion.div>
                <motion.div custom={1} variants={fadeIn}>
                  <Typography
                    as="p"
                    className="text-gray-300 text-lg text-left"
                  >
                    <strong>Rio Selection</strong> is a team built on
                    discipline, skill, and camaraderie. With a relentless drive
                    to win, we train hard, compete fiercely, and always support
                    each other—on and off the field.
                  </Typography>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                variants={imageVariant}
                key="desktop-first-image"
              >
                <Image
                  src="/rectangle.png"
                  alt="Team photo with banners"
                  className="object-cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
              <motion.div
                className="rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                variants={imageVariant}
                key="desktop-second-image"
              >
                <Image
                  src="/rectangle2.png"
                  alt="Trophy collection"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="flex flex-col justify-start space-y-4 pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px" }}
                key="desktop-achievements-list"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-xl"
                    custom={index}
                    variants={achievementVariant}
                  >
                    <Typography as="span" className="text-2xl">
                      {achievement.emoji}
                    </Typography>
                    <Typography as="span" className="text-white">
                      {achievement.title}
                    </Typography>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col space-y-4">
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="mobile-text-section"
            >
              <motion.div variants={fadeIn} custom={0}>
                <Typography
                  as="h2"
                  className="text-[52px] font-bold text-white font-gemunu text-center"
                >
                  We are Selection
                </Typography>
              </motion.div>
              <motion.div variants={fadeIn} custom={1}>
                <Typography
                  as="p"
                  className="text-gray-300 text-sm text-center font-roboto"
                >
                  We are a team passionate about paintball. Our focus is
                  strategy, speed and teamwork to dominate the field.
                </Typography>
              </motion.div>
            </motion.div>

            {/* First Image */}
            <motion.div
              className="rounded-lg overflow-hidden border-2 border-cyan-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              variants={imageVariant}
              key="mobile-first-image"
            >
              <Image
                src="/rectangle.png"
                alt="Team photo with banners"
                width={538}
                height={345}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                loading="lazy"
              />
            </motion.div>

            {/* Achievements List */}
            <motion.div
              className="flex flex-col space-y-2 font-roboto"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              key="mobile-achievements-list"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  custom={index}
                  variants={achievementVariant}
                >
                  <Typography as="span" className="text-base">
                    {achievement.emoji}
                  </Typography>
                  <Typography as="span" className="text-white text-sm">
                    {achievement.title}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="rounded-lg overflow-hidden border-2 border-cyan-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px" }}
              variants={imageVariant}
              key="mobile-second-image"
            >
              <Image
                src="/rectangle2.png"
                alt="Trophy collection"
                width={538}
                height={345}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AchievementsSection;
