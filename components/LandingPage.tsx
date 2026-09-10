import type { ReceipeType } from '@/types/types';
import Image from 'next/image';

const MAX_ATTEMPTS: number = 15;

const fetchRandomMealByLetter = async (index: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php?v=${index}`,
  );
  const data = await response.json();
  const recipeByLetter: ReceipeType = data.meals ? data.meals[0] : null;
  return recipeByLetter && recipeByLetter.strMealThumb ? recipeByLetter : null;
};

const LandingPage = async () => {
  let recipes: ReceipeType[] | null = [];
  let attempts: number = 0;

  while (recipes.length < 4 && attempts < MAX_ATTEMPTS) {
    const recipe = await fetchRandomMealByLetter(String(attempts));
    attempts++;
    if (recipe && !recipes.some((item) => item.idMeal === recipe.idMeal)) {
      recipes = [...recipes, recipe];
    }
  }

  return (
    // <div className="flex w-full h-full px-25 py-10 gap-10 my-1">
    // <div className="grid grid-flow-col grid-rows-2 gap-2 place-items-center flex-1">
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="relative w-full h-full max-w-90 aspect-square"
        >
          <Image
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            loading="eager"
            fill
            className="object-contain object-left rounded-xl"
            sizes="(max-width: 540px) 50vw, 25vw"
          />
        </div>
      ))}
    </>
    // </div>
  );
};
export default LandingPage;
