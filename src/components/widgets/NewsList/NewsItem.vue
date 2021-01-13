<template>
  <router-link
    class="news-list__item"
    :to="{ path: `/news-detail/${news.id}` }"
  >
    <h3 class="news-list__item-header">{{ news.header }}</h3>

    <el-image :src="image" fit="cover" class="news-list__item-cover">
      <div class="news-list__item-cover--empty" slot="error"></div>
    </el-image>
  </router-link>
</template>

<script>
export default {
  name: "news-list-item",
  props: {
    news: {
      type: Object,
    },
  },

  computed: {
    image() {
      return `data:image/png;base64, ${this.news.picture}`;
    },
  },
};
</script>