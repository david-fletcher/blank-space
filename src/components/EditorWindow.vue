<template>
  <v-container class="ma-0 pa-0" grid-list-xs fluid>
    <v-layout align-space-around justify-center column fill-height>
      <textarea
        v-model="file"
        class="editor"
        :style="`background-color: ${background}; color: ${text}`"
        @keydown.tab="addTab"
        ref="editor"
      />
    </v-layout>
    <a hidden ref="download" />
    <input hidden type="file" ref="upload" accept=".txt" @change="chooseFile" />
  </v-container>
</template>

<script>
export default {
  name: "EditorWindow",
  props: {
    bus: {
      type: Object,
      required: true
    }
  },
  watch: {
    bus: {
      immediate: true,
      handler(bus) {
        if(bus) {
          this.eventBus = bus;
          this.eventBus.$on('save', () => this.download());
          this.eventBus.$on('open', () => this.upload());
        }
      }
    }
  },
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
      if ($event.preventDefault) {
        $event.preventDefault();
      }

      const editor = this.$refs.editor;
      const oldCurPos = editor.selectionStart;
      this.file = this.insertString(this.file, oldCurPos, "    ");
      this.$nextTick(() => this.setCaretToPos(editor, oldCurPos + 4));

      return false;
    },

    insertString(str, index, insert) {
      return str.substring(0, index) + insert + str.substring(index, str.length);
    },

    setCaretToPos (input, pos) {
      input.focus();
      input.setSelectionRange(pos, pos);
    },

    download() {
      const link = this.$refs.download;
      this.$nextTick(() => {
        link.href = URL.createObjectURL(new Blob([this.file], { type: "plain/text" }));
        link.download = "Untitled.txt";
        link.click();
      });
    },

    upload() {
      const file = this.$refs.upload;
      this.$nextTick(() => file.click());
    },

    chooseFile($event) {
      const files = $event.target.files;
      if (files.length > 0) {
        let reader = new FileReader();
        reader.onload = this.openFile;
        reader.readAsText(files[0]);
      }
    },

    openFile($event) {
      this.file = $event.target.result;
    }
  },
  data() {
    return {
      file: "",
      eventBus: null
    };
  }
};
</script>

<style>
.editor {
  resize: none;
  outline: none;
  font-family: 'Inconsolata', monospace;
  font-size: larger;
  letter-spacing: 0.1em;
  height: 100%;
  padding: 10%;
  padding-top: 5%;
}
</style>
