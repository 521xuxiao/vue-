<template>
    <div>
      <transition name="lk">
<!--        在vue里面有多个过渡transition的时候加上name来进行区分开，同时在 .v-enter-active  和  .v-leave-active 中的最前面的 v 改成相应的 lk  -->
          <div class="box" v-show="flag"></div>
      </transition>
      <transition>
        <div class="box" v-show="flag"></div>
      </transition>
      <transition>
        <div class="box" v-show="flag"></div>
      </transition>
      <transition>
        <div class="box" v-show="flag"></div>
      </transition>
      <button @click="flag = !flag">显示/隐藏</button>
    </div>
</template>

<script>
    export default {
        name: "Donghua5",
      data() {
          return{
            flag: false
          }
      }
    }
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background: red;
}
  .lk-enter-active{
    animation: fake-enter 2s;
  }
  .v-leave-active{
    animation: fake-leave 2s;
  }

  @keyframes fake-enter {
    0%{
      opacity: 0;
      transform: translateX(0);
    }
    50%{
      opacity: 0.5;
      transform: translateX(50px);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
  }
@keyframes fake-leave {
  0%{
    opacity: 1;
    transform: translateX(0);
  }
  50%{
    opacity: 0.5;
    transform: translateX(50px);
  }
  100%{
    opacity: 0;
    transform: translateX(0);
  }
}
</style>
