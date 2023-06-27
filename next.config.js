/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['mongoose'],
    },
/*     sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      }, */
};
