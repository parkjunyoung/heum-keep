<template>
  <div>
    <iframe
    :src="`http://ec2-3-36-67-150.ap-northeast-2.compute.amazonaws.com:3000/employment/form/add?company=${ $route.query.company }`"
    width="100%"
    height="500"
    frameborder="0" >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'Form'
} 
</script>
<style>
</style>
