import { SocialLink, UserType } from '@/types/types';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

export const userCredentials: UserType[] = [
  {
    username: 'name1',
    password: 'qw',
    category: [],
    recipes: null,
    fullName: 'Buddhi Sandaruwan',
  },
  {
    username: 'username1',
    password: 'password1',
    category: [],
    recipes: null,
    fullName: 'Buddhi Sandaruwan',
  },
  {
    username: 'username2',
    password: 'password2',
    category: [],
    recipes: null,
    fullName: 'Buddhi Sandaruwan',
  },
  {
    username: 'name4',
    password: 'password4',
    category: [],
    recipes: null,
    fullName: 'Buddhi Sandaruwan',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: '/', icon: FaFacebook },
  { name: 'YouTube Music', href: '/', icon: SiYoutubemusic },
  { name: 'Instagram', href: '/', icon: FaInstagram },
  { name: 'Pinterest', href: '/', icon: FaPinterest },
];

export const nav_links = [
  { href: '/', label: 'Home' },
  { href: '/categories', label: 'Categories' },
  { href: '/recipes', label: 'Recipes' },
];
