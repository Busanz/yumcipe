'use client';

import { useUserContext } from '@/contexts/userContext';
import { ReactNode, useEffect } from 'react';
import { UserContextType } from '@/types/types';
import Slogan from './Slogan';
import Login from './Login';

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType;

  useEffect(() => {
    if (user) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [user]);

  return (
    <>
      {user! ? (
        <section className="flex flex-col w-full px-5 md:px-10 lg:px-25 xl:px-35 pt-8 md:pt-10 justify-center">
          <Slogan />
        </section>
      ) : (
        <section className="flex flex-col w-full max-w-5xl items-center md:justify-center gap-5 py-10 px-2 sm:px-5 2xl:px-25">
          <div>
            <h1 className="heading-1">Every recipe tells a story.</h1>
          </div>
          <div className="flex p-2 justify-evenly w-full gap-2 rounded-xl bg-primary/10">
            {children}
          </div>
          <div>
            <p className="text-center font-poiret text-primary text-xl md:text-2xl px-3">
              Rasavattōru collects them from every corner of the earth. Login
              for more recipes.
            </p>
          </div>
          <div className="flex w-full items-center">
            <Login />
          </div>
        </section>
      )}
    </>
  );
};

export default HeaderWrapper;
