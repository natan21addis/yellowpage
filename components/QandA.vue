<template>
   <div>
  
  
     <div class="flex search-section bg-sky-500 py-6 mt-24 items-center justify-center text-center">
       <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between" 
            style="height: 350px; width: 80%; max-width: 1200px; margin: 0 auto;">
         
         <!-- Left Section -->
         <div class="text-container text-white flex-1">
           <h3>Questions and Answers</h3>
           <p>
             How much is a tankless water heater? <br/>
             Who should I contact for bankruptcy advice?
           </p>
         </div>

         <!-- Right Section: Circular Image with Icons Around -->
         <div class="relative mt-12 md:mt-20 w-120 h-120 " style="margin-left: 180px;">
           <!-- Circular Image -->
           <div class="w-120 h-120 rounded-full overflow-hidden shadow-3xl text-right circle-image">
             <img src="/askQuestion.webp" alt="Circular Image" class="w-full h-full object-cover" />
           </div>
          
         </div>
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
  width: 80%;
  margin: 0 auto;
  border-radius: 4px;
}

.container {
  max-width: 1200px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Prevent text from breaking */
.text-container p {
  white-space: nowrap; /* Prevent text from breaking into multiple lines */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Add ellipsis if the text overflows */
  font-size: 1.3rem;
  font-family: fantasy;
  font-style: italic;
}

/* Style for left section header */
.text-container h3 {
 font-family: 'Times New Roman', Times, serif;
  font-size: 2.8rem;
  margin-bottom: 10px;
  word-break: break-word;
  white-space: nowrap; /* Prevent text from breaking into multiple lines */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; 
}

/* Ensure the left section takes up all available space */
.text-container {
  flex: 1;
  max-width: 100%;
  text-align: left; /* Align text to the left */
}

/* Circular Image and Hover Effects */
.circle-image {
  width: 380px;
  height: 360px;
  border-radius: 50%;
  transition: all 0.5s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15), 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 4px solid #fff; /* White border for definition */
  transform: scale(1); /* Initial scale */
}

.circle-image:hover {
  transform: scale(1.1) translateY(-10px); /* Scale and move up slightly */
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2), 0px 8px 40px rgba(0, 0, 0, 0.15); /* Larger shadow on hover */
}

/* Additional Styling for Smooth Transition */
.circle-image {
  animation: moveBackAndForth 3s ease-in-out infinite;
}

/* Animation for moving back and forth */
@keyframes moveBackAndForth {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
