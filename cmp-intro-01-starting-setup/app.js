const app = Vue.createApp({
  data() {
    return {
      
    };
  }
});
// 컴포넌트의 이름은 커스텀 HTML 태그에는 복수의 단어를 사용함 / 충돌을 막기위함
// 내장된 모든 HTML 요소는 한 단어로 되어있으니 복수의 단어를 사용하면됨
// 컴포넌트는 미니앱이라고 보면 됨 ( 데이터나 메서드를 가질 수 있음 )
// 컴포넌트를 만든 값이 부모앱과 통신하지않기때문에 충돌은 안나지만 더이상 필요없으면 메인앱에서 프로퍼티 제거
// 미니앱이라서 자체 탬플릿이 있어야함 / 컴포넌트를 마운트하거나 mount를 호출하지않음
app.component('friend-contact', {
  template: `
    <li v-for="friend in friends" :key="friend.id">
      <h2>{{ friend.id }}</h2>
      <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return { 
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "010 1234 5678",
          email: 'manuel@localhost.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});
app.mount("#app");
