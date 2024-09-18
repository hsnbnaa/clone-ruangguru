/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "header-background":
          "linear-gradient(257.67deg, #21a5b1 46.16%, #0e9bdf 95.13%)",
        "promo-background":
          "url(https://cdn-web-2.ruangguru.com/landing-pages/assets/8bedee26-cac5-40b3-92a4-7da2cc32e365.png), url(https://cdn-web-2.ruangguru.com/landing-pages/assets/8a72217f-1fb1-4893-83b0-39d87d7f1840.png), linear-gradient(90deg, #C41857 0%, #87113B 25%, #87113B 75%, #C41857 100%), linear-gradient(90deg, #010103 0%, #00282B 50%, #010103 100%)",
      },
      backgroundPosition: {
        "promo-position": "left, right, center, center",
      },
      backgroundSize: {
        "promo-size": "auto 100%, auto 100%, 100%, cover",
      },
    },
  },
  plugins: [],
};
