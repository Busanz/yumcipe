import { useUserContext } from '@/contexts/userContext';
import type { CategoryType, UserContextType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

const FALLBACK_IMAGE = '/recipe-placeholder.png';

const CategoryCard = ({ strCategory, strCategoryThumb }: CategoryType) => {
  const { user, setUser } = useUserContext() as UserContextType;
  const isAdded: boolean = !!user?.category?.includes(strCategory);

  const handleAddCategory = () => {
    if (!user) return;
    const currentCategories = user.category ?? [];
    const updatedCategories = isAdded
      ? currentCategories.filter((item) => item !== strCategory)
      : [...currentCategories, strCategory];

    setUser({
      ...user,
      category: updatedCategories,
    });
  };

  return (
    <div className="flex flex-col w-full max-w-40 sm:max-w-60 md:max-w-70 lg:max-w-80 bg-primary/10 rounded-xl">
      <Link href={`categories/${strCategory.toLowerCase()}`}>
        <div className="relative h-55 sm:h-60 md:h-70 lg:h-80 w-full">
          <Image
            src={strCategoryThumb || FALLBACK_IMAGE}
            alt={`Image of ${strCategory}`}
            fill
            className="object-contain "
            loading="eager"
            sizes="(max-width: 300px) 100vw, 75vw"
          />
        </div>
      </Link>
      <div className="flex py-4 px-8 justify-between items-center">
        <h2 className="text-primary text-center font-light text-lg">
          {strCategory}
        </h2>
        <FiHeart
          size={30}
          strokeWidth={0.75}
          stroke="#02653a"
          fill={isAdded ? '#02653a' : '#02653a00'}
          onClick={handleAddCategory}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
