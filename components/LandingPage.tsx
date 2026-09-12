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
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="relative w-full max-w-90 aspect-square"
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
  );
};
export default LandingPage;
