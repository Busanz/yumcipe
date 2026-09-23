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
    <nav className="flex items-center gap-2 text-sm px-25 pt-5 bg-pink-300">
      <Link href={'/'}>Home</Link>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLastSegment = index === pathSegments.length - 1;

        const breadcrumbLable =
          isLastSegment && lastSegment ? lastSegment : segment;
        // .replace(/-/g, ' ')
        // .replace(/\b\w/g, (char) => char.toUpperCase());

        return (
          <div key={href}>
            <span className="text-gray-400">/</span>
            {isLastSegment ? (
              <span className="text-primary font-medium">
                {breadcrumbLable}
              </span>
            ) : (
              <Link href={href} className="text-gray-500 hover:text-primary">
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
