<script>
import MonthContainer from './components/MonthContainer.vue'
import NavButton from './components/NavButton.vue'

function getDaysInMonth(year, month) {
 let date = new Date(year, month, 1)
 let days = []
 while (date.getMonth() === month) {
  days.push(new Date(date))
  date.setDate(date.getDate() + 1)
 }
 return days
}

export default {
 name: 'App',
 data () {
  return {
    today: new Date(),
    thisMonth: new Date().getMonth(),
    thisYear: new Date().getFullYear(),
    countMth: 0,
    countYear: 0,
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
 },
 computed: {
  daysInCal () {
    let calContent = []
    const today = new Date()
    const prevMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth, 0)
    const thisMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth)
    const nextMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth + 1, 1)
    const daysInPrevMth = getDaysInMonth(prevMth.getFullYear(), prevMth.getMonth())
    .slice(prevMth.getDay() !== 0 ? (prevMth.getDay() + 7) * - 1 : -7)
    calContent.push(...daysInPrevMth)
    const daysInThisMth = getDaysInMonth(thisMth.getFullYear(), thisMth.getMonth())
    calContent.push(...daysInThisMth)
    const daysInNextMth = getDaysInMonth(nextMth.getFullYear(), nextMth.getMonth())
    .slice(0, 49 - calContent.length)
    calContent.push(...daysInNextMth)
    return calContent
  },
  currentMth() {
    const today = new Date()
    const thisMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth)
    const displayMonth = thisMth.getMonth()
    const displayYear = thisMth.getFullYear()
    return {displayMonth, displayYear}
  }
 },
 methods: {
  onMthButtonClick (payload) {
    const getMonth = document.getElementsByClassName('month')
    const getHeading = document.getElementById('heading')
    getHeading.classList.add('hide')
      if (payload === '<') {for (let item of getMonth) {item.classList.add('month-move-right')}}
      else if (payload === '>') {for (let item of getMonth) {item.classList.add('month-move-left')}}
    setTimeout(() => {
      if (payload === '<') {this.countMth -= 1}
      else if (payload === '>') {this.countMth += 1}
      for (let item of getMonth) {item.classList.remove('month-move-left', 'month-move-right')}
      const getHeading = document.getElementById('heading')
      getHeading.classList.remove('hide')
    }, 800)
  },
  onYearButtonClick (payload) {
    const getMonth = document.getElementsByClassName('month')
    const getHeading = document.getElementById('heading')
    getHeading.classList.add('hide')
    if (payload === '<<') {for (let item of getMonth) {item.classList.add('month-move-farright')}}
    else if (payload === '>>') {for (let item of getMonth) {item.classList.add('month-move-farleft')}}
    setTimeout(() => {
      if (payload === '<<') {this.countYear -= 1}
      else if (payload === '>>') {this.countYear += 1}
      for (let item of getMonth) {item.classList.remove('month-move-farleft', 'month-move-farright')}
      const getHeading = document.getElementById('heading')
      getHeading.classList.remove('hide')
    }, 800)
  },
  translateMonth(month) {
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   let monthName = months[month]
   return monthName
  }
 },
 components: { MonthContainer, NavButton }
}
</script>

<template>
  <div class="cal-head">
   <div class="nav-item"><NavButton label="<<" @clicked="onYearButtonClick" /></div>
   <div class="nav-item"><NavButton label="<" @clicked="onMthButtonClick" /></div>
   <div class="nav-item heading" id="heading">
    {{ translateMonth(currentMth.displayMonth) }}
    {{ currentMth.displayYear }}
   </div>
   <div class="nav-item"><NavButton label=">" @clicked="onMthButtonClick" /></div>
   <div class="nav-item"><NavButton label=">>" @clicked="onYearButtonClick" /></div>
  </div>
  <month-container
   :dates="daysInCal"
   :weekdays="weekdays"
   :currentMonth="currentMth"
  />
</template>