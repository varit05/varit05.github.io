/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, "") ?? "";
const isUserPagesRepo = repoName.toLowerCase().endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && repoName && !isUserPagesRepo ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
};

export default nextConfig;
