'use client';

import { RecipeType } from '@/types/types';
import RecipeCard from '@/components/RecipeCard';
import { useState } from 'react';

const INITIAL_COUNT = 8;
const INCREMENT = 4;

type RecipesListProps = {
  recipes: RecipeType[];
  strCategory: string;
};

const RecipesList = ({ recipes, strCategory }: RecipesListProps) => {
  const [visibleRecipes, setVisibleRecipes] = useState<number>(INITIAL_COUNT);

  const totalRecipesListLength = recipes.length;
  const firstTenRecepes: RecipeType[] = recipes.slice(0, visibleRecipes) ?? [];
  const remainingRecipesListLenght = totalRecipesListLength - visibleRecipes;
  const isAllRecipes = visibleRecipes >= totalRecipesListLength;

  const handleClick = () => {
    if (isAllRecipes) {
      setVisibleRecipes(INITIAL_COUNT);
      return;
    }
    const increment =
      remainingRecipesListLenght < INCREMENT
        ? remainingRecipesListLenght
        : INCREMENT;

    setVisibleRecipes((prev) => prev + increment);
  };

  return (
    <>
      <div
        className={`flex flex-wrap lg:px-25 justify-center gap-5 w-full ${isAllRecipes ? 'pb-15' : ''}`}
      >
        {firstTenRecepes &&
          firstTenRecepes.map((item) => (
            <RecipeCard key={item.idMeal} {...item} strCategory={strCategory} />
          ))}
      </div>
      {totalRecipesListLength > INITIAL_COUNT && (
        <div className="flex w-full justify-center pt-10 pb-15">
          <button
            className="border border-primary px-15 py-3 rounded-xl text-primary text-lg cursor-pointer"
            onClick={handleClick}
          >
            {!isAllRecipes ? (
              <>
                See more{' '}
                <span className="text-sm">
                  ({remainingRecipesListLenght} / {totalRecipesListLength})
                </span>
              </>
            ) : (
              'See less'
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default RecipesList;
