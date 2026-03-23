/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: "export",
  // If deploying to a subpath, set basePath and assetPrefix here
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>/",
};

export default nextConfig;
