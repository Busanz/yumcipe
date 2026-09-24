'use client';

import { useUserContext } from '@/contexts/userContext';
import { ReactNode } from 'react';
import { UserContextType } from '@/types/types';
import Slogan from './Slogan';
import Login from './Login';

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType;
  return (
    <>
      {user! ? (
        <div className="flex flex-col w-full px-5 md:px-10 lg:px-25 pt-8 md:pt-10">
          <Slogan />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row w-full px-4 md:px-25 py-10 gap-10 my-1">
          <div className="grid grid-flow-col grid-rows-2 gap-5 flex-1 place-items-center">
            {children}
          </div>
          <div className="flex w-full flex-1">
            <Login />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderWrapper;
