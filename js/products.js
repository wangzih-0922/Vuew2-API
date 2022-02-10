

const app = {
    data() {
        return {
            url: "https://vue3-course-api.hexschool.io/v2",
            path: "chingno2004",
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        getData() {
            axios.get(`${this.url}/api/${this.path}/admin/products`)
                .then((res) => {
                    this.products = res.data.products;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        checkDetail(item) {
            this.tempProduct = item;
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)myCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        axios.post(`${this.url}/api/user/check`)
            .then((res) => {
                console.log(res);
                this.getData();
            })
            .catch((error) => {
                console.log(error);
            })

    }
};

Vue.createApp(app).mount("#app");