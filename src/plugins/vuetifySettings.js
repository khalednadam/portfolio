import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";

const dark = {
  dark: true,
  colors: {
    // primary: "#f0ae00",
    // info: "#137100",
    // success: "#05b187",
    // accent: "#fc4b6c",
    // warning: "#fec90f",
    // error: "#fc4b6c",
    // secondary: "#f0ae00",
    primary: "#002379",
    secondary: "#FF5F00",
    third: "#FF9F66",
    error1: "#FFC1CE",
    error2: "#94354B",
    success1: "#D7EADF",
    success2: "#61A47C",
    alert1: "#F9C7A4",
    alert2: "#A1673F",
    info1: "#C5E7E8",
    info2: "#33898A",
    background: "#001523",
    onbackground: "#FAFAFA",
    list: "#0F1204",
    card: "#313F35",
  },
};
const light = {
  dark: false,
  colors: {
    // primary: "#f0ae00",
    // info: "#137100",
    // success: "#05b187",
    // accent: "#fc4b6c",
    // warning: "#fec90f",
    // error: "#fc4b6c",
    // secondary: "#f0ae00",
    primary: "#002379",
    secondary: "#FF5F00",
    third: "#FF9F66",
    error1: "#fa0505",
    error2: "#94354B",
    success1: "#D7EADF",
    success2: "#61A47C",
    alert1: "#F9C7A4",
    alert2: "#A1673F",
    info1: "#C5E7E8",
    info2: "#33898A",
    background: "#FFFAE6",
    onbackground: "#001523",
  },
};

const settings = {
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
  components: components,
  directives: directives,
  theme: {
    defaultTheme: localStorage.getItem("khaled-theme") || "dark",
    themes: {
      light,
      dark,
    },
  },
  defaults: {
    VBtn: {
      fontWeight: "400",
      letterSpacing: 0,
      ripple: false,
      rounded: "md",
    },
    VTextField: {
      variant: "outlined",
      rounded: "lg",
      density: "compact",
    },
    VFileInput: {
      variant: "outlined",
      rounded: "lg",
      density: "compact",
    },
    VAutocomplete: {
      variant: "outlined",
      rounded: "lg",
      density: "compact"
    },
    VTextarea: {
      rounded: "lg",
      variant: "outlined",
      density: "compact",
    },
    VCard: {
      rounded: "lg",
    },
    VListItem: {
      rounded: "medium",
    },
    VSelect: {
      rounded: "lg",
      variant: "outlined",
      density: "compact",
    },
  },
};
export default settings;

