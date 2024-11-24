import createMiddleware from "next-intl/middleware";


export default createMiddleware({
    locales: ["en" , "ar"],
    defaultLocale: "en",
})

export const config = {
    matcher: [
        '/((?!api|_next|.*\\..*).*)', // Matches all paths except api, _next, or files with extensions
        '/en/:path*', // Explicitly match all paths under /en
        '/ar/:path*', // Explicitly match all paths under /ar
    ],
};
