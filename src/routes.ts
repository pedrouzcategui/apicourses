/**
 * An array of publilc accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/courses"];

/**
 * An array of private routes no accessible to the public.
 * These routes do require authentication.
 * @type {string[]}
 */
export const authRoutes = ["login", "signup"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/profile";
