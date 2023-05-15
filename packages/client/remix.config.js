/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    devServerPort: 3000,
    postcss: true,
    tailwind: true,
    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
    },
};
