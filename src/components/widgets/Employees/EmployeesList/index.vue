<template>
  <div class="employees-list">
    <EmployeesListItem
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
    />
  </div>
</template>

<script>
import EmployeesListItem from "./EmployeesListItem";

export default {
  name: "employees-list",

  components: {
    EmployeesListItem,
  },

  props: {
    employees: {
      type: Array,
    },
  },
};
</script>