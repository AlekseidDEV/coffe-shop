<template>
  <header>
    <ul
        class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li v-for="(link, index) of getLinks" :class="link.classLi">
        <router-link :to="link.path">
          <img v-if="index === 0" :src="require(`@/assets/logo/${link.img}`)" alt="icon">
          <p v-else>{{link.text}}</p>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>

export default {
  computed: {
    getLinks(){
      return this.$store.getters['getHeaderLinks']
    }
  }
}

</script>

<style scoped>
  .header__item p{
    margin-bottom: 0;
  }
</style>