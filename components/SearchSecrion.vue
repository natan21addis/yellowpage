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
            @input="filterLocations"
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
              v-for="location in filteredLocations"
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
      <div
        v-for="item in iconItems"
        :key="item.name"
        class="flex flex-col items-center mt-12 group hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div
          class="flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-all duration-300 ease-in-out"
        >
          <i
            :class="item.icon"
            class="text-3xl text-black group-hover:text-white transition-colors duration-300 ease-in-out"
          ></i>
        </div>
        <h2
          class="mt-4 text-xl text-black font-medium group-hover:text-yellow-500 transition-colors duration-300 ease-in-out font-mono"
          style="font-size: 15px"
        >
          {{ item.label }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedLocation: "",
      locations: ["Addis Ababa", "Adama (Nazret)", "Dire Dawa"],

      filteredLocations: [],
      iconItems: [
        { icon: "fas fa-user-friends", label: "Find People" },
        { icon: "fa-solid fa-utensils", label: "Find Restaurant" },
        { icon: "fa-solid fa-tooth", label: "Dentist" },
        { icon: "fa-solid fa-wrench", label: "Plumbers" },
        { icon: "fa-solid fa-hammer", label: "Contractors" },
        { icon: "fa-solid fa-bolt", label: "Electricians" },
        { icon: "fa-solid fa-screwdriver-wrench", label: "Auto Repair" },
        { icon: "fa-solid fa-people-roof", label: "Roofings" },
        { icon: "fa-solid fa-scale-balanced", label: "Attorneys" },
        { icon: "fa-solid fa-hotel", label: "Hotels" },
      ],
      inputWidth: "300px",
      inputHeight: "40px",
      inputTop: "0px",
      inputLeft: "0px",
      selectWidth: "200px",
      selectHeight: "40px",
      selectTop: "0px",
      selectLeft: "0px",
      buttonWidth: "100px",
      buttonHeight: "40px",
      buttonTop: "0px",
      buttonLeft: "0px",
    };
  },

  methods: {
    filterLocations() {
      const query = this.searchQuery.toLowerCase();
      this.filteredLocations = this.locations.filter((location) =>
        location.toLowerCase().includes(query)
      );
    },
    handleSearch() {
      console.log(
        `Search Query: ${this.searchQuery}, Selected Location: ${this.selectedLocation}`
      );
    },
  },
  watch: {
    searchQuery() {
      this.filterLocations();
    },
  },

  created() {
    this.filteredLocations = this.locations;
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
