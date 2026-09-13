'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useUserContext } from '@/contexts/userContext';
import { UserContextType } from '@/types/types';
import { useRouter } from 'next/navigation';

type NavigationProps = {
  isOnFooter?: boolean;
};

const Navigation = ({ isOnFooter = false }: NavigationProps) => {
  const { user, setUser } = useUserContext() as UserContextType;
  const router = useRouter();
  const handleLogOut = () => {
    setUser(null);
    router.push('/');
  };
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
          className={`flex w-full ${!isOnFooter ? 'justify-center' : 'justify-end'} items-center gap-5`}
        >
          <Link className="nav-links" href={'/'}>
            Home
          </Link>
          <Link className="nav-links" href={'/categories'}>
            Categories
          </Link>
          <Link className="nav-links" href={'/recipes'}>
            Recipe
          </Link>
          <button
            className="bg-text/80 rounded-lg text-gray-700 px-4 py-1 cursor-pointer"
            onClick={handleLogOut}
          >
            {user ? 'Log out' : ''}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
