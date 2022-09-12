<template>
  <BaseList headline="All Bookmonkey Books" :list-items="bookList"
    ><p>A list of all the books from the API</p>
    <template #list-item="{ item }">
      <i>{{ item.title }}</i> - {{ item.isbn }}
      <router-link :to="{ name: 'booksDetail', params: { id: item.id } }"
        >Details</router-link
      >
    </template></BaseList
  >
</template>

<script>
import BaseList from "@/components/BaseList.vue";

export default {
  components: { BaseList },
  data() {
    return {
      bookList: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.bookList = await response.json();
  },
};
</script>
