<template>
   <div>
     <h1
       class="font-bold text-black mb-4 md:mb-0 text-center mt-24"
       style="font-size: 70px"
     >
       Discover Local
     </h1>
     <div
       class="flex search-section bg-yellow-400 py-6 mt-24 items-center justify-center text-center"
     >
       <div
         class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
       >
         <!-- Search Form -->
         <form
           @submit.prevent="handleSearch"
           class="flex flex-col md:flex-row w-full md:w-auto items-center space-y-4 md:space-y-0 md:space-x-4"
         >
           <!-- Search Bar -->
           <input
             type="text"
             v-model="searchQuery"
             :style="{
               width: inputWidth,
               height: inputHeight,
               position: 'relative',
               top: inputTop,
               left: inputLeft,
             }"
             class="px-4 py-2 border "
             placeholder="Enter keyword, business, service"
           />
 
           <!-- Filters (Dropdowns) -->
           <select
             v-model="selectedLocation"
             :style="{
               width: selectWidth,
               height: selectHeight,
               position: 'relative',
               top: selectTop,
               right: selectLeft,
            
               
             }"
             class="px-4 py-2 border  bg-white"
           >
             <option value="">Select Location</option>
             <option
               v-for="location in locations"
               :key="location"
               :value="location"
             >
               {{ location }}
             </option>
           </select>
 
           <!-- Search Button -->
           <button
             type="submit"
             :style="{
               width: buttonWidth,
               height: buttonHeight,
               position: 'relative',
               top: buttonTop,
               left: buttonLeft,
             }"
             class="bg-yellow-500 text-white px-6 py-2  hover:bg-yellow-600 transition-colors duration-300"
           >
             Search
           </button>
         </form>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       searchQuery: "", // The search query input
       selectedLocation: "", // Selected location filter
       locations: [
         "New York",
         "Los Angeles",
         "Chicago",
         "San Francisco",
         "Houston",
       ], // Example locations
       // Inline style bindings
       inputWidth: "600px",
       inputHeight: "90px",
       inputTop: "0px",
       inputLeft: "130px",
 
       selectWidth: "300px",
       selectHeight: "90px",
       selectTop: "0px",
       selectLeft: "8px",
       
 
       buttonWidth: "100px",
       buttonHeight: "40px",
       buttonTop: "0px",
       buttonLeft: "20px",
     };
   },
   methods: {
     handleSearch() {
       // Perform the search logic here
       console.log("Search Query:", this.searchQuery);
       console.log("Selected Location:", this.selectedLocation);
     },
   },
 };
 </script>

 <style scoped>
 .search-section {
   background-image: url("carpenter.avif");
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 350px;
   width: 78%;
   margin: 0 auto;
   border-radius: 4px;
 }
 
 .container {
   max-width: 1200px;
 }
 
 h1 {
   font-size: 1.875rem;
 }
 </style>
 