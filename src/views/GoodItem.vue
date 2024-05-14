<template>
  <main>
    <div class="banner" :class="pageName === 'item-coffe' ? 'coffepage-banner' : 'goodspage-banner'">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Header/>
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl shop_img_item" :src="pageInfo.url" alt="coffee_item">
          </div>
          <div class="col-lg-4">
            <div class="title">{{pageInfo.name}}</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            <div class="shop__point">
              <span>Country:</span>
              {{pageInfo.country}}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{pageInfo.description}}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{pageInfo.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

  export default {
    components: {Header},

    computed: {
      pageName(){
        return this.$route.name
      },

      pageInfo(){
        const pageGetter = this.pageName === 'item-coffe' ? 'getProdById' : 'getGoodItemId'

        return this.$store.getters[pageGetter](this.$route.params.id)
      },
    }
  }
</script>

<style scoped>
  .shop_img_item{
    max-width: 392px;
    width: 100%;
  }
</style>