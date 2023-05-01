<script>
export default {
  name: 'EventList',
  props: {
    birthdays: {required: true}
  }
}
</script>

<template>
  <p class="bd-heading">
    Todays birthdays:
  </p>
  <p class="single-event">
    <p class="birthday-list"
      v-for="bd in birthdays">
      {{ bd.name }}
    </p>
  </p>
</template>

<style scoped>
.bd-heading {
  font-size: .5rem;
  font-weight: bold;
  text-transform: uppercase;

  margin: 1rem 0 .25rem 2rem;
}
.single-event {
  margin-left: 2rem;
}

.birthday-list {
  color: rgba(255, 0, 127, 100%);
  font-size: .75rem;
  font-weight: bold;

  margin-left: 1rem;
}

</style>