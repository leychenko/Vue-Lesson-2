//================================= Задача 6 ========================================================================================

// Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці

const { createApp } = Vue


const task5 = createApp({
  data() {
    return {
      waitingList: [],
      processingList: [],
      readyList: [],
      userDish: null,
    }
  },
  methods: {
    addDish() {
      this.waitingList.push(this.userDish)
      this.userDish = null
    },
    onProcessing(index) {
      this.processingList.push(this.waitingList[index])
      this.waitingList.splice(index, 1)
    },
    onReady(index) {
      this.readyList.push(this.processingList[index])
      this.processingList.splice(index, 1)
    },
    done(index) {
      this.readyList.splice(index, 1)
    },
  },
})
task5.mount("#app6")




















//========================================================================================================================================================
