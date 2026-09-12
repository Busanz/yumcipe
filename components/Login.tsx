'use client';

import { useUserContext } from '@/contexts/userContext';
import { userCredentials } from '@/data/data';
import { UserContextType } from '@/types/types';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';

const Login = () => {
  const { setUser } = useUserContext() as UserContextType;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const logInUser = userCredentials.find(
      (item) => item.username === username && item.password === password,
    );
    if (logInUser) setUser(logInUser);
  };

  return (
    <form className="relative flex flex-col w-full items-center justify-center bg-[url('/login-bg-img.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
      <div className="flex flex-col w-full max-w-[80%] max-h-[90%] my-10 bg-primary/50 rounded-2xl px-15 pt-2">
        <div className="flex justify-center shrink-0 z-300 mt-12 mb-8">
          <Image
            src={`/logo-secondary.png`}
            alt="logo secondary of website"
            width={300}
            height={200}
            loading="eager"
            className="h-20 w-auto"
          />
        </div>
        <label htmlFor="username" className="text-xl text-white font-light">
          Enter username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
          className="bg-white rounded-md h-12 mt-3 px-5 py-2 text-xl font-light"
        />
        <label
          htmlFor="password"
          className="text-xl text-white font-light mt-5"
        >
          Enter password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
          className="bg-white rounded-md h-12 px-5 py-2 mt-3 text-xl font-light tracking-widest leading-0"
        />
        <button
          type="button"
          className="bg-yellow-600 text-xl font-light text-white px-10 py-4 rounded-xl my-12 cursor-pointer"
          onClick={handleLogin}
        >
          Login for more recipies
        </button>
      </div>
    </form>
  );
};

export default Login;
