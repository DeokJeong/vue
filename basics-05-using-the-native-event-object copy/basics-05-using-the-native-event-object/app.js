const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: ''
    };
  },
  // 연산프로퍼티 대신 사용할 수 있음
  // 데이터나 연산프로퍼티 이름을 감시자 메서드에서 메서드 이름으로 사용하면
  // 프로퍼티에 있는 이름이 변경될 때마다 감시자 메서드 실행
  // watch: {
  //   // name() {
  //   //   this.fullname = this.name + ' ' + '메모';
  //   // }
  //   name(value) {
  //     if (value === '') {
  //       return this.fullname = '';
  //     }
  //     this.fullname = value + ' ' + this.lastName;
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       return this.fullname = '';
  //     }
  //     this.fullname = this.name + ' ' + value;
  //   },
  // },
  // computed는 메서드처럼 객체를 취함
  // 객체를 값으로 전달해서 연산
  // 메서드처럼 사용하지 않고 호출하지도 않을거기때문에
  // 연산 프로퍼티 이름은 데이터 프로퍼티처럼 정해야함
  // 다른객체를 눌러도 console가 뜨지 않음
  // 성능면에서 값을 출력하는 대부분의 경우 메서드보다 연산프로퍼티를 사용하는게 좋음
  // 감시자와 비교했을때 비교적 코드가 짧음
  // 아래와 같은 식은 감시자의 주요 용도가 아님
  computed: {
    fullname() {
      console.log('재실행됨')
      if ( this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName
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
