<template>
  <div class="Page2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quibusdam asperiores perspiciatis repudiandae, esse itaque accusantium nam incidunt eligendi sed tempora autem odio rem numquam veniam hic animi unde iure!</p>
  </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Test from '../components/Test.vue';

    export default defineComponent({
        name: 'Todos',
        components: {
            Test
        }
    })
</script>

<style scoped>
    .Page2{
    width: 100%;
    height:auto;
    padding: 20px;
    }
</style>