const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
      boxESelected: false
    }
  },
  computed: {
    boxDClasses() {
      return { active: this.boxDSelected };
    }
  },
  methods: {
    boxSelected(box){
      if (box === 'A'){
        this.boxASelected = true;
      }else if (box === "B"){
        this.boxBSelected = true;
      }else if (box === "C"){
        // 토글을 원할때는 아래처럼 사용할 수 있음
        this.boxCSelected = !this.boxCSelected;
      }else if (box === "D"){
        this.boxDSelected = !this.boxDSelected;
      }else if (box === "E"){
        this.boxESelected = !this.boxESelected;
      }
    }
  }
});

app.mount('#styling');
