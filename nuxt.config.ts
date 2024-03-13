// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icons",
    "@pinia/nuxt",
    "radix-vue/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Nunito: {
            wght: [300, 500, 700],
            ital: [300],
          },
        },
      },
    ],
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
});
