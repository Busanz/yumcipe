export type UserType = {
  username: string;
  password: string;
  category: string[];
  receip: ReceipeType[] | null;
  fullName: string;
};

export type ReceipeType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
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
