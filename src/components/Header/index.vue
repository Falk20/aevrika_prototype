<template>
  <el-header class="ae__header">
    <div class="ae__header__title-container">
      <h1 class="ae__header__title">{{ title }}</h1>
    </div>
    <div></div>
  </el-header>
</template>

<script>
export default {
  name: "ae-header",

  computed: {
    title() {
      return this.$route.meta.label;
    },
  },
};
</script>

<style>
.ae__header {
  position: fixed;
  width: 100%;
  z-index: 1;

  background: var(--main-color);

  display: grid;

  grid-template-columns: 2fr 1fr;

  /* display: flex;

  align-items: center; */
}

.ae__header__title-container {
  display: flex;
  align-items: center;
}

.ae__header__title {
  font-size: 24px;

  color: var(--white);
}
</style>