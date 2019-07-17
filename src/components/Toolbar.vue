<template>
  <v-hover>
    <v-fade-transition slot-scope="{ hover }">
      <v-toolbar
        flat
        color="#525252"
        dark
        dense
        :class="hover ? 'appear' : 'disappear'"
      >
        <v-spacer />
        <v-btn icon><v-icon>save</v-icon></v-btn>
        <v-btn icon><v-icon>folder_open</v-icon></v-btn>
        <v-btn icon><v-icon>color_lens</v-icon></v-btn>
        <v-btn icon><v-icon>settings</v-icon></v-btn>
        <v-btn icon @click="toggleFullscreen"
          ><v-icon>{{ fullscreenIcon }}</v-icon></v-btn
        >
        <v-btn icon @click="closeWindow"><v-icon>close</v-icon></v-btn>
      </v-toolbar>
    </v-fade-transition>
  </v-hover>
</template>

<script>
export default {
  name: "Toolbar",
  computed: {
    fullscreenIcon() {
      return this.fullscreen ? "fullscreen_exit" : "fullscreen";
    }
  },
  methods: {
    closeWindow() {
      this.w.close();
    },
    toggleFullscreen() {
      if (this.fullscreen) {
        this.w.setFullScreen(false);
      } else {
        this.w.setFullScreen(true);
      }

      this.fullscreen = !this.fullscreen;
    }
  },
  data() {
    return {
      w: null,
      fullscreen: false
    };
  },
  mounted() {
    const { remote } = window.require("electron");
    this.w = remote.getCurrentWindow();
  }
};
</script>

<style>
.disappear {
  opacity: 0.05;
}
.appear {
  opacity: 1;
}
</style>
