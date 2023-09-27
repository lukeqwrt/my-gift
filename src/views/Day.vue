<template>
  <div class="h-full flex justify-center items-center px-5 z-10">
    <div class="bg-[#000000a2] mt-10 gap-12 px-5 py-12 mb-12 rounded-md max-w-3xl w-full grid text-[#ffffff] relative">
      <Meet />
    </div>
  </div>
</template>

<script>
import Meet from '../components/DayComponents/Meet.vue';
import { useGiftStores } from '../stores/GiftStore';

export default {
  components: { Meet },
  data(){
    return {
      giftStores: useGiftStores(),
    }
  },
  methods:{
  }


}
</script>

<style>

</style>