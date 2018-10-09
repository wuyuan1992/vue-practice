<template>
    <div class="page" id="detail">
        <Header title="Detail" />

        <div class="content">
            <h3>
                {{ $route.params.id }}
            </h3>
            <List :list="items" @click="(li)=>{ $router.push(`/detail/${li.id}`) }"/>
        </div>
    </div>
</template>


<script>
import Header from 'Components/Header.vue'
import List from 'Components/List.vue'

import Http from 'Services/http'

export default {
    name:'Detail',
    data: ()=>({
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
    },

    methods:{
        async getData(){
            try{
                let result = await Http.get('/detail', { id: this.$route.params.id });
                // Todo 使用响应数据
                console.log(result);
            }catch(err){
                // Todo 非通用错误处理
            }
        }
    },

    beforeMount(){
        this.getData();
    }
}
</script>


<style scope>
    h3{
        text-align: center;
        font-size: 1.6rem;
    }
</style>




