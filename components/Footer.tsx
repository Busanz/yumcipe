import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '@/data/data';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[url('/footer-bg-img.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center w-full bg-gray-800/80 z-100">
        <div className="w-38 md:w-50 lg:w-70 h-30 lg:h-36 relative mb-1 md:mb-10">
          <Image
            src={'/logo-secondary.png'}
            alt="footer logo"
            fill
            className="object-contain"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
        <p className="text-text font-poiret text-xl md:text-2xl text-center px-5 lg:px-25 mb-2">
          A world of recipes, one kitchen at a time. Discover, cook, and share
          dishes from every corner of the globe.
        </p>

        <div className="flex flex-wrap justify-center w-full gap-10 pt-5">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} aria-label={name}>
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-text hover:text-link-active transition-colors" />
            </Link>
          ))}
        </div>
        <p className="flex justify-center text-text/30 my-5 text-sm text-center mt-15">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
