<template>
    <div id="hot">
        <input type="text" placeholder="试试就试试">
        <List :list="items" @click="(li)=>{ $router.push(`/detail/${li.id}`) }"/>
    </div>
</template>


<script>
import Header from 'Components/Header.vue'
import List from 'Components/List.vue'

import Http from 'Services/http'

export default {
    name:'Hot',
    data:()=>({
        items: []
    }),
    components:{
        Header,
        List
    },

    methods:{
        async getData(){
            try{
                let result = await Http.get('/list');
                // Todo 使用响应数据
                this.items = result; 
                console.log(result);
            }catch(err){
                // Todo 非通用错误处理
            }
        }
    },

    created(){
        this.getData();
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




