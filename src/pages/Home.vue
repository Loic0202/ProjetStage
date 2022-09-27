<template>
    <div class="container">
    <p>Je suis sur la page d'accueil</p>
  </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Home',
    })
</script>

<style scoped>
 .container{
    width: 100%;
    height:auto;
    padding: 30px;
  }
</style>