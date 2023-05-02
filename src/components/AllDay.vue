<script>
export default {
  name: 'EventList',
  props: {
    events: {required: true}
  },
  data() {
    return {
      alldayEvents: []
    }
  },
  methods: {
    sortAllDayEvents() {
      let allDayEvents = []
      this.events.forEach(event => {
        if (event.allday === true) {
          allDayEvents.push(event)
        }
      })
      return allDayEvents
    }
  }
}
</script>

<template>
  <p class="all-day-heading"
    v-if="sortAllDayEvents().length > 0">
    All day events:
  </p>
  <p class="single-event"
    v-for="event in sortAllDayEvents()">
    <div>
      <span class="eventlist type">
        {{ event.type }}</span>
      <span class="eventlist name">
        {{ event.name }}</span>
      <span class="eventlist location">
        {{ event.location }}</span>
    </div>
  </p>
</template>

<style scoped>
.all-day-heading {
  font-size: .5rem;
  font-weight: bold;
  text-transform: uppercase;

  margin: 1rem 0 .25rem 2rem;
}
.single-event {
  margin-left: 3rem;
}

.eventlist {
  margin-right: .5rem;
}

.type {
  color: rgba(255, 225, 255, 100%);
  font-size: .5rem;
  text-transform: uppercase;

  /* margin-left: 1rem; */
}

.location {
  font-size: .5rem;
}

.name {
  color: rgba(255, 0, 127, 100%);
  font-weight: bold;
  white-space: pre-line;
}

</style>