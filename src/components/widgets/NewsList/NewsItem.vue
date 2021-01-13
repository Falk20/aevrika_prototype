<template>
  <router-link
    class="news-list__item"
    :to="{ path: `/news-detail/${news.id}` }"
    >{{ news.header }}</router-link
  >
</template>

<script>
export default {
  name: "news-list-item",
  props: {
    news: {
      type: Object,
    },
  },
};
</script>