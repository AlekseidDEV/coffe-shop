<template>
  <div class="row filter_search">
    <div class="col-lg-4 offset-2">
      <form action="#" class="shop__search">
        <label class="shop__search-label" for="filter">Looking for</label>
        <input
            v-model="inputSearch"
            id="filter"
            type="text"
            placeholder="start typing here..."
            class="shop__search-input"
        />
      </form>
    </div>
    <div class="col-lg-4">
      <div class="shop__filter">
        <div class="shop__filter-label">Or filter</div>
        <div class="shop__filter-group" @click="filterProduct">
          <button class="shop__filter-btn">Brazil</button>
          <button class="shop__filter-btn">Kenya</button>
          <button class="shop__filter-btn">Columbia</button>
          <div class="reset_filter">
            <button class="shop__filter-btn btn_reset">reset filter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data(){
    let inputSearch = ''

    return{
      inputSearch
    }
  },

  watch: {
    inputSearch: debounce(function (text) {
      this.getSeacrProd(text)
    }, 300)
  },

  methods: {
    getSeacrProd(text){
      this.$store.dispatch('setIsLoad', false)
      this.$store.dispatch('setSearchCoffe', text)
    },

    filterProduct(e){
      if(!e.target.matches('.btn_reset')){
        this.$store.dispatch('setIsLoad', false)
        this.$store.dispatch('setFilterCoffe', e.target.innerText)
      } else {
        this.$store.dispatch('setIsLoad', false)
        this.$store.dispatch('setCoffeProd')
      }
    }
  }
}
</script>

<style scoped>
.reset_filter{
  display: flex;
  justify-content: end;
  margin-top: 15px;
}
</style>
