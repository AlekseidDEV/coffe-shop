<template>
  <div class="best__item">
    <img :src="cardInfo.url" alt="coffee" />
    <div class="best__item-title">{{ cardInfo.name }}</div>
    <div class="best__item-price">{{ cardInfo.price }}</div>
  </div>
</template>


<script>
export default {
  props: ["cardInfo"],
};
</script>