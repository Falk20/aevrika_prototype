<template>
  <section class="widget">
    <h2 class="widget__title">Новости</h2>

    <el-carousel
      class="news-list"
      :interval="6000"
      v-loading="loading"
      :height="bannerHeight"
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
import { mapGetters } from "vuex";

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

  computed: {
    ...mapGetters(["isMobile"]),
    bannerHeight() {
      return this.isMobile ? "200px" : "400px";
    },
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