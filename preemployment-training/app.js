Vue.createApp({
  data() {
    return {
      text: "Hello World!!!",
      lists: ["JS", "TS", "React", "Vue", "Angular", "Nuxt", "Next"],
      counter: 1,
      input: "",
    };
  },
  methods: {
    click() {
      this.counter++;
    },
  },
}).mount("#app");
