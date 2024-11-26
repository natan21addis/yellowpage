<template>
  <div>
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="text-black text-2xl font-bold">YellowPages</div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-8 items-center">
          <router-link
            v-for="item in menuItems"
            :key="item.text"
            :to="item.link"
            class="menu-item text-black hover:text-yellow-900 transition-colors duration-200"
            :style="{ fontSize: item.fontSize + 'px' }"
          >
            {{ item.text }}
          </router-link>

          <!-- Search By City Button -->
          <div
            class="menu-item text-black hover:text-yellow-900 transition-colors duration-200 cursor-pointer flex items-center"
            @click="toggleCities"
          >
            <span class="mr-2">
              <!-- Location Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 21a3 3 0 006 0M3 10a9 9 0 0118 0c0 4.5-3 9-9 12-6-3-9-7.5-9-12z"
                />
              </svg>
            </span>
            Search By City
          </div>
        </nav>
      </div>
    </header>

    <!-- Error Message -->
    <div v-if="errorMessage" class="container mx-auto mt-4 px-6 text-red-500">
      <p>Error: {{ errorMessage }}</p>
      <button
        @click="retryFetch"
        class="bg-yellow-500 text-white px-4 py-2 mt-2 rounded hover:bg-yellow-600"
      >
        Retry
      </button>
    </div>

    <!-- Cities Table -->
    <div v-if="showCities && cities.length > 0" class="container mx-auto mt-6 px-6">
      <table class="table-auto w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-4 py-2">City Name</th>
            <th class="border border-gray-300 px-4 py-2">Region</th>
            <th class="border border-gray-300 px-4 py-2">Country</th>
            <th class="border border-gray-300 px-4 py-2">Population</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(city, index) in cities" :key="index" class="hover:bg-yellow-50">
            <td class="border border-gray-300 px-4 py-2">{{ city.city }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ city.region }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ city.country }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ city.population || "N/A" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
Write
    <!-- Loading Indicator -->
    <div v-if="isLoading" class="container mx-auto mt-6 px-6 text-center">
      <p>Loading cities...</p>
    </div>
  </div>
</template>

<script>
// Import cities JSON data
import citiesData from '@/utilies/cities.json';

export default {
  data() {
    return {
      showCities: false,
      isLoading: false,
      errorMessage: null,
      menuItems: [
        { text: "Write a review", link: "/home", fontSize: 19 },
        { text: "Advertise", link: "/businesses", fontSize: 19 },
      ],
      cities: [],
    };
  },
  methods: {
    toggleCities() {
      this.showCities = !this.showCities;

      if (this.showCities && this.cities.length === 0) {
        this.fetchCities();
      }
    },
    fetchCities() {
      this.isLoading = true;
      this.errorMessage = null;

      try {
        // Load cities from the local JSON file
        this.cities = citiesData;
      } catch (error) {
        // Handle any errors related to loading the local JSON file
        this.errorMessage = "Failed to load cities.";
      } finally {
        this.isLoading = false;
      }
    },
    retryFetch() {
      this.fetchCities();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.table-auto {
  border-spacing: 0;
  margin-top: 20px;
}
.table-auto th,
.table-auto td {
  text-align: left;
}
</style>
