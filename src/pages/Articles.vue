<template>
    <div class="container">
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
  </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Cards from '../components/Cards.vue';

    export default defineComponent({
        name: 'Articles',
        components: {
            Cards
        }
    })
</script>

<style scoped>
 .container{
    width: 100%;
    height:auto;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>