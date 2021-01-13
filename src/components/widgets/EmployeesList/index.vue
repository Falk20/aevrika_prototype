<template>
  <section class="widget">
    <h2 class="widget__title">Сотрудники</h2>
    <div class="widget__body">
      <p v-if="isErr">Ошибка</p>
      <p v-else>OK</p>
    </div>
  </section>
</template>

<script>
import Axios from "axios";

export default {
  name: "employees-list",

  data() {
    return {
      employees: null,
      isErr: false,
    };
  },

  methods: {
    async getEmployees() {
      try {
        const { data } = await Axios.get("/api/get-employees");

        this.employees = data;
      } catch {
        this.isErr = true;
      }
    },
  },

  created() {
    this.getEmployees();
  },
};
</script>

<style>
</style>