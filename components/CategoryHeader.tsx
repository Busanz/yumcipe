'use client';

import { useCategoryContext } from '@/contexts/categoryContext';
import { CategoryContextType } from '@/types/types';

type CategoryHeaderProps = {
  categorySelected: string;
};
const CategoryHeader = ({ categorySelected }: CategoryHeaderProps) => {
  const { categories } = useCategoryContext() as CategoryContextType;
  const selectedCategory = categories?.find(
    (item) =>
      item.strCategory.toLocaleLowerCase() ===
      categorySelected.toLocaleLowerCase(),
  );

  return (
    <div className="flex flex-col items-center pt-10 px-25">
      <h1 className="heading-1">{`Explore the recipes by ${categorySelected}`}</h1>
      <p className="section-dec w-full max-w-3xl">
        {selectedCategory?.strCategoryDescription}
      </p>
    </div>
  );
};

export default CategoryHeader;
