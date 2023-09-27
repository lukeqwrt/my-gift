<template>
  <div class="h-full w-full relative z-10 mt-5 mx-auto flex justify-center items-center pb-12  px-5">
    <div class="message p-4 max-w-2xl md:p-8 w-full z-10 text-white">
      <div class="grid">
        <h3 class="text-2xl mb-8 ">{{ giftStores.Message[id].date }}</h3>
        <p class="leading-[2.5rem] md:leading-[3rem] italic text-2xl    md:text-3xl font-100">
          {{ giftStores.Message[id].message }}
        </p>
        <button @click="giftStores.showSticker()" class="p-3 mt-8 ms-auto bg-[#e1e1e1e9] text-black rounded hover:text-[#c4375a] duration-200">
          Click me 
          <i class="em em-wilted_flower" aria-role="presentation" aria-label="WILTED FLOWER"></i>
        </button>
        <Sticker :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { useGiftStores } from '../stores/GiftStore';
import Sticker from '../components/Sticker.vue'
import flower from '../assets/img/flower/favpng_flower-bouquet-floral-design-vector-graphics-rose (1).png'

export default {
  props: ['id'],
  components: { Sticker },
  data(){
    return {
      giftStores: useGiftStores(),
      image: flower,
    }
  },
  methods:{
  }
}
</script>

<style scoped>

  .message p{
    font-family: 'Cookie', cursive;
  }
</style>