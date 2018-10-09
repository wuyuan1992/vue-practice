<template>
    <div class="page" id="home">
        <Header :title="title" />

        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

        <Footer
            :tabs="tabs"
            :currentTabId="currentTabId"
            @click="tab => switchTab(tab)"
        />
        
    </div>
</template>


<script>
import Header from 'Components/Header.vue'
import Footer from 'Components/Footer.vue'

export default {
    name:'Home',
    data:()=>({
        tabs: [
            {id: 1, path:'/home/hot', title:'Hot'},
            {id: 2, path:'/home/sort', title:'Sort'},
            {id: 3, path:'/home/search', title:'Search'}
        ],
        currentTabId: 1,
    }),
    computed:{
        title: function(){
            return this.tabs[this.currentTabId-1].title
        }
    },
    methods:{
        switchTab({id, path}){
            this.currentTabId = id;
            this.$router.push(path);
        },
    },
    components:{
        Footer,
        Header
    },

    watch:{
        '$route' (to) {
            const activeTab = this.tabs.find(el=> el.path === to.path);
            this.currentTabId = activeTab?activeTab.id : 1;
        }
    },
}
</script>


<style lang="scss" scope>
</style>




