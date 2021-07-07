<template>
    <div class="hello">
            <div @click="goBack">回退</div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      goBack() {
          this.$router.push("/HelloWorld");
      }
  },
  mounted() {
      console.log("helloWorld2")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
