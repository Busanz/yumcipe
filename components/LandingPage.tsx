import Image from 'next/image';
import { getFeaturedRecipes } from '@/utils/api/functions';

const FALLBACK_IMAGE: string = '/recipe-placeholder.png';
const FALLBACK_ALT: string = 'recipe placeholder image';

const LandingPage = async () => {
  const recipes = await getFeaturedRecipes(2);
  return (
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="relative flex aspect-square w-full max-w-70 overflow-hidden bg-primary rounded-xl"
        >
          <Image
            src={recipe.strMealThumb || FALLBACK_IMAGE}
            alt={recipe.strMeal || FALLBACK_ALT}
            loading="eager"
            fill
            sizes="(max-width: 540px) 50vw, 25vw"
            className="rounded-xl object-contain"
          />
        </div>
      ))}
    </>
  );
};
export default LandingPage;
