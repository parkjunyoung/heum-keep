<template>
  <select v-on:change="changeRoute($event)"> 
    <option value="혜움">혜움</option>
    <option value="헬로우">헬로우</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  methods: {
    changeRoute(event) {
        this.$router.push({
          path: '/sub/' + event.target.value
        })
    }
  }
} 
</script>
<style>
select { padding:5px 7px; font-size:20px; margin-bottom:20px; }
</style>
