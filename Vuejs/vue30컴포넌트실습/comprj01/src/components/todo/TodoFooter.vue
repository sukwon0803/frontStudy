<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>

<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:onclick="clearAll"
      >Clear All. component</span
    >
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    clearAll(e) {
      console.log(e.target);
      debugger;
      this.$emit('clearAll', e);
    },
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
};
</script>
