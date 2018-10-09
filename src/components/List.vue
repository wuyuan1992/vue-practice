<template>
  <ul class="list">
    <li v-for="li in list" :key="li.id" @click="()=>{ $emit('click', li) }">
      <img src="../assets/imgs/logo.png" alt="">

      <h3>{{ li.title }}</h3>
    </li>
  </ul>
</template>

<script>
import Logo from 'Imgs/logo.png';

export default {
  name: 'List',
  data:()=>({
    Logo
  }),
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: #FFF;
    margin-top:1rem;

    li{
      width: 100%;
      padding:1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img{
        width: 5rem;
        height: 5rem;
      }

      h3{
        font-size: 1.4rem;
      }
    }

    li+li{
      border-top:1px solid #EDEDED;
    }
  }
</style>
