/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_DDRAGON_API_BASE: 'https://ddragon.leagueoflegends.com/cdn/',
    NEXT_PUBLIC_DDRAGON_API_CHAMPIONS: 'data/pt_BR/champion.json',
    NEXT_PUBLIC_DDRAGON_API_VERSION: '12.6.1',
    NEXT_PUBLIC_DDRAGON_API_SPLASH: 'img/champion/splash/',
    NEXT_PUBLIC_DDRAGON_API_LOADING: 'img/champion/loading/',
    NEXT_PUBLIC_DDRAGON_API_SQUARE: 'img/champion/',
  },
};

module.exports = nextConfig;
