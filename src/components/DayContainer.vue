<script>
  export default {
    name: 'DayContainer',
    props: {
      date: {required: true},
      month: {required: true},
      currentmonth: Object
    }
  }
</script>

<template>
  <div class="day-out" v-if="this.month !== this.currentmonth.displayMonth">
    <p class="date">{{ date }}</p>
    <p class="date">{{ month.displayMonth }}</p>
  </div>
  <div class="day-current" v-else-if="this.currentmonth.displayMonth === this.month">
    <p class="date">{{ date }}</p>
    <p class="date">{{ month.displayMonth }}</p>
  </div>
</template>
