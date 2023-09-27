<template>
       <div class="wrapper grid gap-12 ">
        <img typeof="gif" src="../../assets/img/gif1.gif" alt="none" class="absolute hidden md:block left-[50%] top-[-100px] translate-x-[-50%] w-auto h-[140px]">
        <div class="body flex flex-col items-center md:items-start  md:flex-row  gap-10">
          <SliderImage />
          <div class="text flex justify-center items-center md:items-start flex-col gap-5">
            <h1 class="text-2xl text-center md:text-left"> Hi Aira! &#10084;&#65039; </h1>
            <h5 class="text-lg">We've been together for...</h5>
            <Date />
          </div>
        </div>
        <Footer />
      </div>
</template>

<script>
import Date from '../DayComponents/Date.vue'
import Footer from '../DayComponents/DayFooter.vue' 
import { useGiftStores } from '../..//stores/GiftStore';
import SliderImage from './SliderImage.vue';
export default {
    props:['nav'],
    components: {Date, Footer, SliderImage},
    data(){
      return{
        giftStore: useGiftStores()
      }
    }
}
</script>

<style>

</style>