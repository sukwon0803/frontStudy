<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <h2>{{ msg }}</h2>
    <child1 />
    <child2 />
  </div>
</template>

<script>
import CompChild1 from '../components/vue3701/CompChild1.vue';
import CompChild2 from '../components/vue3701/CompChild2.vue';
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'Welcome Vue.js App',
    };
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
  },
  components: {
    child1: CompChild1,
    child2: CompChild2,
  },
};
</script>
