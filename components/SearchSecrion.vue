<template>
  <div>
    <h1
      class="font-bold text-black mb-40 md:mb-0 text-center mt-24 pb-12"
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
            class="px-4 py-2 border"
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
            class="px-4 py-2 border bg-white"
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
              bottom: buttonTop,
              right: buttonLeft,
            }"
            class="bg-yellow-400 text-black px-6 py-2 hover:bg-yellow-600 transition-colors duration-300 border rounded"
          >
            FIND
          </button>
        </form>
      </div>
    </div>

    <!-- People Icon Section -->
    <div class="flex flex-wrap justify-center items-center space-x-9 mt-12">
  <!-- Find People -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fas fa-user-friends text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Find People</h2>
  </div>

  <!-- Restaurant -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-utensils text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Find Restaurant</h2>
  </div>

  <!-- Dentist -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-tooth text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h3 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Dentist</h3>
  </div>

  <!-- Plumbers -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-wrench text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Plumbers</h2>
  </div>

  <!-- Contractors -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-hammer text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h3 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Contractors</h3>
  </div>

  <!-- Electricians -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-bolt text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Electricians</h2>
  </div>

  <!-- Auto Repairs -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-screwdriver-wrench text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Auto Repair</h2>
  </div>

  <!-- Roofings -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-people-roof text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Roofings</h2>
  </div>

  <!-- Attorneys -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-scale-balanced text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Attorneys</h2>
  </div>

  <!-- Hotels -->
  <div class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out">
    <!-- Icon -->
    <div class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out">
      <i class="fa-solid fa-hotel text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"></i>
    </div>
    <!-- Text -->
    <h2 class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono" style="font-size: 15px;">Hotels</h2>
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

      selectWidth: "450px",
      selectHeight: "90px",
      selectTop: "0px",
      selectLeft: "8px",

      buttonWidth: "130px",
      buttonHeight: "48px",
      buttonTop: "1px",
      buttonLeft: "180px",
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
