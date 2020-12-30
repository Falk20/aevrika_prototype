<template>
  <el-container direction="vertical" class="ae">
    <Header />
    <el-container class="ae__aside-main-container">
      <Sidebar />
      <el-container
        direction="vertical"
        class="ae__main-container"
        :class="{ 'ae__main-container--mobile': isMobile }"
      >
        <router-view class="ae__main" />
        <Footer />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapGetters } from "vuex";

export default {
  name: "app",

  components: {
    Sidebar,
    Header,
    Footer,
  },

  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>


<style>
.ae__aside-main-container {
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}

.ae__main-container {
  margin-left: 200px;

  display: grid !important;

  grid-template-rows: 1fr 100px;
}

.ae__main-container--mobile {
  margin-left: 0;
}

.ae__main {
  background: var(--secondary-color);
}
</style>