<template>
    <div class="Page3">
      <p>Lorem ipsum,</p>
    </div>
  </template>
  
  <script>
      import { defineComponent } from 'vue';
      import Test from '../components/Users.vue';
  
      export default defineComponent({
          name: 'info',
          components: {
              Users
          }
      })
  </script>
  
  <style scoped>
      .Page3{
      width: 100%;
      height:auto;
      padding: 20px;
      }
  </style>