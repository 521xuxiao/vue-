<template>
    <div class="hello">
        <button @click="clicks">测试</button>
        <hr></hr>
        <keep-alive>
            <helloWorldChildren :input1="input1">
                <template v-slot:slot1>
                    <input type="text" v-model="input1"/>
                </template>
            </helloWorldChildren>
        </keep-alive>
    </div>
</template>

<script>
import helloWorldChildren from './helloWorldChildren.vue';
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            input1: ''
        }
    },
    methods: {
        clicks() {
            this.$router.push({path: "/HelloWorld2"})
        }
    },
    mounted() {
        console.log("hollow1");
    },
    components: {
        "helloWorldChildren": helloWorldChildren
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
