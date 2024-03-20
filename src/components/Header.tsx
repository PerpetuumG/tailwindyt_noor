'use client';

import Image from 'next/image';
import profile from '@/img/profile.jpg';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { BsMoonStarsFill } from 'react-icons/bs';

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
  }, []);

  return (
    <button
      type={'button'}
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className={
        'group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/50 ring-1 ring-zinc-900/50 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      }
      onClick={() => setTheme(otherTheme)}
    >
      <IoSunnyOutline
        className={'h-6 w-6 stroke-teal-500 transition group-hover:stroke-teal-700 dark:hidden'}
      />

      <BsMoonStarsFill
        className={'hidden dark:block h-6 w-6 fill-zinc-500 stroke-zinc-500 transition-'}
      />
    </button>
  );
};

const Header = () => {
  return (
    <header
      className={
        'top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center'
      }
    >
      <Link href={'/'}>
        <Image
          src={profile}
          alt={'profile logo'}
          className={'w-12 h-12 rounded-full object-cover'}
        />
      </Link>

      <div>
        <p>navigation</p>
      </div>

      <div className={'hidden md:inline-flex items-center gap-5'}>
        <button
          className={
            'text-teal-500 px-8 py-2 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300'
          }
        >
          Login
        </button>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
