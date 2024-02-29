import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './features/navigation';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix,
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};