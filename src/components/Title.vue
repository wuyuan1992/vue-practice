<template>
  <!--   -->
  <h3 class="title" :style="finalStyle">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'Title',
  computed:{
    finalStyle:function(){
      return ({
        color: this.color,
        fontSize: `${ this.size }rem`,
        fontWeight: this.weight,
        ...this.extraStyle
      });
    }
  },
  props: {
    extraStyle: Object,
    size: {
      type:Number,
      default: 1.6
    },
    color: {
      type:String,
      default: '#222'
    },
    weight: {
      type:Number,
      default: 600
    }
  },
}
</script>

<style lang="scss" scoped>
  .title{
    font-family: inherit;
  }
</style>
