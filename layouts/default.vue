<template>
   <div class="layout-container">
     <Header />
     <main>
       <NuxtPage />
     </main>
     <Footer />
   </div>
 </template>
 
 <script>
 import Header from '@/components/Header.vue';
 import Footer from '~/components/Footer.vue';
 
 export default {
   components: {
     Header,
     Footer,
   },
 };
 </script>
 