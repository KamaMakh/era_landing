<template>
  <v-app>
    <v-main>
      <router-view />
      <v-snackbar
        v-model="snackBar.value"
        :color="snackBar.color"
        :timeout="2000"
        top
        right
      >
        {{ snackBar.text }}
        <v-btn color="#fff" text @click="snackBar.value = false">
          {{ snackBar.button_text }}
        </v-btn>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
  created() {
    this.$vuetify.lang.current = "ru";
  },
  computed: {
    ...mapState({
      snackBar: state => state.snackBar
    })
  }
};
</script>

<style lang="scss">
.v-snack__wrapper {
  min-width: 0 !important;
}
</style>
