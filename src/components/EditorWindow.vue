<template>
  <v-container class="ma-0 pa-0" grid-list-xs fluid>
    <v-layout align-space-around justify-center column fill-height>
      <textarea
        v-model="file"
        class="editor white--text"
        :style="`background-color: ${background}`"
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
    }
  },
  methods: {
    addTab($event) {
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
