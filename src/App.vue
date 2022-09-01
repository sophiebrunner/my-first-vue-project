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
</template>

<script>
import MyFirstVueComponent from "@/components/MyFirstVueComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AttendeeCounter from "@/components/AttendeeCounter.vue";

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
