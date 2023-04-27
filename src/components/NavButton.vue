<script>
  export default {
    name: 'NavButton',
    props: {
      label: {
        required: true
      }
    },
    computed: {
      labelUpper () {
        return typeof this.label === 'string' ? this.label.toUpperCase() : this.label
      }
    },
    methods: {
      onClick() {
        this.$emit('clicked', this.label)
      }
    }
  }
</script>

<template>
  <button @click="onClick">{{ label }}</button>
</template>

<style scoped>
button {
  background-color: rgba(0, 0, 0, 0%);
  border: 1px solid rgba(255, 0, 127, 100%);
  width: 100%;
  height: 100%;
  /* padding: 4px 8px; */
  /* margin: 8px; */
  color: rgba(255, 0, 127, 100%);
  /* font-size: 1.2rem; */
  font-weight: bold;
  cursor: pointer;
}
</style>