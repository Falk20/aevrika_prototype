<template>
  <el-menu class="aside-menu" router :default-active="currentRoute">
    <NavMenuItem
      v-for="(item, index) in menuItems"
      :key="`${item.name}-${index}`"
      :index="index"
      :icon="item.meta.icon"
      :name="item.name"
      :label="item.meta.label"
    />
  </el-menu>
</template>

<script>
import NavMenuItem from "./NavMenuItem";

export default {
  name: "nav-menu",

  components: {
    NavMenuItem,
  },

  computed: {
    menuItems() {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.inMenu
      );
    },
    currentRoute() {
      return (
        "" + this.menuItems.findIndex((item) => item.name === this.$route.name)
      );
    },
  },
};
</script>

<style>
.aside-menu {
  height: 100%;
}
</style>