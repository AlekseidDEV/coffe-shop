<template>
  <div class="spiner">
    <span class="loader"></span>
  </div>
</template>

<script>

</script>

<style scoped>
  .spiner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 100px;
  }

  .loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20px;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #000;
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #000;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #000;
      opacity: 1;
    }
    50%, 100% {
      box-shadow: inset 0 0 0 0 #000;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%, 50% {
      box-shadow: 0 0 0 0 #000;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem #000;
      opacity: 1;
    }
  }

</style>