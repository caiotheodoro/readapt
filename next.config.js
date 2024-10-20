/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-4313dea226fa4dcabb56dc41c2c55605.r2.dev',
      },
      { hostname: 'cloudflare-ipfs.com', protocol: 'https' },
      { hostname: 'gutenberg.org', protocol: 'https' },
      { hostname: 'www.gutenberg.org', protocol: 'https' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

module.exports = nextConfig;
