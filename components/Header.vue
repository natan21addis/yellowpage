<template>
   <header class="global-header">
     <nav>
       <ul class="nav-links">
         <li><NuxtLink to="/">Home</NuxtLink></li>
         <li><NuxtLink to="/about">About</NuxtLink></li>
       </ul>
     </nav>
   </header>
 </template>
 
 <script>
 export default {
   name: 'Header',
 };
 </script>
 
 <style scoped>
 .global-header {
   background-color: #333;
   color: white;
   padding: 1rem;
 }
 
 .nav-links {
   display: flex;
   justify-content: center;
   gap: 1.5rem;
   list-style: none;
 }
 
 .nav-links li {
   font-size: 1.1rem;
 }
 </style>
 