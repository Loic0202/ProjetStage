<template>
    <div class="footer">
        <v-footer class="d-flex flex-column">
            <div class="bg-teal d-flex w-100 align-center px-4">
                <strong>Get connected with us on social networks!</strong>

                <v-spacer></v-spacer>

                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="plain"
                size="small"
                ></v-btn>
            </div>

            <div class="px-4 py-2 bg-black text-center w-100">
                {{ new Date().getFullYear() }} — <strong>Nike</strong>
            </div>
        </v-footer>
    </div>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="css" scoped>
    .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}

</style>