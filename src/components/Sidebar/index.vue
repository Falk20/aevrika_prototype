<template>
  <el-aside class="ae__aside" width="200px">
    <NavMenu />
  </el-aside>
</template>

<script>
import NavMenu from "./NavMenu";

export default {
  name: "ae-sidebar",

  components: {
    NavMenu,
  },
};
</script>

<style>
.ae__aside {
  position: fixed;
  height: 100%;
}
</style>