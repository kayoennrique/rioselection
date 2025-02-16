"use client";

import { Typography } from "dicria-ui";
import React, { useState, useRef, useEffect } from "react";
import { Container } from "../Container/Container";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const images: Image[] = [
    { id: 1, src: "/hero-image.png", alt: "Gallery image 1" },
    { id: 2, src: "/hero-image.png", alt: "Gallery image 2" },
    { id: 3, src: "/hero-image.png", alt: "Gallery image 3" },
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const distance = clientX - dragStart;
    setDragDistance(distance);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) {
        handlePrevImage();
      } else {
        handleNextImage();
      }
    }

    setDragDistance(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseUp = () => handleDragEnd();
    const handleMouseLeave = () => handleDragEnd();

    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, dragDistance]);

  return (
    <section id="gallery" className="bg-black text-white mb-8 w-full">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Typography
              as="h1"
              className="text-[52px] not-italic font-bold mb-2 font-gemunu"
            >
              Gallery
            </Typography>
            <Typography
              as="p"
              className="text-gray-300 font-roboto font-normal text-[18px] mb-8"
            >
              Check out our best moments in action!
            </Typography>

            <div className="flex justify-center items-center gap-4">
              {/* Left thumbnail */}
              <div
                className="w-1/4 cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setIsModalOpen(true);
                }}
              >
                <div className="border-2 border-cyan-400">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Center main image */}
              <div
                className="w-1/2 cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(1);
                  setIsModalOpen(true);
                }}
              >
                <div className="border-2 border-cyan-400">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right thumbnail */}
              <div
                className="w-1/4 cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(2);
                  setIsModalOpen(true);
                }}
              >
                <div className="border-2 border-cyan-400">
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#24C1F2] hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 text-[#24C1F2] hover:text-gray-300 transition-colors z-50"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <div
              className="max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
              style={{
                transform: `translateX(${dragDistance}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain select-none"
                draggable="false"
              />
            </div>

            {/* Next button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 text-[#24C1F2] hover:text-gray-300 transition-colors z-50"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
