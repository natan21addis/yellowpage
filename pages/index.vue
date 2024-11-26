<script setup>

const loading=ref(false)
import SearchSection from "@/components/SearchSecrion.vue"
import  ClaimYourListing from "@/components/ClaimYourListing"
</script>

<template>
  <div>
    <SearchSection/>
    <ClaimYourListing class="mt-36"/>
 <Button>click me</Button>

  </div>
</template>