'use client';

import { useEffect } from 'react';
import { useBreadcrumbContext } from '@/contexts/useBreadcrumbContext';
import Breadcrumb from './Breadcrumb';

const SetBreadcrumbLabel = ({ lastSegment }: { lastSegment: string }) => {
  const { setLastSegment } = useBreadcrumbContext();

  useEffect(() => {
    setLastSegment(lastSegment);
  }, [lastSegment, setLastSegment]);
  return <Breadcrumb />;
};

export default SetBreadcrumbLabel;
