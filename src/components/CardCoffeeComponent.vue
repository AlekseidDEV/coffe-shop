<template>
    <div class="shop__item">
        <img :src="cardProd.url" alt="coffee">
        <div class="shop__item-title">
            {{ cardProd.name }}
        </div>
        <div class="shop__item-country">{{ cardProd.country }}</div>
        <div class="shop__item-price">{{ cardProd.price }}</div>
    </div>
</template>

<script>
export default{
    props: ['cardProd']
}
</script>