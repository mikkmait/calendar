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
  border: 0;
  width: 100%;
  color: rgba(255, 0, 127, 100%);
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
}
</style>