<template>
  <div class="display">
    <h1 v-if="chosenSize" v-html="chosenSize.display"></h1>
  </div>
</template>

<script>
export default {
  name: 'Display',
  props: ['chosenSize'],
};
</script>

<style scoped lang="scss">
  .display {
    h1 {
      font-size: 8em;
      text-align: center;
      font-weight: 100;
    }
  }
</style>
