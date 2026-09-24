'use client';

import Image from 'next/image';
import type {
  FullRecipeType,
  RecipeType,
  UserContextType,
} from '@/types/types';
import { useUserContext } from '@/contexts/userContext';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';

const FALLBACK_IMAGE = '/recipe-placeholder.png';

const FullRecipeCard = ({ recipe }: { recipe: FullRecipeType }) => {
  const { user, setUser } = useUserContext() as UserContextType;

  const isAdded: boolean = !!user?.recipes?.some(
    (item) => item.idMeal === recipe.idMeal,
  );

  const handleToggleRecipe = () => {
    if (!user) return;
    const currentRecipies: RecipeType[] = user?.recipes ?? [];
    const updatedRecipies = isAdded
      ? currentRecipies.filter((item) => item.idMeal !== recipe.idMeal)
      : [...currentRecipies, { ...recipe }];

    setUser({ ...user, recipes: updatedRecipies });
  };

  return (
    <section>
      <div className="flex flex-col w-full lg:min-w-2xl lg:max-w-2xl items-start pt-10 pb-15 px-5 bg-primary/20 my-8 rounded-xl">
        <div className="text-xl md:text-2xl font-light text-primary">
          {recipe?.strMeal}
        </div>
        <div className="relative h-80 w-full mt-6 rounded-xl">
          <Image
            src={recipe.strMealThumb || FALLBACK_IMAGE}
            alt={`Image of ${recipe.strCategory}`}
            fill
            className="object-contain object-left"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
        <div className="flex w-full justify-between py-4 items-center">
          <Link
            href={`/categories/${recipe.strCategory.toLowerCase()}`}
            className="text-primary text-left font-light text-lg text-wrap w-full mr-3"
          >
            {recipe.strCategory}
          </Link>
          <FiHeart
            size={30}
            strokeWidth={0.75}
            stroke="#02653a"
            fill={isAdded ? '#02653a' : '#02653a00'}
            onClick={handleToggleRecipe}
            className="cursor-pointer"
          />
        </div>
        {recipe.strInstructions && (
          <p className="pt-5 text-lg font-light">{recipe.strInstructions}</p>
        )}
      </div>
    </section>
  );
};

export default FullRecipeCard;
