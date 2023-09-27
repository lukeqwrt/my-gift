<template>
  <Transition ref="stickerShow" name="sticker">
    <div v-show="giftStore.stickerTrue"  class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Transition name="stickerInner">
        <div v-if="giftStore.stickerTrue">
          <img  class="flower" :src="image" alt="none">
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script>
import { onClickOutside } from '@vueuse/core'
import { useGiftStores } from '../stores/GiftStore';

export default {
    props:['image'],
    data() {
      return{
        giftStore: useGiftStores()
      }
    },
    methods:{
    },
    mounted(){
      onClickOutside(this.$refs.stickerShow, this.giftStore.hideSticker)
    }
}
</script>

<style scoped>
   .sticker-enter-active,
   .sticker-leave-active {
        transition: opacity 0.5s cubic-bezier(0.52,0.02,0.19,1.02);
    }

    .sticker-enter-from,
    .sticker-leave-to {
        opacity: 0;
    }

    .stickerInner-enter-from{
        opacity: 0;
        transform: scale(0.8);
    }
    .stickerInner-leave-to{
        transform: scale(0.8);
    }
    .stickerInner-enter-active{
        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) 0.15s;
    }
    .stickerInner-leave-active{
        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
    }
  .flower{
    animation: moveFlower 1.8s ease-in-out infinite alternate;

  }
  @keyframes moveFlower {
    0%{
      transform: rotate(-10deg);
    }
    100%{
      transform: rotate(10deg);
    }
  }
</style>