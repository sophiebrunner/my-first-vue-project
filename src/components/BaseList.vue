<template>
  <slot name="header">
    <h2>{{ headline }}</h2></slot
  >
  <div class="intro-text"><slot /></div>
  <ul>
    <li v-for="item in listItems" :key="item.id">
      <!-- Scope soll Schlüssel item haben; unendlich viele Infos in Scope reinpacken, indem auf named slot properties gelegt werden -->
      <slot :item="item" name="list-item">{{ item.text }}</slot>
    </li>
  </ul>
</template>

<script>
const timestamp = +new Date();

export default {
  name: "BaseList",
  props: {
    headline: String,
    listItems: {
      type: Array,
      default: () => [{ text: "No items exist", id: timestamp }],
    },
  },
};
</script>
