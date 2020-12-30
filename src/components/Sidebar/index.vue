<template>
  <el-aside
    class="ae__aside"
    :class="{ 'ae__aside--hidden': isMobile }"
    width="200px"
  >
    <NavMenu />
  </el-aside>
</template>

<script>
import NavMenu from "./NavMenu";

import { mapGetters } from "vuex";

export default {
  name: "ae-sidebar",

  components: {
    NavMenu,
  },

  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style>
.ae__aside {
  position: fixed;
  height: 100%;
}

.ae__aside--hidden {
  left: -200px;
}
</style>