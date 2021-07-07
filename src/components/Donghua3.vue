<template>
  <div>
    <div class="box" :class="{red: isRed, blue: !isRed}"></div>
    <button @click="deal">测试动画</button>
  </div>

</template>

<script>
    export default {
        name: "Donghua3",
      data() {
          return{
            isRed: false
          }
      },
      methods: {
        deal() {
          this.isRed = !this.isRed;
        }
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
  transition: all 2s ease-in-out;
}
  .red{
    background: red;
  }
  .blue{
    background: blue;
  }
</style>
