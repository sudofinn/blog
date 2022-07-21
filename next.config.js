/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    getFormKey:"https://getform.io/f/e1b4940b-ffd6-466a-889d-08d3deaf0298"
  }
}

module.exports = nextConfig
