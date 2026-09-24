'use client';

import { useUserContext } from '@/contexts/userContext';
import {
  CategoryContextType,
  CategoryType,
  RecipeType,
  UserContextType,
} from '@/types/types';
import Link from 'next/link';

import CategoryCard from './CategoryCard';
import { useCategoryContext } from '@/contexts/categoryContext';
import RecipeCard from './RecipeCard';

const UserFeeds = () => {
  const { user } = useUserContext() as UserContextType;
  const { categories } = useCategoryContext() as CategoryContextType;

  const categoriesFav: CategoryType[] = (categories ?? []).filter((item) =>
    user?.category?.includes(item.strCategory),
  );

  const recipesFav: RecipeType[] = user?.recipes ?? [];

  return (
    <div className="flex flex-col w-full items-center">
      {user && (
        <>
          <h1 className="text-center font-poiret text-primary text-xl md:text-[1.3rem] lg:text-2xl font-extrabold pt-5">
            {user.fullName} welcome to Rasavattōru...!
          </h1>
          <h2 className="text-center font-poiret text-secondary text-xl md:text-[1.3rem] lg:text-2xl font-extrabold py-5 underline underline-offset-4">
            Your favorite categories
          </h2>
          <div className="flex flex-row flex-wrap grow items-center justify-center w-full h-fit gap-5 text-lg">
            {user! && user.category! && user?.category.length > 0 ? (
              categoriesFav?.map((item) => (
                <CategoryCard key={item.idCategory} {...item} />
              ))
            ) : (
              <Link href={'/categories'} className="button-primary text-center">
                Selecet favorite categories
              </Link>
            )}
          </div>
          <h2 className="text-center font-poiret text-secondary text-xl md:text-[1.3rem] lg:text-2xl font-extrabold pt-10 pb-6 underline underline-offset-4">
            Your favorite recipes
          </h2>

          <div className="flex flex-row flex-wrap grow justify-center w-full h-fit gap-5 text-lg pb-10">
            {recipesFav.length > 0 ? (
              recipesFav.map((item) => (
                <RecipeCard key={item.idMeal} {...item} />
              ))
            ) : (
              <Link href={'/categories'} className="button-primary text-center">
                Selecet favorite categories
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserFeeds;
