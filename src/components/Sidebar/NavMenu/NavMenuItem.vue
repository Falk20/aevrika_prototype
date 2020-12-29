<template>
  <el-menu-item :index="index.toString()" :route="{ name: name }">
    <i :class="icon"></i>
    <span>{{ label }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "nav-menu-item",
  props: ["index", "icon", "name", "label"],
};
</script>