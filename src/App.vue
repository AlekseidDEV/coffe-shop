<template>
  <div class="wrapper">
   <router-view>

   </router-view>
   <Footer></Footer>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
import Footer from '@/components/Footer.vue'

export default {
  components: {Home, Footer}
}
</script>

<style>

</style>
