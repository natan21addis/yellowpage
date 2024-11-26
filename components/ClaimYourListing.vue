<template>
   <div class="flex justify-between items-center p-6 bg-white rounded-lg">
     <!-- Left Section: Large Circular Image with Icons Around -->
     <div class="w-1/2 flex justify-center mt-24 relative">
       <div
         class="overflow-hidden rounded-full shadow-lg"
         style="width: 380px; height: 380px"
       >
         <img
           src="/easy.webp"
           alt="Profile"
           class="w-full h-full object-cover"
         />
       </div>
 
       <!-- Icons around the image -->
       <div class="absolute top-0 left-0 right-0 bottom-10 flex justify-center items-center">
         <!-- Icon 1 (Top) -->
         <div class="absolute left-1/2 transform -translate-x-1/2" style="top: -60px;">
           <i class="fas fa-briefcase text-2xl text-blue-300 border-2 border-gray-200 rounded-full p-2"></i>
         </div>
         <!-- Icon 2 (Right) -->
         <div class="absolute top-1/2 right-10 transform -translate-y-1/2">
           <i class="fas fa-phone-alt text-2xl text-blue-300 border-2 border-gray-200 rounded-full p-2"></i>
         </div>
         <!-- Icon 3 (Left) -->
         <div class="absolute top-1/2 left-10 transform -translate-y-1/2">
           <i class="fas fa-phone-alt text-2xl text-blue-300 border-2 border-gray-200 rounded-full p-2"></i>
         </div>

         <!-- Icon 4 (Bottom) -->
         <div class="absolute left-1/2 transform -translate-x-1/2" style="bottom: -100px;">
           <i class="fas fa-location-arrow text-2xl text-blue-300 border-2 border-gray-200 rounded-full p-2"></i>
         </div>
       </div>
 
       <!-- Lines connecting the icons -->
       <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
         <!-- Connecting Line 1 (Top to Right) -->
         <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1/2 border-t-2 border-gray-300"></div>
         <!-- Connecting Line 2 (Right to Bottom) -->
         <div class="absolute top-1/2 right-1/2 transform translate-x-1/2 w-1/2 border-t-2 border-gray-300"></div>
       </div>
     </div>
 
     <!-- Right Section: Text -->
     <div class="w-1/2 pl-8">
       <h2 class="text-5xl text-black font-light leading-tight text-center">
         Post a Job <span class="underline text-yellow-500">for <B style="font-weight:bolder;" class="text-bold  ">Free</B></span>
       </h2>
       <p class="text-lg text-gray-900 mt-6 ">
         Posting your job opening here is absolutely free! Let users easily discover your job listing without any cost. It’s simple to get started—just follow a few basic steps to get your job posted today. Reach potential candidates effortlessly and without any fees!
       </p>
       <p class="text-sm text-gray-500 mt-4">
         * No hidden charges. Only simple steps required to post your job and connect with qualified candidates.
       </p>
       <Button class="text-3xl bg-sky-700 my-4 mx-24 text-white hover:bg-blue-900 w-[298px] h-[45px] text-center">
  <a href="/jobs"> Publish Your Skill </a>
</Button>
<h1 style="font-size: 14px;" class="  text-center"> or call <B> +251979202894</B></h1>

     </div>
     
   </div>
 
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>


</style>
