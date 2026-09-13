import Image from 'next/image';
import type { FullReceipeType } from '@/types/types';

const FullRecipeCard = ({ recipe }: { recipe: FullReceipeType }) => {
  console.log(recipe);
  return (
    <>
      <div className="flex flex-col w-full max-w-2xl items-start py-8 px-5 bg-primary/20 my-8">
        <div className="text-xl md:text-2xl font-light text-primary">
          {recipe?.strMeal}
        </div>
        <div className="relative h-80 w-full bg-pink-200 mt-6">
          <Image
            src={recipe.strMealThumb}
            alt={`Image of ${recipe.strCategory}`}
            fill
            className="object-contain object-left rounded-xl"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
        {recipe.strInstructions && (
          <p className="pt-5 text-lg font-light">{recipe.strInstructions}</p>
        )}
      </div>
    </>
  );
};

export default FullRecipeCard;
