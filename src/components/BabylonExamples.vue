<template>
<main>
  <div id="loader">
    <p>Loading</p>

    <div id="loadingContainer">
      <div id="loadingBar"></div>
    </div>

    <p id="percentLoaded">25%</p>
  </div>
  <canvas></canvas>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CustomLoading } from '@/BabylonExamples/CustomLoading';

export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
    const canvas = document.querySelector("canvas")!;
    const loadingBar = document.getElementById("loadingBar")!;
    const percentLoaded = document.getElementById("percentLoaded")!;
    const loader = document.getElementById("loader")!;

    new CustomLoading(canvas, loadingBar, percentLoaded, loader);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#loader {
  width: 90%;
  height: 90%;
  background: slategrey;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
