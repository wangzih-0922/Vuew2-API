const app = {
    data() {
        return {
            url: "https://vue3-course-api.hexschool.io/v2",
            path: "chingno2004",
            user: {
                username: '',
                password: ''
            },
        }
    },
    methods: {
        login() {
            axios.post("https://vue3-course-api.hexschool.io/v2/admin/signin", this.user)
                .then((res) => {
                    console.log(res);
                    const { token, expired } = res.data;
                    document.cookie = `myCookie=${token}; expires= ${new Date(expired)};`
                    window.location = "products.html";
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
}

Vue.createApp(app).mount("#app");



