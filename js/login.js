const emailInput = document.querySelector("#username");
const pwInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const url = "https://vue3-course-api.hexschool.io/v2";
const path = "chingno2004";

loginBtn.addEventListener("click", login);

function login() {
    const username = emailInput.value;
    const password = pwInput.value;
    const user = {
        username,
        password
    };

    axios.post(`${url}/admin/signin`, user)
        .then((res) => {
            console.log(res.data);
            const { token, expired } = res.data;
            document.cookie = `myCookie=${token}; expires= ${new Date(expired)};`
            axios.defaults.headers.common['Authorization'] = token;
            checkLogin();
            window.location = "index.html";
        })
        .catch((error) => {
            console.log(error);
        });



};

function checkLogin() {
    axios.post(`${url}/api/user/check`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.dir(error);
        })
};
