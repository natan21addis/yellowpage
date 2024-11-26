<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <!-- Global Header -->
    <Header class="bg-white" />

    <!-- Page Content -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Global Footer -->
    <Footer class="bg-white" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* No need for additional styles, Tailwind handles the theme styling */
</style>
