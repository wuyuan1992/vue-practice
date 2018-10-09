import Hot from 'Pages/Hot.vue'
import Sort from 'Pages/Sort.vue'
import Search from 'Pages/Search.vue'

export default [
    {
      path:'hot', component: Hot
    },
    {
      path:'sort', component: Sort
    },
    {
      path:'search', component: Search
    },
    {
      path:'/', redirect: 'hot'
    },
]