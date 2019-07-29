<template>
  <v-app :dark="darkmode">
    <v-container
      class="ma-0 pa-0"
      style="max-width: 100%; height: inherit"
      :style="`background-color: ${background}`"
    >
      <v-layout column align-space-around justify-center fill-height>
        <toolbar
          class="toolbar"
          @color="openColorDialog"
          @settings="openSettingsDialog"
        />
        <editor-window />
      </v-layout>

      <v-dialog v-model="showColorDialog">
        <color-dialog @choose="changeBackground" />
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import EditorWindow from "./components/EditorWindow";
import Toolbar from "./components/Toolbar";
import ColorDialog from "./components/ColorDialog";

export default {
  name: "app",
  components: {
    "color-dialog": ColorDialog,
    "editor-window": EditorWindow,
    toolbar: Toolbar
  },
  computed: {
    background() {
      return this.$store.state.$background;
    },
    darkmode() {
      return this.$store.state.$darkmode;
    }
  },
  methods: {
    openColorDialog() {
      this.showColorDialog = true;
    },
    openSettingsDialog() {
      console.log("opening settings...");
    },
    changeBackground(color) {
      this.$store.commit("updateBackground", color);
      this.showColorDialog = false;
    }
  },
  data() {
    return {
      showColorDialog: false
    };
  }
};
</script>

<style>
.fill-parent {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
