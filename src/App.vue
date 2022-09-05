<template>
  <MyFirstVueComponent />
  <h3>Test</h3>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Hallo</p>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <h1>Count all people by their age</h1>
  <h2>Total count: {{ totalCount }}</h2>
  <!--Index auslesen (aktuelle Iteration) -> entspricht Position im Array -->
  <AttendeeCounter
    v-for="({ text, counter }, index) of attendeeCounters"
    :key="text"
    :text="text"
    :counter="counter"
    @increase="handleIncrease(index)"
    @decrease="handleDecrease(index)"
  />
  <BaseList :headline="fruitList.headline" :list-items="fruitList.data"
    ><template v-slot:header
      ><h5>{{ fruitList.headline }}</h5></template
    >
    {{ fruitList.introText }}
  </BaseList>
  <BaseList :headline="attendeeList.headline" :list-items="attendeeList.data"
    >{{ attendeeList.introText }}
    <template #list-item="scopedData">
      <i>{{ scopedData.item.name }}</i> - {{ scopedData.item.age }}
    </template>
  </BaseList>
  <!-- Template override mithilfe eines scoped slots -->
  <BaseList headline="All fruits with emojis" :list-items="fruitList.data">
    <template #list-item="scopedData"
      ><strong>{{ scopedData.item.text }}</strong> -
      {{ scopedData.item.emoji }}</template
    >
    Früchte mit <strong>Emojis</strong> in einer Liste
  </BaseList>
</template>

<script>
import MyFirstVueComponent from "@/components/MyFirstVueComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AttendeeCounter from "@/components/AttendeeCounter.vue";
import BaseList from "@/components/BaseList.vue";

//Wird immer gebraucht, wenn Komponente veröffentlicht werden soll
export default {
  name: "App",
  data() {
    return {
      attendeeCounters: [
        {
          text: "5-12 years",
          counter: 0,
        },
        { text: "12-18 years", counter: 0 },
        { text: "18-30 years", counter: 0 },
        { text: "30-50 years", counter: 0 },
        { text: "50 > years", counter: 0 },
      ],
      fruitList: {
        headline: "Fruits",
        introText: "A list of available fruits",
        data: [
          {
            id: 41,
            text: "Apple",
            emoji: "🍏",
          },
          {
            id: 22,
            text: "Melon",
            emoji: "🍉",
          },
        ],
      },
      attendeeList: {
        headline: "Bootcamp Attendees",
        introText: "A list of bootcamp attendees in 2022",
        data: [
          {
            id: 41,
            name: "John Doe",
            age: "32",
          },
          {
            id: 22,
            name: "Jane Doe",
            age: "33",
          },
        ],
      },
    };
  },
  computed: {
    totalCount() {
      let totalCount = 0;
      this.attendeeCounters.forEach(({ counter }) => (totalCount += counter));
      return totalCount;
    },
  },
  components: {
    HelloWorld,
    MyFirstVueComponent,
    AttendeeCounter,
    BaseList,
  },
  methods: {
    //Index auslesen und counter um 1 hochsetzen
    handleIncrease(index) {
      // console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter += 1;
    },
    handleDecrease(index) {
      // console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter -= 1;
    },
  },
};
</script>

<style>
@import url("./assets/base.css");
</style>

<!--
<style>
h3 {
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
