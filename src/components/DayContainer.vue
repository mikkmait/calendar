<script>
  export default {
    name: 'DayContainer',
    props: {
      today: {
        required: true
      },
      weekDay: {
        required: true
      }
    }
  }
</script>

<template>
  <div class="day">
    <p class="date">{{ today }}</p>
    <p>{{ weekDay }}</p>
  </div>
</template>
