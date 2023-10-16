//================================= Задача 2 ====================================

// Задача 2.  З випадаючого списку вибираємо клас квитка у літаку. Якщо 
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают 
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.


const { createApp } = Vue



const task2 = createApp({
  data() {
    return {
      activeChoose: null,
      activeClass: null,
      message: null,
      cognac: false,
		newspaper:false,
      message: null,
    }
  },
  computed: {
    isBusiness() {
      if (this.activeChoose === "business")
        return this.activeChoose, (this.activeClass = "businessClass")
    },
    isEkonom() {
      if (this.activeChoose === "ekonom") {
        return this.activeChoose, (this.activeClass = "economClass")
      }
    },
  },
  methods: {
    chooseCognac() {
      return this.cognac = true
    },
	 chooseNewspaper(){
		 return this.message = "Гарний вибір"
	 },
    onChoose(id){
		switch (id) {
      case 1:
        this.message = "Зараз принесем"
        break
      case 2:
        this.message = "ЯК забажаете"
        break
    }
    return this.message
	 },
	 chooseBeer(id){
		switch (id) {
      case 1: this.message = "Може візмете щось до пива"
        break
		case 2:this.message = "Зараз принесем"
			break
    }
	 return this.message
	 }
  },
})
task2.mount("#app")



//=================================================================================
 
