<template>
  <v-hover>
    <v-fade-transition slot-scope="{ hover }">
      <v-toolbar flat color="#525252" dark dense :class="hover ? 'appear' : 'disappear'">
        <v-spacer />
        <v-btn icon><v-icon>save</v-icon></v-btn>
        <v-btn icon><v-icon>folder_open</v-icon></v-btn>
        <v-btn icon><v-icon>color_lens</v-icon></v-btn>
        <v-btn icon><v-icon>settings</v-icon></v-btn>
        <v-btn icon><v-icon>fullscreen</v-icon></v-btn>
        <v-btn icon @click="closeWindow"><v-icon>close</v-icon></v-btn>
      </v-toolbar>
    </v-fade-transition>
  </v-hover>
</template>

<script>
// import { remote } from 'electron';

export default {
  name: "Toolbar",
  methods: {
    closeWindow() {
      console.log("closing...");
      // const window = remote.getCurrentWindow();
      // window.close();
    }
  }
}
</script>

<style>
.disappear {
  opacity: 0.05;
}
.appear {
  opacity: 0.9;
}
</style>
