<template>
    <div>
        <div class="div1"></div>
    </div>
</template>
<script>
    export default{
        data() {
            return{

            }
        },
        methods: {

        },
        mounted() {
            console.log(111)
        }
    }
</script>
<style scoped>

  @keyframes shake {
    0%{
      transform: translateX(0);
    }
    50%{
      transform: translateX(50px);
    }
    100%{
      transform: translateX(0);
    }
  }


    .div1{
        width: 100px;
        height: 100px;
        background: red;

        /*transition: all 2s ease-in;     过渡动画*/
      animation: shake 2s infinite alternate;
    }
    .div1:hover{
        width: 400px;
      height: 400px;
      background: aqua;
    }
</style>
