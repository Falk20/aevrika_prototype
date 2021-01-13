<template>
  <el-main>
    <NewsList />
  </el-main>
</template>

<script>
import NewsList from "@/components/widgets/NewsList";

export default {
  name: "news",
  components: {
    NewsList,
  },
};
</script>