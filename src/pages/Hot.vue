<template>
    <div id="hot">
        <input type="text" placeholder="试试就试试">
        <List :list="items" @click="(li)=>{ $router.push(`/detail/${li.id}`) }"/>
    </div>
</template>


<script>
import Header from 'Components/Header.vue'
import List from 'Components/List.vue'

export default {
    name:'Hot',
    data:()=>({
        items: [
            {id:1, title:'微信'},
            {id:2, title:'微博'},
            {id:3, title:'子弹短信'},
            {id:4, title:'微信'},
            {id:5, title:'微博'},
            {id:6, title:'子弹短信'},
            {id:7, title:'微信'},
            {id:8, title:'微博'},
            {id:9, title:'子弹短信'},
            {id:10, title:'微信'},
            {id:11, title:'微博'},
            {id:12, title:'子弹短信'},
        ]
    }),
    components:{
        Header,
        List
    }
}
</script>


<style scope>
    input{
        display: block;
        width:80%;
        margin:1rem auto;
        border-bottom:1px solid #999;
        color:#222;
        font-size:1.6rem;
        padding:1rem;
    }
</style>




