<template>
  <div class="header">
    <Title :size="2.8">{{ title }}</Title>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
  name: 'Header',
  props: {
    title: String
  },
  components:{
    Title
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        height: 5rem;
        background:#FFF;
        padding:0 1rem;
        border-bottom:1px solid #EDEDED;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
