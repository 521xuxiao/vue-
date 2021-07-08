<template>
    <div>
        <transition mode="out-in" appear>
          <button v-if="isShow" key="tests1">点我呀</button>
          <p v-if="!isShow" key="test3">我是MTTTTTT</p>
        </transition>
      <p>------------------------------------------------</p>
        <button @click="handleClick">点击切换</button>
    </div>
</template>

<script>
    export default {
        name: "Donghua7",
      data() {
          return{
            isShow: true
          }
      },
      methods: {
        handleClick() {
          this.isShow = !this.isShow;
        }
      }
    }
</script>

<style scoped>
.v-enter-from{
  opacity: 0;
}
  .v-enter-active{
    transition: all 2s;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-leave-active{
    transition: all 2s;
  }
  .v-leave-to{
    opacity: 0;
  }
</style>
