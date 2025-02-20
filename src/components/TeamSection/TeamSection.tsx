"use client";

import { Typography } from "dicria-ui";
import Image from "next/image";
import React, { useState, TouchEvent, useEffect, useRef } from "react";
import { Container } from "../Container/Container";
import { TeamMember } from "./interfaces";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "MACHADO",
      imageUrl: "/player-machado.jpg",
    },
    {
      id: 2,
      name: "BATATA",
      imageUrl: "/member.png",
    },
    {
      id: 3,
      name: "BOLA",
      imageUrl: "/player-eduardo.jpg",
    },
    {
      id: 4,
      name: "LEO",
      imageUrl: "/machado.jpg",
    },
    {
      id: 5,
      name: "KLEBER",
      imageUrl: "/jj.jpg",
    },
    {
      id: 6,
      name: "BRUNO",
      imageUrl: "/patrick.jpg",
    },
    {
      id: 7,
      name: "PATRICK",
      imageUrl: "/player-patrick.jpg",
    },
  ];

  useEffect(() => {
    const currentRef = sectionRef.current; // Armazenando a referência atual

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // Usando a referência armazenada
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < teamMembers.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="team"
      className={`bg-black text-white mb-8 w-full scroll-mt-20 transition-opacity duration-1000 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Container>
        <div className="hidden md:block max-w-6xl mx-auto">
          <div
            className={`text-center mb-8 transition-transform duration-700 delay-300
            ${isVisible ? "translate-y-0" : "translate-y-10"}`}
          >
            <Typography
              as="h1"
              className="text-[52px] not-italic font-bold mb-2 font-gemunu"
            >
              Our Team
            </Typography>
            <Typography
              as="p"
              className="text-gray-400 font-roboto font-normal text-[18px]"
            >
              Meet the players who make Rio Selection an unbeatable team!
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`relative group transition-all duration-700 hover:scale-105
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-[#24C1F2] p-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={`Team member ${member.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={350}
                      height={466}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
                  </div>
                  <div className="bg-[#24C1F2] h-12 flex items-center justify-center mt-2">
                    <Typography
                      as="span"
                      className="text-black font-bold text-[28px] not-italic font-gemunu"
                    >
                      {member.name}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className={`md:hidden max-w-md mx-auto px-4 transition-transform duration-700
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="text-center mb-6">
            <Typography
              as="h1"
              className="text-[52px] not-italic font-bold mb-2 font-gemunu"
            >
              Our Team
            </Typography>
            <Typography
              as="p"
              size="18px"
              className="text-gray-400 text-[18px] font-roboto font-normal text-sm px-8"
            >
              Meet the players who make Rio Selection an unbeatable team!
            </Typography>
          </div>

          <div
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative bg-[#24C1F2] p-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={teamMembers[currentSlide].imageUrl}
                  alt={`Team member ${teamMembers[currentSlide].name}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  width={350}
                  height={466}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
              </div>
              <div className="bg-[#24C1F2] h-12 flex items-center justify-center mt-2">
                <Typography
                  as="span"
                  className="text-black font-bold text-[28px] not-italic font-gemunu"
                >
                  {teamMembers[currentSlide].name}
                </Typography>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#24C1F2]" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
