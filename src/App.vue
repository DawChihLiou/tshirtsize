<template>
  <div id="app">
    <div class="container">
      <Display v-bind:chosenSize="chosenSize" />
      <OptionList v-bind:sizes="sizes" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Display from './components/Display.vue';
import OptionList from './components/OptionList.vue';

export default {
  name: 'app',
  components: {
    Display,
    OptionList,
  },
  computed: mapState({
    sizes: state => state.sizes,
    chosenSize: state => state.chosenSize,
  }),
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
}
</style>
