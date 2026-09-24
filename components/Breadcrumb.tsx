'use client';
import { useBreadcrumbContext } from '@/contexts/useBreadcrumbContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  const { lastSegment } = useBreadcrumbContext();
  const pathSegments = pathname.split('/').filter(Boolean).slice(0, 2);

  console.log(pathSegments);
  if (pathSegments.length === 0) return;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex w-full items-start gap-2 text-sm px-5 md:px-10 lg:px-25 pt-5"
    >
      <Link href={'/'} className=" hover:text-secondary">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLastSegment = index === pathSegments.length - 1;

        const breadcrumbLable =
          isLastSegment && lastSegment ? lastSegment : segment;

        return (
          <div key={href}>
            <span className="text-gray-400">/</span>
            {isLastSegment ? (
              <span className="text-primary/50 font-medium underline underline-offset-3">
                {breadcrumbLable}
              </span>
            ) : (
              <Link href={href} className="text-primary hover:text-secondary">
                {breadcrumbLable}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
