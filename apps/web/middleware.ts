import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n';

const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias

function getLocaleFromPathname(pathname: string): string | undefined {
  const segments = pathname.replace(/^\//, '').split('/');
  const firstSegment = segments[0];
  return locales.includes(firstSegment as (typeof locales)[number]) ? firstSegment : undefined;
}

function shouldIgnorePathname(pathname: string): boolean {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/legal') ||
    /\.(ico|png|jpg|jpeg|svg|webp|gif|woff2?|ttf|eot)$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldIgnorePathname(pathname)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const pathnameLocale = getLocaleFromPathname(pathname);

  // Se já tem locale no path, apenas atualiza cookie
  if (pathnameLocale) {
    const response = NextResponse.next();
    if (!cookieLocale || cookieLocale !== pathnameLocale) {
      response.cookies.set(LOCALE_COOKIE_NAME, pathnameLocale, {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax',
      });
    }
    return response;
  }

  // Define locale preferido (cookie ou default)
  const preferredLocale = cookieLocale || defaultLocale;
  const finalLocale = locales.includes(preferredLocale as (typeof locales)[number])
    ? preferredLocale
    : defaultLocale;

  // Redireciona com locale
  const newPathname = `/${finalLocale}${pathname}`;
  const redirectUrl = new URL(newPathname, request.url);
  redirectUrl.search = request.nextUrl.search;

  const response = NextResponse.redirect(redirectUrl, { status: 307 });
  response.cookies.set(LOCALE_COOKIE_NAME, finalLocale, {
    maxAge: COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
