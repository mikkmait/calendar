<script>
  export default {
    name: 'DayContainer',
    props: {
      date: {required: true}
    }
  }
</script>

<template>
  <div class="day-static">
    <p class="date">{{ date }}</p>
  </div>
</template>
