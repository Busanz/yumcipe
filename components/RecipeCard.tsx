'use client';

import type { RecipeType, UserContextType } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import { useUserContext } from '@/contexts/userContext';

const FALLBACK_IMAGE = '/recipe-placeholder.png';

const RecipeCard = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
}: RecipeType) => {
  const { user, setUser } = useUserContext() as UserContextType;
  const isAdded: boolean = !!user?.recipes?.some(
    (item) => item.idMeal === idMeal,
  );

  const handleToggleRecipe = () => {
    if (!user) return;
    const currentRecipes: RecipeType[] = user?.recipes ?? [];
    const updatedRecipes = isAdded
      ? currentRecipes.filter((item) => item.idMeal !== idMeal)
      : [...currentRecipes, { idMeal, strMeal, strMealThumb, strCategory }];

    setUser({ ...user, recipes: updatedRecipes });
  };

  return (
    <div className="flex flex-col w-full max-w-80 rounded-xl bg-primary/10 ">
      <Link href={`/recipes/${idMeal}`}>
        <div className="relative h-80 w-full ">
          <Image
            src={strMealThumb || FALLBACK_IMAGE}
            alt={`Image of ${strCategory}`}
            fill
            className="object-contain rounded-t-xl"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
      </Link>
      <div className="flex justify-between py-4 px-4 items-center">
        <h2 className="text-primary text-left font-light text-lg text-wrap w-full mr-3">
          {strMeal}
        </h2>
        <FiHeart
          size={30}
          strokeWidth={0.75}
          stroke="#02653a"
          fill={isAdded ? '#02653a' : '#02653a00'}
          onClick={handleToggleRecipe}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
