<template>
  <div class="employees-list">
    <EmployeesListItem
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
      @open-edit-dialog="openEditDialog($event)"
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

  methods: {
    openEditDialog(payload) {
      this.$emit("open-edit-dialog", payload);
    },
  },
};
</script>