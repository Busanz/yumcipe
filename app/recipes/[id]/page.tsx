import FullRecipeCard from '@/components/FullRecipeCard';
import SetBreadcrumbLabel from '@/components/SetBreadcrumbLabel';
import { fetchFullRecipe } from '@/utils/api/functions';

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const recipe = await fetchFullRecipe(id);

  return (
    <>
      <SetBreadcrumbLabel lastSegment={recipe.strMeal} />
      <FullRecipeCard recipe={recipe} />
    </>
  );
};

export default RecipePage;
