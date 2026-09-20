import FullRecipeCard from '@/components/FullRecipeCard';
import { fetchFullRecipe } from '@/utils/api/functions';

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const recipe = await fetchFullRecipe(id);
  return <FullRecipeCard recipe={recipe} />;
};

export default RecipePage;
