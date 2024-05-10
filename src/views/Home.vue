<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <Header></Header>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a
                @click.prevent="smoothScroll"
                href="#about"
                class="preview__btn"
            >More</a>
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best"  id="about" ref="about">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <CardComponents
                v-for="card of arrCard"
                :cardInfo="card"
                :key="card.name"
                classElem="best__item"
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
import {axiosClient} from "@/axiosClient";

export default {
  components: { Header, CardComponents },

  data(){
    let arrCard = []
    return {
      arrCard
    }
  },

 methods:{
    getArrCard(){
      axiosClient.get("bestsellers").then((res) => {
       res.data.forEach((obj) => {
         this.arrCard.push(obj)
       })
      });
    },

   smoothScroll(e){
     this.$refs.about.scrollIntoView({
       behavior: 'smooth',
       block: 'center'
     })
   }
 },

  mounted() {
    this.getArrCard()
  }
};
</script>