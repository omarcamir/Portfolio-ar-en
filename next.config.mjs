import crateNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = crateNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
