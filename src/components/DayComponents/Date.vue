<template>
    <div class="date w-full text-center md:text-start flex flex-col gap-6 text-lg">
      <div class="inYear flex gap-5 ">
        <span>{{ monthDay }} Days...</span>  
        <span>{{ ourDay }} Months...</span>  
        <span>{{ monthYear }} year...!</span>  

      </div>
      <span>And the time you said yes <i class="em em-cupid" aria-role="presentation" aria-label="HEART WITH ARROW"></i></span>
      <div class="time flex gap-5 ">
        <!-- <span>{{ currentHour }} Hour...</span>  
        <span>{{ currentMinute }} Minutes...</span>  
        <span>{{ currentSecond }} Seconds...!</span>   -->
        <span>{{ daysSinceLastDate }} Days... </span>
        <span>{{ months  }} Months...</span>  
        <span>{{ years }} Years...!</span>    

      </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
        anniv: '2023-05-21',
        currentHour: null,
        currentMinute:null,
        currentSecond:null,
        months:null,
        years:null,

        monthDay:null,
        ourDay: null,
        monthYear:null
        }
    },
    computed: {
      daysSinceLastDate() {
        const currentDate = new Date()
        
        const previousDate = new Date(this.anniv)
        const timeDifference = currentDate.getTime() - previousDate.getTime()
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24) + 1)
        return daysDifference
      },


  },
  methods: {
    getTime(){
      setInterval(() => {
        const currentDate = new Date();
        
        this.currentHour = String(currentDate.getHours()).padStart(2, '0');
        this.currentMinute = String(currentDate.getMinutes()).padStart(2, '0');
        this.currentSecond = String(currentDate.getSeconds()).padStart(2, '0');
      }, 1000);
    },
    run() {
      var to = new Date();
      var from = new Date('2023-05-21');
      var diff = to.getTime() - from.getTime();
      diff /= 1000; // seconds
      diff /= 60; // minutes
      diff /= 60; // hours
      diff /= 24; // days
      diff /= 30; // months
      this.months = parseInt(diff)
      diff /= 12;
      this.years = parseInt(diff)
    },
    run2() {
      var to = new Date();
      var from = new Date('2022-09-28');
      var diff = to.getTime() - from.getTime();
      diff /= 1000; // seconds
      diff /= 60; // minutes
      diff /= 60; // hours
      diff /= 24; // days
      this.monthDay = parseInt(diff + 1)
      diff /= 30; // months
      this.ourDay = parseInt(diff)
      diff /= 12;
      this.monthYear = parseInt(diff)
    }
  },
  mounted(){
    this.getTime()
    this.run()
    this.run2()
  }
}
</script>

<style>

</style>