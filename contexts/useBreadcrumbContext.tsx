'use client';

import { BreadcrumbContextType } from '@/types/types';
import { useContext, useState, createContext, ReactNode } from 'react';

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {
  const [lastSegment, setLastSegment] = useState<string>('');
  return (
    <BreadcrumbContext.Provider value={{ lastSegment, setLastSegment }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
export const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) throw new Error();
  return context;
};
