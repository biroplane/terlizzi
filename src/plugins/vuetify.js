import Vue from "vue";
import Vuetify from "vuetify/lib";
import dark from "./vuetify/theme";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    default: "light",
    dark: false,
    options: {
      customProperties: true
    },
    themes: { dark }
  }
});
