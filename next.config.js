/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shop-phinf.pstatic.net",
      "image.istarbucks.co.kr",
      "cdn.sisamagazine.co.kr",
      "blog.kakaocdn.net",
      "img1.kakaocdn.net",
      "cdn.ggilbo.com",
      "prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com",
      "cdn.lcnews.co.kr",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
