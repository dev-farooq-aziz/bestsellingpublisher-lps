/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'inhouse.cryscampus.com',
            port: '',
            pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'secure.gravatar.com',
          port: '',
          pathname: '/**',
      }
    ]
},
}

module.exports = nextConfig
