<template>
    <div>
        <div class="box" :class="{animation: isAnimation}"></div>
        <button @click="deal">测试动画</button>
    </div>
</template>

<script>
    export default {
        name: "donghua2",
      data() {
          return{
            isAnimation: false
          }
      },
      methods: {
        deal() {
          this.isAnimation  = !this.isAnimation;
        }
      },
      mounted() {

      }
    }
</script>

<style scoped>
  @keyframes shake {
    0%{
      transform: translateX(0);
    }
    50%{
      transform: translateX(100px);
    }
    100%{
       transform: translateX(0);
     }

  }
.box{
  width: 100px;
  height: 100px;
  background: aqua;
}
  .animation{
    animation: shake 2s linear;
  }
</style>
