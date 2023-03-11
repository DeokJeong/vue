const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // computed는 메서드처럼 객체를 취함
  // 객체를 값으로 전달해서 연산
  // 메서드처럼 사용하지 않고 호출하지도 않을거기때문에
  // 연산 프로퍼티 이름은 데이터 프로퍼티처럼 정해야함
  // 다른객체를 눌러도 console가 뜨지 않음
  // 성능면에서 값을 출력하는 대부분의 경우 메서드보다 연산프로퍼티를 사용하는게 좋음
  computed: {
    fullname() {
      console.log('재실행됨')
      if ( this.name === ''){
        return '';
      }
      return this.name + ' ' + '작성'
    }
  },
  // 페이지에서 어떤 항목이 변경되든 값을 재계산하려는 경우에만 메서드 사용
  methods: {
    outputFullname() {
      if ( this.name === ''){
        return '';
      }
      return this.name + ' ' + '작성'
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
