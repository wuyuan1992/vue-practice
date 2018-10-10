<template>
    <div class="page" id="detail">
        <Header title="Detail" />

        <div class="content">
            <h3>
                {{ $route.params.id }}
            </h3>
        </div>
    </div>
</template>


<script>
import Header from 'Components/Header.vue'

import Http from 'Services/http'

export default {
    name:'Detail',
    data: ()=>({
    }),

    components:{
        Header
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

    created(){
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




