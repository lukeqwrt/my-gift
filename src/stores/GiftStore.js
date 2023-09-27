import { defineStore } from 'pinia'

export const useGiftStores = defineStore('giftStore', {
    state: () => ({
      Message:[
        { id: 0, message: "Hi Aira, This is my gift you you since I dont have money and take you on a luxurious date sorry for being poor. This is the day that I met you and enter to my life. I'm so glad that you came to my life. You are like a light that came to my dark and misserable life, You accept me and love for who I am. Sorry for being so childish and immature sometimes and thank you for understunding and caring mo so much. I love seeing your smile when we were together, I loved making memorable memories with you and we will still continue making happy moments. I love you always my bebi I hope you like this simple gift. I love you so much!!! Happy Anniversary", button: 'Message', date: 'September 28, 2023'},
      ],
      stickerTrue: false
    }),
    getters: {
    },
    actions:{
      showSticker(){
        this.stickerTrue = true
      },
      hideSticker(){
        this.stickerTrue = false
      }
    }

})