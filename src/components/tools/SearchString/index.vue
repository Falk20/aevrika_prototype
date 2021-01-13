<template>
  <form @submit.prevent="submitSearch">
    <el-input
      placeholder="Введите ФИО сотрудника"
      v-model="search"
      class="ae__search-string"
      clearable
      @input="delayedSearch"
    >
      <el-button
        type="primary"
        native-type="submit"
        slot="append"
        icon="el-icon-search"
      ></el-button>
    </el-input>
  </form>
</template>

<script>
export default {
  name: "search-string",

  props: {
    isQuery: {
      type: Boolean,
      default: false,
    },
    queryName: {
      type: String,
      default: "query",
    },
    delay: {
      type: Number,
      default: 500,
    },
  },

  data() {
    return {
      search: "",
      delayToken: null,
    };
  },

  methods: {
    updateRouteQuery(lengthLimit = 2) {
      let newRoute = {
        query: { ...this.$route.query, page: 1 },
      };

      if (this.search.length > lengthLimit) {
        newRoute.query[this.queryName] = this.search;
        this.$router.replace(newRoute);
        this.$emit("start-search", this.search);
      } else if (newRoute.query[this.queryName]) {
        newRoute.query[this.queryName] = undefined;
        this.$router.replace(newRoute);
      }
    },

    submitSearch() {
      const vm = this;

      if (this.search !== this.$route.query[this.queryName])
        if (vm.isQuery) {
          vm.updateRouteQuery(0);
        } else {
          this.$emit("start-search", this.search);
        }
    },

    delayedSearch() {
      const vm = this;

      clearTimeout(vm.delayToken);
      vm.delayToken = setTimeout(() => {
        if (vm.isQuery) {
          vm.updateRouteQuery();
        } else {
          vm.$emit("start-search", vm.search);
        }
      }, vm.delay);
    },
  },

  created() {
    if (this.isQuery) {
      this.search = this.$route.query[this.queryName] || "";
    }
  },
};
</script>

<style>
</style>