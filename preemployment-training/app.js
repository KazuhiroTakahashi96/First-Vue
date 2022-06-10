// https://router.vuejs.org/guide/#javascript
// https://reffect.co.jp/vue/first-time-vue-router#google_vignette

// 1.ログインページにユーザー名とパスワードの入力項目を設定
// 2.入力チェックをvee-validateで実装
// ユーザー名入力必須
// パスワード6字以上入力必須
// 3.ログインボタンでページに遷移できるよう実装

import Login from "./component/login";

const Home = { template: "<h3>This is Home page</h3>" };
const Works = { template: "<h3>This is Works page.</h3>" };
const About = { template: "<h3>This is About page</h3>" };

const routes = [
  { path: "/", component: Home },
  { path: "/works", component: Works },
  { path: "/about", component: About },
  { path: "/login", component: Login },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({
  // data() {
  //   return {
  //     text: "Hello World!!!",
  //     lists: ["JS", "TS", "React", "Vue", "Angular", "Nuxt", "Next"],
  //     counter: 1,
  //     input: "",
  //   };
  // },
  // methods: {
  //   click() {
  //     this.counter++;
  //   },
  // },
});

app.use(router);

app.mount("#app");
