//================================= Задача 1 ====================================
// Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

const { createApp } = Vue
const loginList = [
  {
    login: "max",
    password: "12345",
  },
  {
    login: "dima",
    password: "00000",
  },
  {
    login: "lena",
    password: "11111",
  },
]

const task1 = createApp({
  data() {
    return {
      userLogin: null,
      userPassword: null,
      colorClass: null,
      message: null,
    }
  },
  methods: {
		correctLogin(){
			const searchLogin = loginList.find((item) =>{
				return item.login === this.userLogin.toLowerCase() && item.password === this.userPassword
			})
			if (searchLogin) {
        this.colorClass = "correctLoginClass"
		  this.message = null
        this.userLogin = null
        this.userPassword = null
      } else if (this.userLogin.toLowerCase() === "ivan") {
        this.colorClass = "errorBlue"
        this.message = "Вхід заборонено"
        this.userLogin = null
        this.userPassword = null
      } else {
			this.colorClass = "errorDefault"
			this.message = "Вхід заборонено"
			this.userLogin = null
			this.userPassword = null
				}
		}
  },
})
task1.mount("#app")







