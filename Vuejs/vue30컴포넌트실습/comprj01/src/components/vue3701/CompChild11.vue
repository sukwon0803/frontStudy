<style scoped>
.test {
  font-style: italic;
}
</style>

<template>
  <div class="test">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'child11',
    };
  },
};
</script>
