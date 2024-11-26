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
       <h2 class="text-4xl text-gray-800 font-light leading-tight text-center">
         Post a Job <span class="underline text-yellow-500">for <span class="text-bold ">Free</span></span>
       </h2>
       <p class="text-lg text-gray-900 mt-6 text-center">
         Posting your job opening here is absolutely free! Let users easily discover your job listing without any cost. It’s simple to get started—just follow a few basic steps to get your job posted today. Reach potential candidates effortlessly and without any fees!
       </p>
       <p class="text-sm text-gray-500 mt-4">
         * No hidden charges. Only simple steps required to post your job and connect with qualified candidates.
       </p>
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
/* Styling for the icons */
.icon-container {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
}

/* Styling for the connecting lines */
.line {
  position: absolute;
  width: 80%;
  height: 8px;
  background-color: #ccc;
}

.line-1 {
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
}

.line-2 {
  top: 50%;
  right: 50%;
  transform: translateX(50%);
}

/* Additional styling */
img {
  border: 5px solid #f0f0f0;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}

/* Text Styling */
h2 {
  font-weight: 300; /* Font lightened */
  color: #333;
  text-align: left;
  margin-bottom: 1.5rem;
}

h2 span {
  text-decoration: underline;
  color: #fbbf24; /* Tailwind's yellow-500 */
}

p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

p:last-child {
  font-size: 0.875rem;
  color: #777;
  margin-top: 0;
}
</style>
