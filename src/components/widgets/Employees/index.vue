<template>
  <section class="widget">
    <h2 class="widget__title">Сотрудники</h2>

    <div class="widget__toolbar">
      <SearchString class="widget__toolbar-search" isQuery queryName="search" />
      <el-button
        type="primary"
        class="widget__toolbar-add"
        icon="el-icon-plus"
      />
    </div>

    <div
      v-loading="loading"
      element-loading-background="white"
      class="widget__body"
    >
      <p v-if="errored">Ошибка загрузки данных</p>
      <template v-else-if="employees">
        <p v-if="employees.length === 0">
          По запросу "{{ $route.query.search }}" ничего не найдено
        </p>

        <EmployeesList v-else :employees="employees" />

        <Paginator isQuery :totalCount="totalCount" :limit="limit" />
      </template>
    </div>
  </section>
</template>

<script>
import Axios from "axios";

const CancelToken = Axios.CancelToken;
let cancel;

import SearchString from "@/components/tools/SearchString";
import Paginator from "@/components/tools/Paginator";
import EmployeesList from "./EmployeesList";

export default {
  name: "employees",

  components: {
    SearchString,
    Paginator,
    EmployeesList,
  },

  data() {
    return {
      employees: null,
      totalCount: null,
      errored: false,
      loading: false,
      limit: 10,
    };
  },

  computed: {
    offset() {
      return (+this.$route.query.page - 1) * this.limit + 1 || 1;
    },
  },

  methods: {
    async getEmployees(search, limit, offset) {
      try {
        this.loading = true;
        if (cancel) {
          cancel();
        }

        const {
          data: { list: employees, total_count: totalCount },
        } = await Axios.get("/api/get-employees", {
          params: {
            search: search,
            limit: +limit,
            offset: +offset,
          },

          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
        });

        this.employees = employees;
        this.totalCount = totalCount;
      } catch {
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
  },

  watch: {
    $route: {
      handler(to) {
        this.getEmployees(to.query.search, this.limit, this.offset);
      },
      immediate: true,
    },
  },
};
</script>