<script>
export default {
  name: 'DayContainer',
  props: {
    date: {required: true},
    month: {required: true},
    currentMonth: Object,
    border: Object,
    background: Object
  },
  methods: {
    dayClick (date, month, year) {
      this.$emit('dayClicked', 'Events for ' + this.translateDate(date) + ' of ' + this.translateMonth(month) + ' ' + year)
      this.$emit('eventSort', {year: year, month: month, date: date})
      this.$emit('eventList', {year: year, month: month, date: date})
      this.$emit('birthdayList', {year: year, month: month, date: date})
    },
    translateMonth(month) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let monthName = months[month]
      return monthName
    },
    translateDate(date) {
      return date === 1 ? date + 'st'
        : date === 2 ? date + 'nd'
        : date === 3 ? date + 'rd'
        : date === 21 ? date + 'st'
        : date === 22 ? date + 'nd'
        : date === 23 ? date + 'rd'
        : date === 31 ? date + 'st'
        : date + 'th'
    }
  }
}
</script>

<template>
  <div class="date day-out"
    v-if="this.month !== this.currentMonth.displayMonth"
    :style="Object.assign(this.border)"
    @click="dayClick(this.date, this.month, this.currentMonth.displayYear)">
    <p class="date">{{ date }}</p>
  </div>
  <div class="date day-current"
    v-else-if="this.currentMonth.displayMonth === this.month"
    :style="Object.assign(this.border, this.background)"
    @click="dayClick(this.date, this.month, this.currentMonth.displayYear)">
    <p class="date">{{ date }}</p>
  </div>
</template>