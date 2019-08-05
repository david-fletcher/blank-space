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
        if (bus) {
          this.eventBus = bus;
          this.eventBus.$on("save", () => this.download());
          this.eventBus.$on("open", () => this.upload());
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
      return (
        str.substring(0, index) + insert + str.substring(index, str.length)
      );
    },

    setCaretToPos(input, pos) {
      input.focus();
      input.setSelectionRange(pos, pos);
    },

    download() {
      let filepath = this.remote.dialog.showSaveDialog(
        this.remote.getCurrentWindow(),
        {
          filters: [{ name: "Plain Text", extensions: ["txt"] }]
        }
      );

      this.fs.writeFile(filepath, this.file, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("saved");
      });
    },

    upload() {
      let files = this.remote.dialog.showOpenDialog(
        this.remote.getCurrentWindow(),
        {
          properties: ["openFile"],
          filters: [{ name: "Plain Text", extensions: ["txt", "text"] }]
        }
      );

      if (files.length > 0) {
        this.fs.readFile(files[0], "utf-8", (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          this.file = data;
        });
      }
    }
  },
  data() {
    return {
      file: "",
      eventBus: null,
      remote: null,
      fs: null
    };
  },
  mounted() {
    const { remote } = window.require("electron");
    this.remote = remote;

    const fs = window.require("fs");
    this.fs = fs;
  }
};
</script>

<style>
.editor {
  resize: none;
  outline: none;
  font-family: "Inconsolata", monospace;
  font-size: larger;
  letter-spacing: 0.1em;
  height: 100%;
  padding: 10%;
  padding-top: 5%;
}
</style>
