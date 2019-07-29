<template>
  <v-container class="ma-0 pa-0" grid-list-xs fluid>
    <v-layout align-space-around justify-center column fill-height>
      <textarea
        v-model="file"
        class="editor"
        :style="`background-color: ${background}; color: ${text}`"
        @keydown.tab="addTab"
      />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "EditorWindow",
  computed: {
    background() {
      return this.$store.state.$background;
    },
    text() {
      return this.$store.state.$textcolor;
    }
  },
  methods: {
    addTab($event) {
      // FIXME: work with current cursor position
      this.file += "    "; // four spaces
      if ($event.preventDefault) {
        $event.preventDefault();
      }
      return false;
    }
  },
  data() {
    return {
      file: ""
    };
  }
};
</script>

<style>
.editor {
  resize: none;
  outline: none;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: larger;
  height: 100%;
  padding: 10%;
  padding-top: 5%;
}
</style>
