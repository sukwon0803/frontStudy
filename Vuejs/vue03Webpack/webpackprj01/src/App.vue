<style scoped>
header {
  text-align: center;
  height: 60px;
}

section {
  text-align: center;
  height: 150px;
}

footer {
  text-align: center;
  height: 60px;
}

/* step2. 배경색 지정*/
header {
  background-color: #efb14e;
}

section {
  background-color: #95db5e;
}

footer {
  background-color: #78d0d1;
}

/* step3. 여백 주기 - margin , padding */
header {
  margin: 0 0 20px 0;
}

section {
  margin: 40px 20px;
}

div {
  margin: 40px 20px;
}
</style>

<template>
  <div>
    <header-comp></header-comp>
    <section id="page1" data-role="page">
      <div class="content" data-role="content">컨텐츠</div>
    </section>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';

export default {
  components: {
    /* 예시) "태그명" : 컴포넌트명 */
    'header-comp': HeaderComp,
    'footer-comp': FooterComp,
  },
};
</script>
