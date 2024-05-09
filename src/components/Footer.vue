<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap" @click="scrolledTop">
            <li v-for="(link, index) of arrLinks" :class="link.classLi">
              <router-link :to="link.path">
                <img v-if="index === 0" :src="require(`@/assets/logo/${link.img}`)" alt="icon">
                <p v-else>{{link.text}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>

export default{
  data(){
    let arrLinks = [
      {
        classLi: 'footer__item',
        path: '/',
        img: 'Logo_black.svg',
      },
      {
        classLi: 'footer__item',
        path: {name: 'OurCoffe'},
        text: 'Our coffee'
      },
      {
        classLi: 'footer__item',
        path: {name: 'Goods'},
        text: 'For your pleasure',
      },
      {
        classLi: 'footer__item',
        path: {name: 'Contact'},
        text: 'Contact us',
      }
    ]

    return{
      arrLinks
    }
  },

  methods:{
    scrolledTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  },
}
</script>

<style scoped>
  .footer__item p{
    margin-bottom: 0;
  }
</style>