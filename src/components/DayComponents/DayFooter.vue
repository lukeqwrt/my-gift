<template>
  <ul class="footer flex gap-3">
    <RouterLink v-for="mess in giftStores.Message" :key="mess" class="bg-[#ffffffdf] text-black hover:scale-105 duration-150 px-3 py-1 rounded-full cursor-pointer" :to="{ name: 'message', params: { id: mess.id }}"> 
      <li>
          {{ mess.button }}
      </li>
      
    </RouterLink>
  </ul>
</template>

<script>
import { useGiftStores } from '../../stores/GiftStore';

export default {
  data(){
    return {
      giftStores: useGiftStores()
    }
  },
  computed:{
  }
}
</script>

<style>

</style>