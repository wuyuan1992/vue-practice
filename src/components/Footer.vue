<template>
  <div class="footer">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="{active: tab.id === currentTabId}"
        :style="{fontSize: `${finalSize}rem`}"
        @click="()=>{$emit('click', tab)}"
      >
          {{ tab.title }}
      </li>
    </ul>
  </div>
</template>

<script>
const styles = {
  's' : 1.2,
  'm' : 1.4,
  'lg' : 1.6,
}


export default {
  name: 'Footer',
  data: ()=>({
    finalSize:1.4
  }),
  methods:{},
  props: {
    tabs: Array,
    currentTabId: Number,
    size: String | Number | undefined
  },
  watch:{
    size:(newSize)=>{
      if(newSize===undefined) return;
      this.finalSize = (styles[newSize] || newSize);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ul{
    width: 100%;
    border-top:1px solid #EDEDED;
    display: flex;
    align-items: center;
    justify-content: center;

    li{
      flex:1;
      height: 5rem;
      background:#FFF;
      font-size:1.6rem;
      color:#444;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li.active{
      background:rgb(175, 226, 250);
      color:#238876;
    }
    li+li{
      border-left:1px solid #EDEDED;
    }
  }
</style>
