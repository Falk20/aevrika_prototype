<template>
  <el-pagination
    :current-page="currentPage"
    background
    layout="total, prev, pager, next"
    :page-size="limit"
    :total="totalCount"
    @current-change="onChange"
    hide-on-single-page
  />
</template>

<script>
export default {
  name: "paginator",

  props: {
    isQuery: {
      type: Boolean,
      default: false,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 2,
    },
  },

  data() {
    return {
      currentPage: +this.$route.query.page || 1,
    };
  },

  methods: {
    onChange(pageNum) {
      this.currentPage = pageNum;

      if (this.isQuery) {
        this.$router.replace({
          query: { ...this.$route.query, page: pageNum },
        });
      }

      this.$emit("change-page", pageNum);
    },
  },

  watch: {
    $route(to) {
      this.currentPage = +to.query.page;
    },
  },
};
</script>