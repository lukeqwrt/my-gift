<template>
    <div class="nav-container w-full h-[100px] flex justify-center items-center z-50">
        <nav class="flex gap-5 md:gap-12 text-lg text-white">
            <RouterLink 
                v-for="router in routerData" :key="router" 
                :to="{ name: router.routerName }" 
                active-class="text-[#5f91ff]" 
                class="hover:text-[#5f91ff] duration-150"
            >
                    {{ router.text }}
                    <!-- <div class="icon" v-show="router.selected">ICon</div> -->
            </RouterLink>
        </nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'   

export default {
    data(){
        return{
            routerData: [
                { routerName: 'day', text: 'Our Day', selected: false },
                { routerName: 'travel', text: 'Memories', selected: false },
            ]
        }
    },
    methods: {
        selectRouter(index){
            this.routerData.forEach(i => {
                i.selected = false
            })
            this.routerData[index].selected = true
        }
    }
}
</script>

<style scoped>
    .icon{
        display: block;
    }
    a.router-link-exact-active > .icon{
        display: block !important;
    }

</style>