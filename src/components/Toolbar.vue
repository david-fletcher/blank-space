<template>
  <v-hover>
    <v-fade-transition slot-scope="{ hover }">
      <v-toolbar
        flat
        dense
        :class="hover ? 'appear' : 'disappear'"
        :style="`background-color: ${background}`"
      >
        <v-spacer />
        <v-btn icon @click="$emit('save')"><v-icon>save</v-icon></v-btn>
        <v-btn icon @click="$emit('open')"><v-icon>folder_open</v-icon></v-btn>
        <v-btn icon @click="$emit('color')"><v-icon>color_lens</v-icon></v-btn>
        <v-btn icon @click="toggleDarkMode"
          ><v-icon>{{
            darkmode ? "brightness_2" : "brightness_high"
          }}</v-icon></v-btn
        >
        <v-btn icon @click="$emit('settings')"><v-icon>settings</v-icon></v-btn>
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
    },
    
    background() {
      return this.$store.state.$background;
    },
    
    darkmode() {
      return this.$store.state.$darkmode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.disappear {
  opacity: 0;
}
.appear {
  opacity: 1;
}
</style>
