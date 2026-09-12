'use client';

import CategoryCard from '@/components/CategoryCard';
import { useCategoryContext } from '@/contexts/categoryContext';
import { useUserContext } from '@/contexts/userContext';
import type { CategoryContextType, UserContextType } from '@/types/types';

const CategoriesPage = () => {
  const { user } = useUserContext() as UserContextType;
  const { categories } = useCategoryContext() as CategoryContextType;

  return (
    <div className="flex flex-wrap justify-center px-25 pt-15 pb-10 gap-5">
      {user &&
        categories! &&
        categories?.map((item) => (
          <CategoryCard key={item.idCategory} {...item} />
        ))}
    </div>
  );
};

export default CategoriesPage;
