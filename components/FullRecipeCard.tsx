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
const FALLBACK_ALT: string = 'recipe placeholder image';

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

  const ingrediantWithValue = Object.entries(recipe).filter(
    ([key, value]) =>
      key.includes('strIngredient') && value !== '' && value !== null,
  );

  const measureWithValue = Object.entries(recipe).filter(
    ([key, value]) =>
      key.includes('strMeasure') && value !== '' && value !== null,
  );
  return (
    <section className="px-2 sm:px-8">
      <div className="flex flex-col w-full max-w-3xl items-start pt-10 pb-15 px-5 bg-primary/20 my-8 rounded-xl">
        <div className="text-xl md:text-2xl font-light text-primary">
          {recipe?.strMeal}
        </div>
        {recipe?.strCountry && (
          <p className="pt-2 w-full text-base md:text-lg font-extralight">
            Country of origin : {recipe?.strCountry}
          </p>
        )}
        <div className="relative h-80 w-full mt-6 rounded-xl">
          <Image
            src={recipe.strMealThumb || FALLBACK_IMAGE}
            alt={`Image of ${recipe.strCategory}` || FALLBACK_ALT}
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
        <div className="pt-5 text-[1.1rem] md:text-lg font-light">
          {ingrediantWithValue.map((ingredient, index) => (
            <p key={index}>
              {ingredient[1]} - {measureWithValue[index][1]}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullRecipeCard;
