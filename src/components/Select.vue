<template>
  <select v-on:change="changeRoute($event)"> 
    <option value="혜움">혜움</option>
    <option value="자동차회사">자동차회사</option>
    <option value="건설회사">건설회사</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  methods: {
    changeRoute(event) {
        this.$router.push({
          path: `/employment/form/add/?company=${event.target.value}`
        })
    }
  }
} 
</script>
<style>
select { padding:5px 7px; font-size:20px; margin-bottom:20px; }
</style>
