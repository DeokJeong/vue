const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      // 더 짧은 방법 사용 가능
      // this.counter++; 
    },
    reduce(num) {
      this.counter = this.counter - num;
      // 더 짧은 방법 사용 가능
      // this.counter--;
    }
  }
});

app.mount('#events');
