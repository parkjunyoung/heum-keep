<template>
  <div>
    <div class="header">{{ $route.params.menu_name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Subpage'
}
</script>
<style>
.header { font-size : 30px; font-weight: bold; }
</style>