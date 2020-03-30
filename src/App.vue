<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <template v-slot:prepend>
        <!-- <v-img
          contain
          :src="require('@/assets/images/logo_white.svg')"
          width="30%"
          class="mx-auto pa-5"
        ></v-img> -->
      </template>
      <v-divider></v-divider>
      <v-list dense nav>
        <!-- AVATAR -->
        <!-- <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="$store.state.user.picture" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $store.state.user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{
              $store.state.user.surname
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block danger to="/logout">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="tertiary" elevation="0" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title>
        <!-- <v-img
          :src="require('@/assets/images/logo_white.svg')"
          contain
          height="30"
        ></v-img> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app color="secondary" light class="text--white" height="50">
      <span>Discleimer</span>
    </v-footer>
    <v-overlay :value="isLoading">
      <v-progress-circular size="128" indeterminate
        >Loading</v-progress-circular
      >
    </v-overlay>
    <v-snackbar
      bottom
      color="error"
      value="errors.length>0"
      :timeout="6000"
      v-for="(error, e) in errors"
      :key="e"
      >{{ error.msg }}</v-snackbar
    >
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    drawer: false
  }),

  computed: {
    ...mapState(["isLoading", "errors"])
  },

  methods: {
    setBagOnMap(e) {
      this.$store.commit("SELECT_BAG", e);
      this.$router.push(`/map`);
    }
  }
};
</script>
<style lang="scss">
body,
#inspire {
  background-color: var(--v-primary-accent-1);
}
</style>
