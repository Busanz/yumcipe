import CategoryHeader from '@/components/CategoryHeader';
import RecipesList from '@/components/RecipesList';
import SetBreadcrumbLabel from '@/components/SetBreadcrumbLabel';
import { fetchRecipesByCategory } from '@/utils/api/functions';

const RecipesByCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const { category } = await params;
  const strCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const allRecipesByCategory = await fetchRecipesByCategory(strCategory);
  return (
    <>
      <SetBreadcrumbLabel lastSegment={strCategory} />
      <section>
        <CategoryHeader categorySelected={category} />
        <RecipesList recipes={allRecipesByCategory} strCategory={strCategory} />
      </section>
    </>
  );
};
export default RecipesByCategoryPage;
