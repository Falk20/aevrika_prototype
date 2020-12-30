<template>
  <el-main>
    <EmployeesList />
  </el-main>
</template>

<script>
import EmployeesList from "@/components/widgets/EmployeesList";

export default {
  name: "employees",
  components: {
    EmployeesList,
  },
};
</script>
