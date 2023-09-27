<template>

  <div class="main h-[100vh] overflow-x-hidden overflow-y-scroll grid grid-rows-nav pb-[120px] relative">
    
    <Nav />
      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
      </div>
    <RouterView />
    <MusicPlay />
  </div>
</template> 

<script>
import MusicPlay from './components/MusicPlay.vue'
import Nav from './components/Nav.vue'


export default {
  components: { Nav, MusicPlay }
}
</script>

<style scoped>
.main {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  position: relative;
}

.night {
  position: fixed;
  width: 100%;
  height: 58%;
  z-index: 1;
  transform: rotateZ(45deg);
}

.shooting_star {
  position: absolute;
  left: 50%;
  top:  50%;
  height: 2px;
  background: linear-gradient(-45deg, #ffffff, rgba(255, 255, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #ffffff);
  -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
          animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}
.shooting_star::before {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #ffffff, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
          animation: shining 3000ms ease-in-out infinite;
}
.shooting_star::after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #ffffff, rgba(0, 0, 255, 0));
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  -webkit-animation: shining 3000ms ease-in-out infinite;
          animation: shining 3000ms ease-in-out infinite;
  transform: translateX(50%) rotateZ(-45deg);
}
.shooting_star:nth-child(1) {
  top: calc(50% - -115px);
  left: calc(50% - 219px);
  -webkit-animation-delay: 4748ms;
          animation-delay: 4748ms;
}
.shooting_star:nth-child(1)::before, .shooting_star:nth-child(1)::after {
  -webkit-animation-delay: 4748ms;
          animation-delay: 4748ms;
}
.shooting_star:nth-child(2) {
  top: calc(50% - -38px);
  left: calc(50% - 24px);
  -webkit-animation-delay: 4683ms;
          animation-delay: 4683ms;
}
.shooting_star:nth-child(2)::before, .shooting_star:nth-child(2)::after {
  -webkit-animation-delay: 4683ms;
          animation-delay: 4683ms;
}
.shooting_star:nth-child(3) {
  top: calc(50% - 5px);
  left: calc(50% - 38px);
  -webkit-animation-delay: 1227ms;
          animation-delay: 1227ms;
}
.shooting_star:nth-child(3)::before, .shooting_star:nth-child(3)::after {
  -webkit-animation-delay: 1227ms;
          animation-delay: 1227ms;
}
.shooting_star:nth-child(4) {
  top: calc(50% - 37px);
  left: calc(50% - 287px);
  -webkit-animation-delay: 7886ms;
          animation-delay: 7886ms;
}
.shooting_star:nth-child(4)::before, .shooting_star:nth-child(4)::after {
  -webkit-animation-delay: 7886ms;
          animation-delay: 7886ms;
}
.shooting_star:nth-child(5) {
  top: calc(50% - 134px);
  left: calc(50% - 56px);
  -webkit-animation-delay: 2721ms;
          animation-delay: 2721ms;
}
.shooting_star:nth-child(5)::before, .shooting_star:nth-child(5)::after {
  -webkit-animation-delay: 2721ms;
          animation-delay: 2721ms;
}
.shooting_star:nth-child(6) {
  top: calc(50% - -38px);
  left: calc(50% - 181px);
  -webkit-animation-delay: 1281ms;
          animation-delay: 1281ms;
}
.shooting_star:nth-child(6)::before, .shooting_star:nth-child(6)::after {
  -webkit-animation-delay: 1281ms;
          animation-delay: 1281ms;
}
.shooting_star:nth-child(7) {
  top: calc(50% - 49px);
  left: calc(50% - 273px);
  -webkit-animation-delay: 2072ms;
          animation-delay: 2072ms;
}
.shooting_star:nth-child(7)::before, .shooting_star:nth-child(7)::after {
  -webkit-animation-delay: 2072ms;
          animation-delay: 2072ms;
}
.shooting_star:nth-child(8) {
  top: calc(50% - 199px);
  left: calc(50% - 42px);
  -webkit-animation-delay: 5612ms;
          animation-delay: 5612ms;
}
.shooting_star:nth-child(8)::before, .shooting_star:nth-child(8)::after {
  -webkit-animation-delay: 5612ms;
          animation-delay: 5612ms;
}
.shooting_star:nth-child(9) {
  top: calc(50% - -189px);
  left: calc(50% - 145px);
  -webkit-animation-delay: 6601ms;
          animation-delay: 6601ms;
}
.shooting_star:nth-child(9)::before, .shooting_star:nth-child(9)::after {
  -webkit-animation-delay: 6601ms;
          animation-delay: 6601ms;
}
.shooting_star:nth-child(10) {
  top: calc(50% - -70px);
  left: calc(50% - 297px);
  -webkit-animation-delay: 5057ms;
          animation-delay: 5057ms;
}
.shooting_star:nth-child(10)::before, .shooting_star:nth-child(10)::after {
  -webkit-animation-delay: 5057ms;
          animation-delay: 5057ms;
}
.shooting_star:nth-child(11) {
  top: calc(50% - 62px);
  left: calc(50% - 235px);
  -webkit-animation-delay: 6894ms;
          animation-delay: 6894ms;
}
.shooting_star:nth-child(11)::before, .shooting_star:nth-child(11)::after {
  -webkit-animation-delay: 6894ms;
          animation-delay: 6894ms;
}
.shooting_star:nth-child(12) {
  top: calc(50% - 76px);
  left: calc(50% - 205px);
  -webkit-animation-delay: 7868ms;
          animation-delay: 7868ms;
}
.shooting_star:nth-child(12)::before, .shooting_star:nth-child(12)::after {
  -webkit-animation-delay: 7868ms;
          animation-delay: 7868ms;
}
.shooting_star:nth-child(13) {
  top: calc(50% - 70px);
  left: calc(50% - 16px);
  -webkit-animation-delay: 390ms;
          animation-delay: 390ms;
}
.shooting_star:nth-child(13)::before, .shooting_star:nth-child(13)::after {
  -webkit-animation-delay: 390ms;
          animation-delay: 390ms;
}
.shooting_star:nth-child(14) {
  top: calc(50% - -70px);
  left: calc(50% - 283px);
  -webkit-animation-delay: 9442ms;
          animation-delay: 9442ms;
}
.shooting_star:nth-child(14)::before, .shooting_star:nth-child(14)::after {
  -webkit-animation-delay: 9442ms;
          animation-delay: 9442ms;
}
.shooting_star:nth-child(15) {
  top: calc(50% - 15px);
  left: calc(50% - 6px);
  -webkit-animation-delay: 5455ms;
          animation-delay: 5455ms;
}
.shooting_star:nth-child(15)::before, .shooting_star:nth-child(15)::after {
  -webkit-animation-delay: 5455ms;
          animation-delay: 5455ms;
}
.shooting_star:nth-child(16) {
  top: calc(50% - 181px);
  left: calc(50% - 228px);
  -webkit-animation-delay: 604ms;
          animation-delay: 604ms;
}
.shooting_star:nth-child(16)::before, .shooting_star:nth-child(16)::after {
  -webkit-animation-delay: 604ms;
          animation-delay: 604ms;
}
.shooting_star:nth-child(17) {
  top: calc(50% - 149px);
  left: calc(50% - 17px);
  -webkit-animation-delay: 1749ms;
          animation-delay: 1749ms;
}
.shooting_star:nth-child(17)::before, .shooting_star:nth-child(17)::after {
  -webkit-animation-delay: 1749ms;
          animation-delay: 1749ms;
}
.shooting_star:nth-child(18) {
  top: calc(50% - -27px);
  left: calc(50% - 68px);
  -webkit-animation-delay: 9030ms;
          animation-delay: 9030ms;
}
.shooting_star:nth-child(18)::before, .shooting_star:nth-child(18)::after {
  -webkit-animation-delay: 9030ms;
          animation-delay: 9030ms;
}
.shooting_star:nth-child(19) {
  top: calc(50% - -161px);
  left: calc(50% - 81px);
  -webkit-animation-delay: 4283ms;
          animation-delay: 4283ms;
}
.shooting_star:nth-child(19)::before, .shooting_star:nth-child(19)::after {
  -webkit-animation-delay: 4283ms;
          animation-delay: 4283ms;
}
.shooting_star:nth-child(20) {
  top: calc(50% - 159px);
  left: calc(50% - 81px);
  -webkit-animation-delay: 9395ms;
          animation-delay: 9395ms;
}
.shooting_star:nth-child(20)::before, .shooting_star:nth-child(20)::after {
  -webkit-animation-delay: 9395ms;
          animation-delay: 9395ms;
}

@-webkit-keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}
@-webkit-keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
}
@-webkit-keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
@keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
