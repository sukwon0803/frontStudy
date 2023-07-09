<style scoped></style>

<template>
  <div id="app">
    <p>
      <button v-on:click="clickAddBox">박스 추가</button>
    </p>
    <p>
      <b v-for="(val, i) in arr" v-bind:key="i">
        {{ val }}
        <Vue3104Counter v-bind:num="val"></Vue3104Counter>
      </b>
    </p>
  </div>
</template>

<script>
import Vue3104Counter from '../components/vue3104/Vue3104Counter.vue';
export default {
  props: [],
  data() {
    return {
      arr: [1, 2, 3, 4],
    };
  },
  //template: ``,
  methods: {
    clickAddBox(e) {
      console.log(e.target);
      this.$data.arr.push(this.$data.arr.length + 1);
    },
  },
  components: {
    Vue3104Counter: Vue3104Counter,
  },
  computed: {},
  watch: {},
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
};
</script>
