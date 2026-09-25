'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUserContext } from '@/contexts/userContext';
import { UserContextType } from '@/types/types';
import { useRouter, usePathname } from 'next/navigation';
import { nav_links } from '@/data/data';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

type NavigationProps = {
  isOnFooter?: boolean;
};

const Navigation = ({ isOnFooter = false }: NavigationProps) => {
  const { user, setUser } = useUserContext() as UserContextType;
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href);

  const handleLogOut = () => {
    setUser(null);
    setIsMobileMenu(false);
    router.push('/');
  };

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenu]);

  return (
    <header className={`${!user ? '' : 'sticky top-0'} w-full z-200`}>
      <nav
        aria-label="Menu bar"
        className={`relative flex ${isOnFooter ? 'bg-primary/97 text-gray-300 py-4 md:py-1 md:pl-4 md:pr-9 lg:px-25 font-light' : 'text-[#FFDE59] md:py-5 px-25 font-extralight'} text-lg lg:text-xl w-full ${user ? 'justify-between' : 'justify-center'} items-center`}
      >
        {!user ? (
          <div className="shrink-0">
            <Image
              src={`/logo-secondary.png`}
              alt="logo secondary of website"
              width={200}
              height={200}
              loading="eager"
              className={`h-22 w-auto`}
            />
          </div>
        ) : (
          <Link href={'/'} className="shrink-0">
            <Image
              src={`/logo-secondary.png`}
              alt="logo secondary of website"
              width={200}
              height={200}
              loading="eager"
              className={`h-12 md:h-16 w-auto pl-3 md:pl-0`}
            />
          </Link>
        )}

        {user && (
          <>
            <div
              className={`hidden md:flex w-full ${!isOnFooter ? 'justify-center' : 'justify-end'} items-center gap-5`}
            >
              {nav_links.map((link) => {
                return (
                  <Link
                    key={link.href}
                    className={`${isActive(link.href) ? 'text-link-active' : 'nav-links'} hover:text-link-active/70`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                className="bg-link-active/60 rounded-lg text-text hover:bg-link-active hover:text-black px-4 py-1 cursor-pointer"
                onClick={handleLogOut}
              >
                {user ? 'Log out' : <></>}
              </button>
            </div>
            <button
              type="button"
              className="md:hidden text-xl pr-5 font-extralight"
              onClick={() => setIsMobileMenu((prev) => !prev)}
              aria-label={isMobileMenu ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenu ? (
                <FiX size={48} strokeWidth={'0.75'} />
              ) : (
                <FiMenu size={48} strokeWidth={'0.75'} />
              )}
            </button>
          </>
        )}
      </nav>

      {user && isMobileMenu && (
        <div className="absolute md:hidden flex flex-col w-full h-100 items-center gap-4 bg-primary/90 text-gray-300 pt-20 text-xl">
          {nav_links.map((link) => (
            <Link
              key={link.href}
              className={`${isActive(link.href) ? 'text-link-active' : 'nav-links'} hover:text-link-active/70`}
              href={link.href}
              onClick={() => setIsMobileMenu(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="bg-link-active/60 rounded-lg text-text hover:bg-link-active hover:text-black px-4 py-1 cursor-pointer"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
