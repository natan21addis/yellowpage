export default defineNuxtConfig({
  // Global CSS configuration
  css: [
    '@/assets/css/tailwind.css',
    'font-awesome/css/font-awesome.css' // Add Font Awesome globally
  ],

  // Build modules (including Tailwind CSS and ShadCN Nuxt module)
  buildModules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
  ],

  // Regular modules (ShadCN Nuxt module)
  modules: [
    'shadcn-nuxt', // ShadCN module for UI components
  ],

  // Configuration for ShadCN Nuxt module
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: '',

    /**
     * Directory where your ShadCN components will be located
     * This points to your custom UI components directory
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  // Optional: Color Mode configuration if you're using @nuxtjs/color-mode
  colorMode: {
    classSuffix: '', // Can specify a suffix if needed for the color classes
  },

  // Additional Nuxt configuration options, if necessary
  tailwindcss: {
    config: {
      // Custom Tailwind CSS configurations can go here
    },
  },

  // Adding Font Awesome via CDN (alternative option)
  head: {
    link: [
      { 
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
      }
    ]
  },
});
