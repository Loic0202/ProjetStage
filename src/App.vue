<script>
  import { defineComponent } from 'vue';
import HeaderCustom from './components/HeaderCustom.vue'
import FooterCustom from './components/FooterCustom.vue'
import Test from './components/Test.vue'
import Users from './components/Users.vue'
export default defineComponent({
  name: 'App',
  components: {
    HeaderCustom,
    FooterCustom,
    Test,
    Users,
  }
})

</script>

<template>
  <HeaderCustom />
  <Test />
  <router-view />
  <FooterCustom />
</template>

<style lang="css" scoped>
 
</style>
