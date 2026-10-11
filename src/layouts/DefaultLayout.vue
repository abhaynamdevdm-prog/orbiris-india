<script setup>
import Navbar from '../components/global/Navbar.vue'
import Footer from '../components/global/Footer.vue'
</script>

<template>
  <div class="site-layout">
    <Navbar />
    <main class="site-main" id="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
