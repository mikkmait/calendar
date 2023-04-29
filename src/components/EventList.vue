<script>

export default {
  name: 'EventList',
  props: {
    events: {required: true}
  },
  computed: {
    shoeEvents() {
      console.log(this.events)
    }
  }
}

</script>

<template>
      <p class="single-event" v-for="event in events">
        <p class="eventlist hour">{{ event.time }}</p>
        <span class="eventlist type">{{ event.type }}</span>
        <span class="eventlist name">{{ event.name }}</span>
        <span class="eventlist location">{{ event.location }}</span>
      </p>
</template>

<style>

.eventlist {
  margin: 4px;
}

.hour {
  font-size: .8rem;
  margin: 16px 0 0 0;
}

.type {
  font-size: .5rem;
  margin-left: 2rem;
}

.name {
  color: rgba(255, 0, 127, 100%);
  font-weight: bold;
}

</style>