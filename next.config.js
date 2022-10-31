const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();
const withNextEnv = nextEnv({});

module.exports = withNextEnv({
  async rewrites() {
    return [
      {
        source: "/article/:id",
        destination: "/article",
      },

    ];
  },
  lessLoaderOptions: {},
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
