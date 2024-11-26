<script setup>

const loading=ref(false)
import SearchSection from "@/components/SearchSecrion.vue"
import  ClaimYourListing from "@/components/ClaimYourListing"
import QandA from "@/components/QandA"
</script>

<template>
  <div>
    <SearchSection/>
    <ClaimYourListing class="mt-36"/>
    <QandA class="mt-36 mb-36"/>

 <Button>click me</Button>

  </div>
</template>