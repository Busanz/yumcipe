'use client';

import { CategoryType, CategoryContextType } from '@/types/types';
import { fetchCategories } from '@/utils/api/functions';
import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from 'react';

const CategoryContext = createContext<CategoryContextType | null>(null);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<CategoryType[] | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      setCategories(await fetchCategories());
    };

    loadCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  return context;
};
