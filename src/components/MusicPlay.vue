<template>
    <div class="musicWrap fixed left-50 bottom-0 z-30  w-[2000px]">
        <div class="playing ">
            <span class="playing__bar playing__bar1"
            :class="bar"
            v-for="bar in barList" :key="bar"></span>
        </div>
        <audio  ref="player" class="hidden" controls autoplay>
            <source src="../assets/VULFPECK  Love is a Beautiful Thing (feat. Theo Katzman & Monica Martin).mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button  class="text-white text-4xl absolute left-[50%] translate-x-[-50%] top-[-5.5rem] h-[80px] w-[80px] flex justify-center items-center" @click="playToggle">
            <i v-if="playIcon" class="fa-solid fa-circle-play"></i>
            <img v-if="!playIcon" class="h-full w-full" src="../assets/img/record1.gif" alt="">
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            barList: [],
            barCount: 0,
            playIcon: true
        }
    },
    mounted(){

    },
    methods:{
        playToggle(){
            var audio = this.$refs.player;
            
            if (audio.paused) {
               audio.play();
               this.playIcon = false
            } else {
               audio.pause();
               this.playIcon = true
            }
            if(!this.barList.length){
                for (let index = 0; index < 200; index++) {
                // if(this.barCount === 4){
                //     this.barCount = 0
                // }
                const rndInt = Math.floor(Math.random() * 6) + 1
                // this.barCount++
                this.barList.push(`playing__bar${rndInt}`)
                    
                }
            }
       
        },
        
    }
}
</script>

<style>
.musicWrap{
    left: 50%;
    transform: translate(-50%, 0);
}
.playing {

        height: 1.5rem;
        border-radius: .3rem;
        display: flex;
        gap: 4px    ;
        justify-content: space-between;
        align-items: flex-end;
        box-sizing: border-box;
    }
    .playing__bar {
        display: inline-block;
        background: #ffffff;
        width:15%;
        height: 100%;
        animation: up-and-down 1.3s ease infinite alternate;
    }
    .playing__bar1 {
      height: 60%;
    }
    
    .playing__bar2 {
        height: 30%;
        animation-delay: -1.2s;
    }
    
    .playing__bar3 {
        height: 75%;
        animation-delay: -3.7s;
    }
                          
    @keyframes up-and-down {
        10% {
        height: 30%;
        }
        
        30% {
        height: 100%;
        }
        
        60% {
        height: 50%;
        }
        
        80% {
        height: 75%;
        }
        
        100% {
        height: 60%;
        }
    }
</style>