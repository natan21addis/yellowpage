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
        <!-- Title / Heading -->

        <!-- Search Form -->
        <form
          @submit.prevent="handleSearch"
          class="flex flex-col md:flex-row w-full md:w-auto items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <!-- Search Bar -->
          <input
            type="text"
            v-model="searchQuery"
            class="px-4 py-2 border rounded-md w-full md:w-64"
            placeholder="Enter keyword, business, service"
          />

          <!-- Filters (Dropdowns) -->
          <div class="flex space-x-4">
            <select
              v-model="selectedLocation"
              class="px-4 py-2 border rounded-md"
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
          </div>

          <!-- Search Button -->
          <button
            type="submit"
            class="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
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
      // Selected category filter
      selectedLocation: "", // Selected location filter
      // Example categories
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
      // Perform the search logic here, e.g., filtering results
      console.log("Search Query:", this.searchQuery);
      console.log("Selected Category:", this.selectedCategory);
      console.log("Selected Location:", this.selectedLocation);

      // Typically, you'd send the data to an API or filter the local list
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
  margin-top: 800px;
  
  width: 78%; 
  margin: 0 auto; 
  border-radius: 4px; 
}

.container {
  max-width: 1200px;
}

h1 {
  font-size: 1.875rem; /* Large title */
}

input,
select {
  font-size: 1rem;
}

button {
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d78f00;
}
</style>
