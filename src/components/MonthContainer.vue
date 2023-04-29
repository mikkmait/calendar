<script>

import { events } from '../data/events.js'
import DayContainer from './dayContainer.vue'
import EventList from './EventList.vue'

export default {
  name: 'MonthContainer',
  props: {
    data: Array,
    weekdays: Array,
    currentMonth: Object,
    borderWeigth: Number
  },
  data () {
    return {
      date: new Date(),
      events: events(),
      dateEvents: []
    }
  },
  methods: {
    clickOnDate(payload) {
      const dialog = document.querySelector('dialog')
      const heading = document.querySelector('.dialog-heading')
      dialog.showModal()
      heading.innerHTML = payload
    },
    closeDialog() {
      const dialog = document.querySelector('#date-closeup')
      dialog.close()
    },
    eventSort(date) {
      const eventSort = date
      return eventSort
    },
    eventList(date) {
      const mapped = this.events.map(item => {
        return {
          year: item.year,
          month: item.month,
          date: item.date,
          time: item.time,
          type: item.type,
          name: item.name
        }
      })
      const mappedFiltered = this.eventSort(date.year + '' + date.month + '' + date.date)
        ? mapped.filter(item =>
          item.year + '' + item.month + '' + item.date ===
          this.eventSort(date.year) + '' + this.eventSort(date.month) + '' + this.eventSort(date.date))
        : mapped
      console.log(mappedFiltered)
      this.dateEvents = mappedFiltered
      return mappedFiltered
    },
    translateMonth(month) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let monthName = months[month]
      return monthName
    }
  },
  components: { DayContainer, EventList }
}
</script>

<template>
  <div class="day-identifier">
    <div v-for="day in weekdays" class="day-item">{{ day }}</div>
  </div>
  <div class="month">
    <DayContainer v-for="day in data" 
      :date="day.getDate()"
      :month="day.getMonth()"
      :currentMonth="currentMonth"
      :borderWeigth="borderWeigth"
      @dayClicked="clickOnDate"
      @eventSort="eventSort"
      @eventList="eventList"
    />
  </div>
  <dialog id="date-closeup">
    <div class="dialog-top">
      <span class="dialog-heading"></span>
      <button class="dialog-close" @click="closeDialog">X</button>
    </div>
    <EventList :events="dateEvents" />
  </dialog>
</template>