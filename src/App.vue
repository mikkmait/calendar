
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
   countYear: 0
  }
 },
 computed: {
  daysInCal () {
   let calContent = []
   const today = new Date()
   const prevMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth, 0)
   const thisMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth)
   const nextMth = new Date(today.getFullYear() + this.countYear, today.getMonth() + this.countMth, + 1, 1)
   const daysInPrevMth = getDaysInMonth(prevMth.getFullYear(), prevMth.getMonth())
    .slice(prevMth.getDay() !== 0 ? prevMth.getDay() * - 1 : 99)
   calContent.push(...daysInPrevMth)
   const daysInThisMth = getDaysInMonth(thisMth.getFullYear(), thisMth.getMonth())
   calContent.push(...daysInThisMth)
   const daysInNextMth = getDaysInMonth(nextMth.getFullYear(), nextMth.getMonth())
    .slice(0, 42 - calContent.length)
   calContent.push(...daysInNextMth)
   // console.log(calContent)
   return calContent
  }
 },
 methods: {
  onMthButtonClick (payload) {
   if (payload === '<') {
    this.countMth -= 1
   } else if (payload === '>') {
    this.countMth += 1
   }
  },
  onYearButtonClick (payload) {
   if (payload === '<<') {
    this.countYear -= 1
   } else if (payload === '>>') {
    this.countYear += 1
   }
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
 <div>
  <div class="cal-head">
  <NavButton label="<<" @clicked="onYearButtonClick" />
  <NavButton label="<" @clicked="onMthButtonClick" />
   {{ translateMonth((Math.abs(thisMonth + countMth)) % 12) }}
   {{ thisYear + countYear }}
  <NavButton label=">" @clicked="onMthButtonClick" />
  <NavButton label=">>" @clicked="onYearButtonClick" />
  </div>
  </div>
  <month-container
   :data="daysInCal"
  />
</template>

<style>

</style>