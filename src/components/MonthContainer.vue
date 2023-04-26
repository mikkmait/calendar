<script>

import DayContainer from './dayContainer.vue'
export default {
  name: 'MonthContainer',
  props: {
   data: Array
  },
  data () {
    return {
      today: new Date(),
      countMth: 0
    }
  },
  methods: {
    translateDay(date) {
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      let dayName = weekday[date]
      return dayName
    }
    },
  components: { DayContainer }
}
</script>

<template>
  <div class="month">
    <DayContainer v-for="day in data" 
    :today="day.getDate()"
    :weekDay="translateDay(day.getDay())"
    />
  </div>
</template>