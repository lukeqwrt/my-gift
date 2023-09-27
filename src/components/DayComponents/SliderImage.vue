<template>
    <div class="slider flex justify-center items-center">
        <img  alt="nothing" class=" rounded-md object-cover w-[auto] h-[240px] hidden"
        v-for="img in imgSlide" :key="img" :src="img.name"
        :class="{ '!block' : img.show }">
    </div>
</template>

<script>
import img1 from '../../assets/img/ourpics/1.jpg'
import img2 from '../../assets/img/ourpics/2.jpg'
import img3 from '../../assets/img/ourpics/3.jpg'
import img4 from '../../assets/img/ourpics/4.jpg'
import img5 from '../../assets/img/ourpics/5.jpg'
import img6 from '../../assets/img/ourpics/6.jpg'
import img7 from '../../assets/img/ourpics/7.jpg'
import img8 from '../../assets/img/ourpics/8.jpg'
import img9 from '../../assets/img/ourpics/9.jpg'
import img10 from '../../assets/img/ourpics/10.jpg'
import img11 from '../../assets/img/ourpics/11.jpg'
import img12 from '../../assets/img/ourpics/12.jpg'

export default {
 data(){
    return{
        imgSlide: [
            {name: img1, show: true },
            {name: img2, show: false },
            {name: img3, show: false },
            {name: img4, show: false },
            {name: img5, show: false },
            {name: img6, show: false },
            {name: img7, show: false },
            {name: img8, show: false },
            {name: img9, show: false },
            {name: img10, show: false },
            {name: img11, show: false },
            {name: img12, show: false },
        ],
        imigSlideIndex: 0
    }
 },
 methods:{
    runSlideShow(){
        setInterval(() => {
            if(this.imigSlideIndex > this.imgSlide.length - 1){
             this.imigSlideIndex = 0  
            }
            this.imgSlide.forEach(i => {
                i.show = false
            })
           this.imgSlide[this.imigSlideIndex].show = true
           this.imigSlideIndex += 1
        }, 1200)
    }
 },
 mounted() {
    this.runSlideShow()
 }
}
</script>

<style>

</style>