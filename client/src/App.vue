<script setup>
import Navbar from './components/Navbar.vue';
import UploadForm from './components/UploadForm.vue';
import Faqs from './components/Faqs.vue';
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>

  <main>
    <upload-form></upload-form>
    <Faqs></Faqs>
  </main>

  <footer></footer>
</template>

<style scoped></style>
