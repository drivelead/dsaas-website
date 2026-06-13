/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@carbon/react', '@carbon/icons-react', '@carbon/elements'],
  sassOptions: {
    includePaths: ['./node_modules'],
  },
};

export default nextConfig;
