<template>
  <v-card>
    <v-card-title>
      <h1 class="headline font-weight-black">Configure Colors</h1>
    </v-card-title>
    <v-card-text>
      <h2 class="subheading font-weight-medium">Pick a background color:</h2>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-btn v-for="(color, index) in colors" :key="index" :color="color" class="elevation-0" icon @click="chooseColor(color)" />
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ColorDialog",
  methods: {
    chooseColor(color) {
      this.$emit('choose', color);
    }
  },
  data() {
    return {
      colors: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#607D8B",
        "#9E9E9E",
        "#000000"
      ]
    }
  }
}
</script>
