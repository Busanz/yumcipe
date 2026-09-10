import Image from 'next/image';
import Navigation from './Navigation';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa6';
import { SiYoutubemusic } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col h-full items-center bg-[url('/footer-bg-img.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center w-full h-full bg-gray-800/80 z-100">
        <div className="w-70 h-36 relative mb-10">
          <Image
            src={'/logo-secondary.png'}
            alt="footer logo"
            fill
            className="object-contain"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
        <p className="text-text font-poiret text-2xl text-center px-25">
          A world of recipes, one kitchen at a time. Discover, cook, and share
          dishes from every corner of the globe.
        </p>

        <div className="flex justify-center w-full gap-10 pt-5">
          <Link href={'/'}>
            <FaFacebook
              size={40}
              className="text-text hover:text-primary transition-colors"
            />
          </Link>
          <Link href={'/'}>
            <SiYoutubemusic
              size={40}
              className="text-text hover:text-primary transition-colors"
            />
          </Link>
          <Link href={'/'}>
            <FaInstagram
              size={40}
              className="text-text hover:text-primary transition-colors"
            />
          </Link>
          <Link href={'/'}>
            <FaPinterest
              size={40}
              className="text-text hover:text-primary transition-colors"
            />
          </Link>
        </div>
        <p className="flex justify-center text-text/30 my-5 text-sm text-center mt-15">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
