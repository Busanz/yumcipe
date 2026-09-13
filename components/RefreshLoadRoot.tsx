'use client';

import { useUserContext } from '@/contexts/userContext';
import { UserContextType } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RefreshLoadRoot = () => {
  const { user } = useUserContext() as UserContextType;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && pathname !== '/') {
      router.push('/');
    }
  }, [user, pathname, router]);

  return null;
};

export default RefreshLoadRoot;
