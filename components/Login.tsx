'use client';

import { useUserContext } from '@/contexts/userContext';
import { userCredentials } from '@/data/data';
import { UserContextType } from '@/types/types';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';

const Login = () => {
  const { setUser } = useUserContext() as UserContextType;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showGuestDetails, setShowGuestDetails] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
    if (!logInUser) {
      setIsLogin(true);
      setUsername('');
      setPassword('');
    }

    if (logInUser) setUser(logInUser);
  };

  const handleShowGuessDetails = () => {
    setShowGuestDetails(!showGuestDetails);
  };

  useEffect(() => {
    const timerCloseNotifaction = setTimeout(() => {
      setIsLogin(false);
    }, 2000);
    return () => clearTimeout(timerCloseNotifaction);
  }, [isLogin]);

  useEffect(() => {
    const timerCloseCredentials = setTimeout(() => {
      setShowGuestDetails(false);
    }, 3000);
    return () => clearTimeout(timerCloseCredentials);
  }, [showGuestDetails]);

  return (
    <form className="relative flex flex-col w-full items-center bg-[url('/login-bg-img.jpg')] bg-cover bg-center bg-no-repeat rounded-xl">
      <div className="relative flex flex-col items-start  w-full max-w-[95%] xl:max-w-[80%] md:max-h-[90%] my-2 md:my-10 bg-primary/50 rounded-2xl px-6 sm:px-10 md:px-30 lg:px-60 xl:px-40 pt-2">
        <div className="flex justify-center shrink-0 z-300 mt-5 xl:mt-12 mb-8">
          <Image
            src={`/logo-secondary.png`}
            alt="logo secondary of website"
            width={300}
            height={200}
            loading="eager"
            className="h-20 w-auto"
          />
        </div>

        <label
          htmlFor="username"
          className="text-lg xl:text-xl text-white font-light"
        >
          Enter username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
          className="bg-white rounded-md h-12 mt-3 px-5 py-2 text-lg xl:text-xl font-light w-full max-w-md"
        />

        <label
          htmlFor="password"
          className="text-lg xl:text-xl text-white font-light mt-5"
        >
          Enter password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
          className="bg-white rounded-md h-12 px-5 py-2 mt-3 text-lg xl:text-xl font-light tracking-widest leading-0 w-full max-w-md"
        />
        <button
          type="button"
          className="bg-yellow-600 text-lg xl:text-xl font-light text-white px-10 py-4 rounded-xl mt-12 cursor-pointer w-full max-w-md"
          onClick={handleLogin}
        >
          Login for more recipies
        </button>

        <button
          type="button"
          className="pt-8 mb-12 text-text text-sm w-full max-w-md cursor-pointer"
          onClick={handleShowGuessDetails}
        >
          {showGuestDetails ? 'Hide' : 'Click here to find'} guest login details
        </button>
        {showGuestDetails && (
          <div className="absolute right-2 z-300 bg-primary/80 text-white p-6 rounded-xl">
            <p>Username: username1, username2</p>
            <p>Password: password1, password2</p>
          </div>
        )}
        {isLogin && !showGuestDetails && (
          <div className="absolute w-fit right-2 items-center bg-amber-500/50 p-5 rounded-xl">
            User credentials are incorrect!
          </div>
        )}
      </div>
    </form>
  );
};

export default Login;
