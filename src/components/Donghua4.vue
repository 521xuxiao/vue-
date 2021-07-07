<template>
    <div>
      <transition>
        <div class="box" v-show="flag"></div>
      </transition>
      <button @click="flag = !flag">显示/隐藏</button>
    </div>
</template>

<script>
    export default {
        name: "Donghua4",
      data() {
          return{
            flag: false
          }
      },
      methods: {

      },
      mounted() {

      }
    }
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background: aqua;
}
/*vue里面的入场动画*/
  .v-enter-from{
    opacity: 0;
  }
.v-enter-active{
  transition: all 1s linear;
}
.v-enter-to{
  opacity: 1;
}
  /*vue里面的出场动画*/
  .v-leave-from{
    opacity: 1;
  }
.v-leave-active{
  transition: all 1s linear;
}
.v-leave-to{
  opacity: 0;
}
</style>
