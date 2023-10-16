//=================================================== Задача 3 ========================================================================
// Задача 3.Елемент тренажера англійської. Виводимо зображення елемента і слово. Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

const { createApp } = Vue

const task3 = createApp({
  data() {
    return {
      userAnswer: null,
      answerClass: null,
      message: null,
		wordsList:[
        {
          title: "Apple",
          src: "../img/apple.jpg",
          answer: "яблоко",
          id: 1,
        },
        {
          title: "Car",
          answer: "автомобіль",
          src: "../img/car.jpg",
          id: 2,
        },
        {
          title: "Table",
          answer: "стіл",
          src: "../img/table.jpg",
          id: 3,
        },
      ],
      cardNum: 0,
		counter:null,
    }
  },
  computed: {

  },
  methods: {
	getRandomNum(){
		 return (this.cardNum = Math.floor(Math.random() * this.wordsList.length))
	},
    showCard() {
      	if (
          this.userAnswer.toLowerCase() === this.wordsList[this.cardNum].answer
        ) {
          return (
				this.counter += 1,
            (this.message = "Добре.Молодець!"),
            (this.answerClass = "borderGreen")
          )
        } else
          return (
            (this.message = "Невірно, спробуйте ще раз"),
            (this.answerClass = "borderRed")
          )
		},
		nextCard(){
			if (this.cardNum < this.wordsList.length - 1) 
			 {(this.cardNum += 1)
				this.userAnswer = null
				this.answerClass = null
			this.message = null}
      else {this.cardNum = 0
		this.userAnswer = null
    this.answerClass = null
    this.message = null}
		}
      
  },
})
task3.mount("#app3")
