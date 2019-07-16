<template>
  <v-container class="background ma-0 pa-0" style="height: inherit">
    <v-layout column align-space-around justify-center fill-height>
      <editor-window />
    </v-layout>
  </v-container>
</template>

<script>
import EditorWindow from "./components/EditorWindow";

export default {
  name: "app",
  components: {
    'editor-window': EditorWindow
  }
};
</script>

<style>
.background {
  background-color: #525252
}
.fill-parent {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>