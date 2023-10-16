//================================= Задача 5 ==================================================================================================

// Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)

const { createApp } = Vue

const task5 = createApp({
  data() {
    return {
      arrSearchList: [
        {
          name: "vuejs.org",
          link: "https://ua.vuejs.org/",
          id: 1,
          title: "Vue.js",
          icon: "../img/vue-image.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus esse ipsum, voluptas asperiores distinctio fugiat vel culpa, laborum neque quas ducimus fugit cupiditate reiciendis delectus a nostrum rerum voluptate.",
        },
        {
          name: "Habr.com",
          link: "https://habr.com/ru/hubs/vuejs/articles/page3/",
          id: 2,
          title: "VueJS — Прогрессивный JavaScript-фреймворк / Хабр",
          icon: "../img/habr.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus esse ipsum, voluptas asperiores distinctio fugiat vel culpa, laborum neque quas ducimus fugit cupiditate reiciendis delectus a nostrum rerum voluptate.",
        },
        {
          name: "aw.club",
          link: "https://aw.club/global/ru/blog/work/best-javascript-frameworks-2023",
          id: 3,
          title: "Лучшие JavaScript-фреймворки 2023",
          icon: "../img/any-image.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus esse ipsum, voluptas asperiores distinctio fugiat vel culpa, laborum neque quas ducimus fugit cupiditate reiciendis delectus a nostrum rerum voluptate.",
        },
        {
          name: "MkDev.me",
          link: "https://mkdev.me/ru/posts/sravnenie-javascript-freymvorkov-vue-js-react-i-angular-2019",
          id: 4,
          title: "Сравнение JavaScript фреймворков Vue.js, React и ...",
          icon: "../img/any-image.jpg",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus esse ipsum, voluptas asperiores distinctio fugiat vel culpa, laborum neque quas ducimus fugit cupiditate reiciendis delectus a nostrum rerum voluptate.",
        },
      ],
    }
  },
})
task5.mount("#app5")

//========================================================================================================================================================
