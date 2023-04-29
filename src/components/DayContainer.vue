<script>
export default {
  name: 'DayContainer',
  props: {
    date: {required: true},
    month: {required: true},
    currentMonth: Object,
    border: Object
  },
  methods: {
    dayClick (date) {
      this.$emit('dayClicked', date)
      this.$emit('eventSort', {year: this.currentMonth.displayYear, month: this.currentMonth.displayMonth, date: this.date})
      this.$emit('eventList', {year: this.currentMonth.displayYear, month: this.currentMonth.displayMonth, date: this.date})
      console.log(this.border)
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
  >
    <p class="date">{{ date }}</p>
  </div>
  <div class="date day-current"
    v-else-if="this.currentMonth.displayMonth === this.month"
    :style="{ 'border-width': this.border.borderWidth + 'px', 'border-color': this.border.borderColor, padding: 16 - this.border.borderWidth + 'px' }"
    @click="dayClick('Events for ' + translateDate(this.date) + ' of ' + translateMonth(this.currentMonth.displayMonth) + ' ' + this.currentMonth.displayYear)"
  >
    <p class="date">{{ date }}</p>
  </div>
</template>
