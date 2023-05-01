<script>
import { events } from '../data/events.js'
import { birthdays } from '../data/events.js'
import DayContainer from './dayContainer.vue'
import EventList from './EventList.vue'
import BirthdayList from './BirthdayList.vue'
import AllDay from './AllDay.vue'

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
      birthdays: birthdays(),
      dateEvents: [],
      dateBirthdays: []
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
    birthdayList(date) {
      const mapped = this.birthdays.map(item => {
        return {
          name: item.firstName + ' ' + item.lastName,
          year: item.year,
          month: item.month,
          date: item.date
        }
      })
      const mappedFiltered = this.eventSort(date.month + '' + date.date)
        ? mapped.filter(item =>
          item.month + '' + item.date ===
          this.eventSort(date.month) + '' + this.eventSort(date.date))
        : mapped
      this.dateBirthdays = mappedFiltered
      return mappedFiltered
    },
    eventList(date) {
      const mapped = this.events.map(item => {
        return {
          year: item.year,
          month: item.month,
          date: item.date,
          time: item.timeHour + ':' + item.timeMinute ,
          type: item.type,
          name: item.name,
          location: item.location,
          allDay: item.allDay
        }
      })
      const mappedFiltered = this.eventSort(date.year + '' + date.month + '' + date.date)
        ? mapped.filter(item =>
          item.year + '' + item.month + '' + item.date ===
          this.eventSort(date.year) + '' + this.eventSort(date.month) + '' + this.eventSort(date.date))
        : mapped
      this.dateEvents = mappedFiltered
      return mappedFiltered.sort((a, b) => {
        return a.time.localeCompare(b.time)
      })
    },
    translateMonth(month) {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let monthName = months[month]
      return monthName
    },
    borderCalc(year, month, date) {
      let border = {}
      let borderWidth = 0
      let borderRed = 255
      let borderGreen = 255
      let borderBlue = 255
      let borderAlpha = 0
      let borderColor = 'rgba(' + borderRed + ', ' + borderGreen + ', ' + borderBlue + ', 100%)'
      for (let i = 0; i < this.events.length; i++) {
        if (year + '' + month + '' + date === this.events[i].year + '' + this.events[i].month + '' + this.events[i].date) {
          borderWidth += 1
          borderRed -= 32
          borderGreen -= 16
          borderBlue -= 16
          borderAlpha = 100
        }
      }
      borderColor = 'rgba(' + borderRed + ', ' + borderGreen + ', ' + borderBlue + ', ' + borderAlpha + '%)'
      border = {
        'border-color': borderColor,
        'border-width': borderWidth + 'px',
        'padding': 16 - borderWidth + 'px',
      }
      return border
    },
    bgCalc(day) {
      let bg = {}
      let backgroundColor = 'rgba(255, 0, 127, 35%)'
      for (let i = 0; i < this.events.length; i++) {
        if (day === 0 || day === 6) {
          backgroundColor = 'rgba(255, 255, 255, 10%)'
        }
      }
      bg = {
        'background-color': backgroundColor,
      }
      return bg
    }
  },
  components: { DayContainer, EventList, BirthdayList, AllDay }
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
      :background="bgCalc(day.getDay())"
      @dayClicked="clickOnDate"
      @eventSort="eventSort"
      @eventList="eventList"
      @birthdayList="birthdayList"
    />
  </div>
  <dialog id="date-closeup">
    <div class="dialog-top">
      <span class="dialog-heading"></span>
      <button class="dialog-close" @click="closeDialog">X</button>
    </div>
    <div class="birthday-list">
      <BirthdayList :birthdays="dateBirthdays" v-if="dateBirthdays.length > 0"/>
    </div> 
    <div class="event-list">
      <AllDay :events="dateEvents"/>
    </div>
    <div class="event-list">
      <EventList :events="dateEvents" />
    </div>
  </dialog>
</template>