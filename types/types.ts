import { IconType } from 'react-icons';

export type UserType = {
  username: string;
  password: string;
  category: string[];
  recipes: RecipeType[] | null;
  fullName: string;
};

export type RecipeType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export type FullRecipeType = RecipeType & {
  strCountry: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  ingredients: string[];
};

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type CategoryContextType = {
  categories: CategoryType[] | null;
  setCategories: (categories: CategoryType[] | null) => void;
};

export type BreadcrumbContextType = {
  lastSegment: string;
  setLastSegment: (lastSegment: string) => void;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
};
