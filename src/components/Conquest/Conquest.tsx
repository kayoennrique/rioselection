import React from "react";
import { Container } from "../Container/Container";
import Image from "next/image";

const achievements = [
  { title: "Carioca Champion 2020 D5", emoji: "🏆" },
  { title: "Brazilian 2020 D5", emoji: "🏆" },
  { title: "Carioca Champion 2021 D4", emoji: "🏆" },
  { title: "Brazilian 2021 D5", emoji: "🏆" },
  { title: "Brazilian 2022 D5", emoji: "🏆" },
  { title: "Brazilian 2022 D4", emoji: "🏆" },
];

const AchievementsSection = () => {
  return (
    <Container>
      <section className="bg-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto md:px-8 px-4">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Left Content */}
              <div className="space-y-4">
                <h2 className="text-[52px] font-bold text-white font-gemunu text-left">
                  We are Selection
                </h2>
                <p className="text-gray-300 text-lg text-left">
                  We are a team passionate about paintball. Our focus is
                  strategy, speed and teamwork to dominate the field.
                </p>
                <p className="text-gray-300 text-lg text-left">
                  Podemos acrescentar melhor a história da LYE aqui para ser
                  mais completa.
                </p>
              </div>

              {/* Right Image */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/rectangle.png"
                  alt="Team photo with banners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 items-start">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/rectangle2.png"
                  alt="Trophy collection"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-start space-y-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-xl"
                  >
                    <span className="text-2xl">{achievement.emoji}</span>
                    <span className="text-white">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col space-y-4">
            <div className="space-y-3">
              <h2 className="text-[52px] font-bold text-white font-gemunu text-center">
                We are Selection
              </h2>
              <p className="text-gray-300 text-sm text-center font-roboto">
                We are a team passionate about paintball. Our focus is strategy,
                speed and teamwork to dominate the field.
              </p>
              <p className="text-gray-300 text-sm text-center font-roboto">
                Podemos acrescentar melhor a história da LYE aqui para ser mais
                completa.
              </p>
            </div>

            {/* First Image */}
            <div className="rounded-lg overflow-hidden border-2 border-cyan-400">
              <Image
                src="/rectangle.png"
                alt="Team photo with banners"
                className="w-full h-full object-cover"
                width={538}
                height={345}
                loading="lazy"
              />
            </div>

            {/* Achievements List */}
            <div className="flex flex-col space-y-2 font-roboto">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-base">{achievement.emoji}</span>
                  <span className="text-white text-sm">
                    {achievement.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Image */}
            <div className="rounded-lg overflow-hidden border-2 border-cyan-400">
              <Image
                src="/rectangle2.png"
                alt="Trophy collection"
                className="w-full h-full object-cover"
                width={538}
                height={345}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AchievementsSection;
