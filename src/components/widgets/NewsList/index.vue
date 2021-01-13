<template>
  <section class="widget">
    <h2 class="widget__title">Новости</h2>

    <el-carousel
      type="card"
      class="news-list"
      :interval="6000"
      v-loading="loading"
      height="400px"
    >
      <el-carousel-item v-for="news in newsList" :key="news.id">
        <NewsItem :news="news" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
import Axios from "axios";

import NewsItem from "./NewsItem";

export default {
  name: "news-list",

  components: {
    NewsItem,
  },

  data() {
    return {
      loading: true,
      errored: false,

      newsList: [],
    };
  },

  methods: {
    async getNewsList() {
      try {
        this.loading = true;

        const {
          data: { list: newsList },
        } = await Axios.get("/api/get-news-list");

        this.newsList = newsList;
      } catch {
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
  },

  created() {
    this.getNewsList();
  },
};
</script>