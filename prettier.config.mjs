/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  plugins: ["prettier-plugin-tailwindcss"],
  // wajib diisi untuk Tailwind v4, beda dengan v3 yang pakai tailwindConfig
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;
