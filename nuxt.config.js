export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Text&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "red" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/appFilters', ssr: true }, { src: '~/plugins/vue-leaflet', ssr: false }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources", "@nuxtjs/axios", "@nuxtjs/apollo"
  ],
  styleResources: {
    // your settings here
    scss: ["~/assets/scss/main.scss", "~/assets/scss/theme.scss"]
  },
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: '~/apollo/config.js'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    splitChunks: {
      layouts: true
    },
    extend (config, ctx) {
    }
  }
};
