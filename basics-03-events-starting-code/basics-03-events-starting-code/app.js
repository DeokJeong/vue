const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
      // 더 짧은 방법 사용 가능
      // this.counter++; 
    },
    reduce() {
      this.counter = this.counter - 1;
      // 더 짧은 방법 사용 가능
      // this.counter--;
    }
  }
});

app.mount('#events');
