'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUserContext } from '@/contexts/userContext';
import { UserContextType } from '@/types/types';

type NavigationProps = {
  isOnFooter?: boolean;
};

const Navigation = ({ isOnFooter = false }: NavigationProps) => {
  const { user } = useUserContext() as UserContextType;
  return (
    <nav
      className={`flex ${isOnFooter ? 'bg-primary/80 text-gray-300 py-1 px-25 font-light' : 'text-[#FFDE59] py-5 px-25 font-extralight'}  text-xl w-full gap-5 ${user ? 'justify-between' : 'justify-center'} items-center`}
    >
      {!user ? (
        <Link href={'/'} className="shrink-0">
          <Image
            src={`/logo-secondary.png`}
            alt="logo secondary of website"
            width={200}
            height={200}
            loading="eager"
            className="h-20 w-auto"
          />
        </Link>
      ) : (
        <Link href={'/'} className="shrink-0">
          <Image
            src={`/logo-secondary.png`}
            alt="logo secondary of website"
            width={200}
            height={200}
            loading="eager"
            className="h-18 w-auto"
          />
        </Link>
      )}

      {user && (
        <div
          className={`flex w-full ${!isOnFooter ? 'justify-center' : 'justify-end'} gap-5`}
        >
          <Link href={'/'}>Home</Link>
          <Link href={'/categories'}>Categories</Link>
          <Link href={'/recipes'}>Recipes</Link>
          <Link href={'/userprofile'}>User profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
