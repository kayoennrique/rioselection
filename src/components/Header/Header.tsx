"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";

// Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Components
import { Container } from "../Container/Container";
import Image from "next/image";
import { Button } from "dicria-ui";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (): void => {
    requestAnimationFrame(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const options: IntersectionObserverInit = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed w-full bg-[#040706] opacity-100 z-50 font-gemunu">
        <Container>
          <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4">
            <div className="flex items-center justify-center">
              <a href="#home">
                <Image
                  src="/logo.png"
                  alt="Logo by Rio Collection"
                  className="mb-2 max-w-[160px] max-h-[53px]"
                  loading="lazy"
                  width={160}
                  height={53}
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-[40px]">
              <a
                href="#about"
                onClick={handleMenuItemClick}
                className={`font-medium text-[28px] leading-4 transition-colors px-4 py-2 rounded-full ${
                  activeSection === "about"
                    ? " text-[#fff] border-2 border-[#24C1F2] shadow-md"
                    : "text-[#fff] bg-transparent hover:bg-[#24C1F2] hover:text-white"
                }`}
              >
                About
              </a>
              <a
                href="#gallery"
                onClick={handleMenuItemClick}
                className={`font-medium text-[28px] leading-4 transition-colors px-4 py-2 rounded-full ${
                  activeSection === "gallery"
                    ? " text-[#fff] border-2 border-[#24C1F2] shadow-md"
                    : "text-[#fff] bg-transparent hover:bg-[#24C1F2] hover:text-white"
                }`}
              >
                Gallery
              </a>
              <a
                href="#team"
                onClick={handleMenuItemClick}
                className={`font-medium text-[28px] leading-4 transition-colors px-4 py-2 rounded-full ${
                  activeSection === "team"
                    ? " text-[#fff] border-2 border-[#24C1F2] shadow-md"
                    : "text-[#fff] bg-transparent hover:bg-[#24C1F2] hover:text-white"
                }`}
              >
                Team
              </a>
              <a
                href="#contact"
                onClick={handleMenuItemClick}
                className={`font-medium text-[28px] leading-4 transition-colors px-4 py-2 rounded-full ${
                  activeSection === "contact"
                    ? " text-[#fff] border-2 border-[#24C1F2] shadow-md"
                    : "text-[#fff] bg-transparent hover:bg-[#24C1F2] hover:text-white"
                }`}
              >
                Contact
              </a>
            </nav>

            <div className="md:hidden">
              <Button
                className="text-white"
                onClick={toggleMenu}
                icon={
                  isOpen ? (
                    <AiOutlineClose size={24} />
                  ) : (
                    <AiOutlineMenu size={24} />
                  )
                }
                aria-label={isOpen ? "Close menu" : "Open menu"}
              />
            </div>
          </div>

          {/* Menu de navegação para mobile */}
          {isOpen && (
            <div ref={menuRef} className="md:hidden bg-transparent">
              <nav className="flex flex-col items-start justify-start space-y-4 p-6">
                <a
                  href="#about"
                  onClick={handleMenuItemClick}
                  className={`text-white hover:text-gray-600 text-lg ${
                    activeSection === "about" ? "text-white" : ""
                  }`}
                >
                  About
                </a>
                <a
                  href="#gallery"
                  onClick={handleMenuItemClick}
                  className={`text-white hover:text-gray-600 text-lg ${
                    activeSection === "about" ? "text-white" : ""
                  }`}
                >
                  Gallery
                </a>
                <a
                  href="#team"
                  onClick={handleMenuItemClick}
                  className={`text-white hover:text-gray-600 text-lg ${
                    activeSection === "about" ? "text-white" : ""
                  }`}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  onClick={handleMenuItemClick}
                  className={`text-white hover:text-gray-600 text-lg ${
                    activeSection === "contact" ? "text-white" : ""
                  }`}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </Container>
      </header>
    </>
  );
};

export default Header;
