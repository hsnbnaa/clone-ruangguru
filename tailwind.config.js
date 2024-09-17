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
          "url('https://cdn-web-2.ruangguru.com/landing-pages/assets/8a72217f-1fb1-4893-83b0-39d87d7f1840.png'), url('https://cdn-web-2.ruangguru.com/landing-pages/assets/8bedee26-cac5-40b3-92a4-7da2cc32e365.png'), linear-gradient(90deg, rgb(196, 24, 87) 0%, rgb(135, 17, 59) 25%)",
      },
      backgroundPosition: {
        "promo-position": "right, left, center",
      },
      backgroundSize: {
        "promo-size": "auto 100%, auto 100%, 100%",
      },
    },
  },
  plugins: [],
};
