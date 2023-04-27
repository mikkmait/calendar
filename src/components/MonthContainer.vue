<script>

import DayContainer from './dayContainer.vue'
export default {
  name: 'MonthContainer',
  props: {
   data: Array,
   weekdays: Array
  },
  data () {
    return {
      date: new Date(),
    }
  },
  components: { DayContainer }
}
</script>

<template>
  <div class="day-identifier">
    <div v-for="day in weekdays" class="day-item">{{ day }}</div>
  </div>
  <div class="month">
    <DayContainer v-for="day in data" 
    :date="day.getDate()"
    />
  </div>
</template>