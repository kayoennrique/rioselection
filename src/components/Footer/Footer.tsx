"use client";

import { FC } from "react";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { Link, Typography } from "dicria-ui";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-dye.svg"
              alt="Rio Selection Logo"
              className="object-contain"
              width={167}
              height={63}
            />
            <Image
              src="/logo-footer.png"
              alt="Duo Logo"
              className="object-contain"
              width={156}
              height={128}
            />
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/rioselectionpaintballteam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Contact Link"
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/Rio-Selection-Paintball-Team-101622614649015"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Contact Link"
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>

          <Typography
            as="p"
            className="text-sm text-gray-400 text-center font-roboto"
          >
            © 2025 All rights reserved by Rio Selection. Developed by
            <Link
              href="https://sparkmind.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the website developer company"
              className="text-[#24C1F2] hover:text-white transition-colors"
            >
              {""} SparkMind
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
