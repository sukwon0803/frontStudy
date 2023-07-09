<style scoped>
input:focus {
  background-color: lightskyblue;
  border: 3px solid #555;
}
</style>

<template>
  <div id="app">
    <p>
      ref 사용 예제<br />
      페이지가 로딩되면 myinput1에 포커스를 주시오 <br />
      버튼을 클릭하면 myinput2에 포커스를 주시오 <br />
    </p>
    <div>
      <div>
        <label>myinput1</label>
        <input type="text" ref="myinput1" v-model="message" />
      </div>
      <div>
        {{ message }}
      </div>
    </div>
    <div>
      <label>myinput2</label>
      <input type="text" ref="myinput2" />
    </div>
    <button v-on:click="handlerMyinput1">포커스 이동</button>
  </div>
</template>

<script>
export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      message: null,
    };
  },
  //template: ``,
  methods: {
    handlerMyinput1(e) {
      console.log(e.target);
      debugger;
      this.$refs.myinput2.focus();
    },
  },
  mounted() {
    console.log('mounted');
    // 페이지가 로딩되면 myinput1에 포커스 주기
    this.$refs.myinput1.focus();
  },
};
</script>
