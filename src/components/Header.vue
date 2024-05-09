<template>
  <header>
    <ul
        class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li v-for="(link, index) of arrLinks" :class="link.classLi">
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
  data(){
    let arrLinks = [
      {
        classLi: 'header__item',
        path: '/',
        img: 'Logo.svg',
      },
      {
        classLi: 'header__item',
        path: {name: 'OurCoffe'},
        text: 'Our coffee'
      },
      {
        classLi: 'header__item',
        path: {name: 'Goods'},
        text: 'For your pleasure',
      },
      {
        classLi: 'header__item',
        path: {name: 'Contact'},
        text: 'Contact us',
      }
    ]

    return{
      arrLinks
    }
  }
}

</script>

<style scoped>
  .header__item p{
    margin-bottom: 0;
  }
</style>