<template>
  <v-container
    class="background ma-0 pa-0"
    style="max-width: 100%; height: inherit"
  >
    <v-layout column align-space-around justify-center fill-height>
      <toolbar class="toolbar" />
      <editor-window />
    </v-layout>
  </v-container>
</template>

<script>
import EditorWindow from "./components/EditorWindow";
import Toolbar from "./components/Toolbar";

export default {
  name: "app",
  components: {
    "editor-window": EditorWindow,
    toolbar: Toolbar
  }
};
</script>

<style>
.background {
  background-color: #525252;
}
.fill-parent {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>
