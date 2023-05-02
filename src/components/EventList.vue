<script>
export default {
  name: 'EventList',
  props: {
    events: {required: true}
  },
  methods: {
    sortEvents() {
      let Events = []
      this.events.forEach(event => {
        if (event.allday === false) {
          Events.push(event)
        }
      })
      return Events
    }
  }
}
</script>

<template>
  <p class="schedule-heading"
    v-if="sortEvents().length > 0">
    Schedule:
  </p>
  <p class="single-event"
    v-for="event in sortEvents()">
    <div>
      <p class="eventlist time">
        {{ event.time }}
        <span class="eventlist type">
          {{ event.type }}</span>
      </p>
      <span class="eventlist name">
        {{ event.name }}</span>
      <span class="eventlist location">
        {{ event.location }}</span>
    </div>
  </p>
</template>

<style scoped>
.schedule-heading {
  font-size: .5rem;
  font-weight: bold;
  text-transform: uppercase;

  margin: 1rem 2rem; 
}
.single-event {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.eventlist {
  margin-right: 1rem;
}

.time {
  font-size: .8rem;
  font-weight: bold;
}

.type {
  font-size: .5rem;
  text-transform: uppercase;
  color: rgba(255, 225, 255, 100%);
}

.name {
  color: rgba(255, 0, 127, 100%);
  font-weight: bold;

  margin-left: 1rem;
}

.location {
  font-size: .5rem;
}

</style>