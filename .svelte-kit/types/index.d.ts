type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/openfusionapi": undefined;
	"/test": undefined
};

export type RouteId = "/" | "/openfusionapi" | "/test";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/openfusionapi" | "/test";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/favicon.png" | "/icono01.png";