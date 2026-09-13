import FullRecipeCard from '@/components/FullRecipeCard';

const RecipePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);

  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
  );
  if (!responce.ok) {
    throw new Error(`Can not fine recipe id ${id}.`);
  }
  const data = await responce.json();
  const recipeById = data.meals[0];
  console.log(recipeById);
  return <FullRecipeCard recipe={recipeById} />;
};

export default RecipePage;
