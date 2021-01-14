<template>
  <section class="widget news-detail" v-loading="loading">
    <template v-if="!errored">
      <h2 class="widget__title">{{ news.header }}</h2>
      <p class="news-detail__date">
        {{ publicationDate }}
      </p>
      <div class="widget__body">
        <div class="news-detail__container">
          <el-image
            class="news-detail_image"
            v-if="news.picture"
            :src="image"
            fit="contain"
          >
            <p slot="error" class="news-detail_image-error">
              Не удалось закрузить изображение
            </p>
          </el-image>
          <p v-html="news.body" />
        </div>
      </div>
    </template>
    <h2 class="widget__title" v-else>Такой новости нет</h2>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "news-widget",

  data() {
    return {
      loading: false,
      errored: false,
      id: this.$route.params.id,
      news: {},
    };
  },

  computed: {
    publicationDate() {
      const { news } = this;

      return new Date(news.publication_date).toLocaleString("ru", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
    },
    image() {
      const { news } = this;

      return `data:image/png;base64, ${news.picture}`;
    },
  },

  methods: {
    async getNews() {
      try {
        this.loading = true;

        const { data } = await axios.get("/api/get-news", {
          params: {
            id: this.id,
          },
        });

        this.news = data;
      } catch {
        this.errored = true;
      } finally {
        this.loading = false;
      }
    },
  },

  created() {
    this.getNews();
  },
};
</script>