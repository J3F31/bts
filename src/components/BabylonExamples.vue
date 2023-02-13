<template>
<main>
  <!-- <div id="loader">
    <p>Loading</p>

    <div id="loadingContainer">
      <div id="loadingBar"></div>
    </div>

    <p id="percentLoaded">25%</p>
  </div> -->
  <canvas></canvas>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PBR } from '@/BabylonExamples/PBR';

export default defineComponent({
  name: 'BabylonExamples',
  mounted() {
    const canvas = document.querySelector("canvas")!;
    // const loadingBar = document.getElementById("loadingBar")!;
    // const percentLoaded = document.getElementById("percentLoaded")!;
    // const loader = document.getElementById("loader")!;

    // new CustomLoading(canvas, loadingBar, percentLoaded, loader);
    new PBR(canvas);
  }
});
</script>

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

canvas {
  height: 100dvh;
}
#embed-host {
  z-index: 1000 !important;
  position: absolute !important;
}
</style>
