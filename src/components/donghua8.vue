<template>
    <div class="box">
      <transition-group>
        <div class="div1" v-for="(item, index) in list" :key="item">{{item}}</div>
      </transition-group>
      <br><br><br>
      <button @click="add">增加</button>
      <button @click="deletes">减少</button>
    </div>
</template>

<script>
    export default {
        name: "donghua8",
      data() {
          return{
            list: ['测试1', '测试2']
          }
      },
      methods: {
          add() {
            this.list.push("测试" + (this.list.length+1));
          },
        deletes() {
          this.list.pop();
        }
      }
    }
</script>

<style scoped>
  .box{
    text-align: left;
  }
.div1{
  display: inline-block;
  margin: 0 10px;
}
  .v-enter-from{
    opacity: 0;
    transform: translateY(-50px);
  }
  .v-enter-to{
    opacity: 1;
    transform: translateY(0);
  }
  .v-enter-active{
    animation: shakeIn 0.3s;
  }
  .v-leave-active{
    animation: shakeOut 0.3s;
  }
  .v-leave-from{
    opacity: 1;
    transform: translateY(0);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateY(-50px);
  }


  /*动画*/
  @keyframes shakeIn {
    0%{
      transform: translateY(30px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes shakeOut {
    0%{
      transform: translateY(0px);
      opacity: 1;
    }
    100%{
      transform: translateY(30px);
      opacity: 0;
    }
  }
</style>
