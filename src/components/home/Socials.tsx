"use client";

import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    path: "https://br.linkedin.com",
    name: "/socials/linkedin.svg",  
  },
  {
    path: "https://www.facebook.com",
    name: "/socials/facebook.svg",  
  },
  {
    path: "https://www.instagram.com",
    name: "/socials/instagram.svg",  
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>
              <Image src={icon.name} alt={`${icon.path} icon`} width={24} height={24} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
