<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Header></Header>
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
                class="shop__girl"
                src="@/assets/img/coffee_girl.jpg"
                alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
                class="beanslogo"
                src="@/assets/logo/Beans_logo_dark.svg"
                alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br/><br/>
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br/>
              so questions. <br/>
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br/>
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br/>
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
          <FilterBlock/>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <CardComponents
                  v-for="card of getArrprod"
                  :key="card.name"
                  :cardInfo="card"
                  classElem="shop__item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import CardComponents from "@/components/CardComponents.vue";
import FilterBlock from '@/components/FilterBlock.vue'

import {axiosClient} from "@/axiosClient";

export default {
  components: {Header, CardComponents, FilterBlock},

  methods: {
    getArrCard() {
      this.$store.dispatch('setCoffeProd')
    }
  },

  computed: {
    getArrprod(){
      return this.$store.getters['getProdCoffe']
    }
  },

  beforeMount() {
    this.getArrCard()
  }
};
</script>

<style>
</style>