<template>
  <div class="header">
    <div class="logo_section">
      <router-link to="/">
      <img class="logo" src="../assets/nike.jpg" alt="">
      </router-link>
    </div>
    <div class="navigation_items">
      <router-link to="/articles">Articles</router-link>
    </div>
    <div>
      <router-link to="/todos">Todos</router-link>
    </div>
    <div>
      <router-link to="info">Users</router-link>
    </div>
  </div>

</template>


<script setup>
</script>

<style lang="css" scoped>
  .header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    position: relative;
    top: 0;
  }
  .logo{
    height: 100px;
    width: auto;
  }
</style>