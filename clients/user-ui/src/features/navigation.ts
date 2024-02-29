import { createSharedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ru', 'am', 'es', 'ja', 'de'] as const;
export const localePrefix = 'as-needed';


export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });