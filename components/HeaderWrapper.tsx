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
        <div className="flex flex-col w-full px-25 pt-10">
          <Slogan />
        </div>
      ) : (
        <div className="flex w-full px-25 py-10 gap-10 my-1">
          <div className="grid grid-flow-col grid-rows-2 gap-2 place-items-center flex-1">
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
