<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap" @click="scrolledTop">
            <li class="footer__item">
              <router-link to="/">
                <img src="@/assets/logo/Logo_black.svg" alt="logo" />
              </router-link>
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'OurCoffe' }"> Our coffee </router-link>
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'Goods' }">
                For your pleasure
              </router-link>
            </li>
            <li class="footer__item">
              <router-link :to="{ name: 'Contact' }"> Contact us </router-link>
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
    setup(){
        const scrolledTop = () => {
           window.scrollTo({top: 0, behavior: 'smooth'})
        }

        return {scrolledTop}
    }
}
</script>