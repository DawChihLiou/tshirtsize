<template>
  <div class="size-list">
    <div class="size-list__option"
      v-for="size in sizes"
      v-bind:key="size.id"
      v-on:click="choseSize(size)">
      <span v-html="size.display"></span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'OptionList',
  props: ['sizes'],
  methods: {
    ...mapMutations([
      'choseSize',
    ]),
  },
  created() {
    this.choseSize(this.sizes[0]);
  },
};
</script>

<style scoped lang="scss">
  .size-list {
    display: flex;
    justify-content: center;

    &__option {
      padding: 8px;
      cursor: pointer;
      font-weight: 100;
    }
  }
</style>
