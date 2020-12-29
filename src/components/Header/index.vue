<template>
  <el-header class="ae__header">
    <h1 class="ae__header-title">{{ title }}</h1>
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

  display: flex;

  align-items: center;
}

.ae__header-title {
  font-size: 24px;

  color: var(--white);
}
</style>