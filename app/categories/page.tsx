'use client';

import CategoryCard from '@/components/CategoryCard';
import { useCategoryContext } from '@/contexts/categoryContext';
import { useUserContext } from '@/contexts/userContext';
import type { CategoryContextType, UserContextType } from '@/types/types';
import { useRef, useState } from 'react';

const VISIBLE_CATEGORY_COUNT: number = 8;
const VISIBLE_COUNT_INCREMENT: number = 4;

const CategoriesPage = () => {
  const { user } = useUserContext() as UserContextType;
  const { categories } = useCategoryContext() as CategoryContextType;
  const [visibleCount, setVisibleCount] = useState<number>(
    VISIBLE_CATEGORY_COUNT,
  );
  console.log(categories);
  const refSection = useRef<HTMLElement>(null);

  const totalLenth = categories?.length ?? 0;
  const visibleCategories = categories?.slice(0, visibleCount);
  const isAll = visibleCount >= totalLenth;

  const handleClick = () => {
    if (isAll) {
      setVisibleCount(VISIBLE_CATEGORY_COUNT);
      refSection.current?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      return;
    }
    const remaining = totalLenth - visibleCount;
    const increment =
      remaining < VISIBLE_COUNT_INCREMENT ? remaining : VISIBLE_COUNT_INCREMENT;

    setVisibleCount((prev) => prev + increment);
  };

  return (
    <section
      ref={refSection}
      className="flex flex-col pt-8 lg:pt-10 px-5 lg:px-25 pb-15"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading-1">Discover by Categories</h1>
        <p className="section-dec">
          Explore recipes by category and save your favorites to build a
          personalized collection.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 mx-2">
        {user &&
          categories! &&
          visibleCategories?.map((item) => (
            <CategoryCard key={item.idCategory} {...item} />
          ))}
      </div>

      {user && totalLenth > VISIBLE_COUNT_INCREMENT && (
        <div className="flex w-full justify-center pt-10">
          <button
            className="border border-primary px-15 py-3 rounded-xl text-primary cursor-pointer"
            onClick={handleClick}
          >
            {!isAll ? 'Show more' : 'Show less'}
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoriesPage;
