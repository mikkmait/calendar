<script>
import { events } from '../data/events.js'
import DayContainer from './dayContainer.vue'
import EventList from './EventList.vue'

export default {
  name: 'MonthContainer',
  props: {
    dates: Array,
    weekdays: Array,
    currentMonth: Object
  },
  data () {
    return {
      date: new Date(),
      events: events(),
      dateEvents: []
      // borderWeight: 0
    }
  },
  computed: {
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
      // this.borderWeight = 0
      // this.borderWeight = mappedFiltered.length
      // console.log(mappedFiltered)
      // console.log(this.borderWeight)
      this.dateEvents = mappedFiltered
      return mappedFiltered
    },
    translateMonth(month) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let monthName = months[month]
      return monthName
    },
    borderCalc(year, month, date) {
      let event = {}
      let borderWidth = 1
      let borderRed = 255
      let borderGreen = 0
      let borderBlue = 127
      let borderColor = 'rgba(' + borderRed + ', ' + borderGreen + ', ' + borderBlue + ', 100%)'
      for (let i = 0; i < this.events.length; i++) {
        if (year + '' + month + '' + date === this.events[i].year + '' + this.events[i].month + '' + this.events[i].date) {
          borderWidth += .5
          borderRed -= 127
          borderGreen += 64
          borderBlue = 0
        }
      }
      borderColor = 'rgba(' + borderRed + ', ' + borderGreen + ', ' + borderBlue + ', 100%)'
      event = {
        'borderColor': borderColor,
        'borderWidth': borderWidth
      }
      return event
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
    <DayContainer v-for="day in dates" 
      :date="day.getDate()"
      :month="day.getMonth()"
      :currentMonth="currentMonth"
      :border="borderCalc(day.getFullYear(), day.getMonth(), day.getDate())"
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