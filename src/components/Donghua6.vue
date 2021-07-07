<template>
    <div>
      <transition
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__shakeX"
        :duration="{enter: 3000, leave: 2000}"
        enter-from-class="enter_from"
        enter-to-class="enter_to"
        leave-from-class="leave_from"
        leave-to-class="leave_to"
      >
        <div class="box" v-show="flag"></div>
      </transition>
      <button @click="flag = !flag">显示/隐藏</button>
    </div>
</template>

<script>
    export default {
        name: "Donghua6",
      data() {
          return{
            flag: true
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
/*  .enter_from{*/
/*    opacity: 0;*/
/*  }*/
/*  .enter_to{*/
/*    opacity: 1;*/
/*  }*/
/*.leave_from{*/
/*  opacity: 1;*/
/*}*/
/*.leave_to{*/
/*  opacity: 0;*/
/*}*/
</style>
