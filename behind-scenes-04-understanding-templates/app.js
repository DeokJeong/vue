const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // ref기능을 통해 필요할 때만 추출해서 쓸 수 있게 됨
      this.message = this.$refs.userText.value;
    },
  },
  // lifecycle
  beforeCreate() {
    console.log('beforeCreate()');
    // 가장 먼저 실행됨
    // 로그로 출력하거나 서버에 HTTP요청 전송 및 타이머 설정 등 필요한 작업은 뭐든 가능
    // 화면에서 아무것도 볼 수 없음 // vue앱도 완전히 초기화 된 상태가 아님
  },
  // 생성
  created() {
    // data를 반응형으로 추적 computed, methods, watch 등이 활성화 지만 DOM에는 추가되지않음
    // 인스턴스가 작성된 후 동기적으로 호출
    // 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료
    // 마운트가 시작되지 않았으므로 $el 속성을 아직 사용할 수 없음
  },
  beforeMount() {
    // 가상 DOM이 생성되어 있으나 실제 DOM에 부착되지는 않은 상태
  },
  // 부착
  mounted() {
    // 일반적으로 가장 많이 사용하는 mounted훅
    // 가상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로, this.$el을 비롯한 data, computed, methods, watch 등 모든 요소에 접근이 가능
    // el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출
    // 트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, mounted가 호출 될 때 vm.$el도 문서 안에 있게 됨
  },
  beforeUpdate() {
    // 변화 직전에 호출되는 것이 바로 beforeUpdate훅
    // 변할 값을 이용해 가상 DOM을 렌더링하기 전이지만, 이 값을 이용해 작업할 수는 있음
    // 이 훅에서 값들을 추가적으로 변화시키더라도 랜더링을 추가로 호출하지는 않음
  },
  // 업데이트
  updated() {
    // 가상 DOM을 렌더링 하고 실제 DOM이 변경된 이후에 호출되는 updated 훅
    // 변경된 data가 DOM에도 적용된 상태
    // 변경된 값들을 DOM을 이용해 접근하고 싶다면, updated훅이 가장 적절
    // 이 훅에서 data를 변경하는 것은 무한 루프를 일으킬 수 있으므로 이 훅에서는 데이터를 직접 바꾸어서는 안됌
  },
  beforeDestroy () {
    // 인스턴스가 해체되기 직전에 beforeDestroy훅이 호출
    // 아직 해체되기 이전이므로, 인스턴스는 완전하게 작동하기 때문에 모든 속성에 접근이 가능
    // 이 단계에서는 이벤트 리스너를 해제하는 등 인스턴스가 사라지기 전에 해야할 일들을 처리
  },
  // 없어짐
  destroyed () {
    // 인스턴스가 해체되고 난 직후에 destroyed 훅이 호출
    // 해체가 끝난 이후기 때문에, 인스턴스의 속성에 접근할 수 없습니다. 또한 하위 Vue 인스턴스 역시 삭제
  }
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2');

// ....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);