const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputName: '',
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    ketInputName() {
      this.confirmedName = event.target.value;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    setInputName() {
      this.inputName = event.target.value;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
      // 더 짧은 방법 사용 가능
      // this.counter++; 
    },
    reduce(num) {
      this.counter = this.counter - num;
      // 더 짧은 방법 사용 가능
      // this.counter--;
    },
  }
});

app.mount('#events');
