import RecipeCard from '@/components/RecipeCard';
import { RecipeType } from '@/types/types';

const RecipiesPage = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  const strCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${strCategory}`,
  );

  if (!responce.ok) {
    throw new Error(`Failed to load data from ${category}`);
  }

  const data = await responce.json();
  const allRecipiesByCategory = data.meals ?? [];
  const firstTenRecepies: RecipeType[] =
    allRecipiesByCategory.slice(0, 8) ?? [];

  // const handleLoadMoreRecipies = () => {};

  return (
    <div className="flex flex-wrap py-15 px-25 justify-center gap-5">
      {firstTenRecepies &&
        firstTenRecepies.map((item) => (
          <RecipeCard key={item.idMeal} {...item} strCategory={strCategory} />
        ))}
    </div>
  );
};
export default RecipiesPage;
