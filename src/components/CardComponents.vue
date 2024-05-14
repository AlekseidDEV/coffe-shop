<template>
  <div :class="classElem" @click="onEmit(cardInfo.id)">
    <img :src="cardInfo.url" alt="coffee" />
    <div class="best__item-title">{{ cardInfo.name }}</div>
    <div class="best__item-price">{{ cardInfo.price }}</div>
    <div v-if="classElem === 'shop__item'" class="shop__item-country">{{ cardInfo.country }}</div>
  </div>
</template>


<script>
export default {
  props: {
    cardInfo: {},
    classElem: {
      required: false
    }
  },

  methods:{
    onEmit(id){
      this.$emit('onNavigate', id)
    }
  }
};
</script>