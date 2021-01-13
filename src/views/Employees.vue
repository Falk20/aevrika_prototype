<template>
  <el-main>
    <Employees />
  </el-main>
</template>

<script>
import Employees from "@/components/widgets/Employees";

export default {
  name: "employees",
  components: {
    Employees,
  },
};
</script>
