<style scoped></style>

<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <Vue3403Comp v-on:showLog="printText"></Vue3403Comp>
  </div>
</template>

<script>
import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    return {
      mesg: null,
    };
  },
  methods: {
    printText(param1, param2) {
      debugger;
      //console.log(e.target);
      console.log(param1, param2);
      this.$data.mesg = `param1=${param1}, param2=${param2}`;
    },
  },
  components: {
    Vue3403Comp: Vue3403Comp,
  },
};
</script>
