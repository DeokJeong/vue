const app = Vue.createApp({
    data() {
        return {
            courseGoal: '완성했다 뷰!',
            vueLink : 'https://naver.com',
            courseGoalA : 'Finish the course and learn Vue!',
            courseGoalB : '<h2 class="color_pink">Master Vue and build amazing apps!</h2>'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if ( randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');
