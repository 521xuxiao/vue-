<template>
    <div>
        子组件
        <slot name="slot1"></slot>
    </div>
</template>

<script>
export default {
    props: ['input1'],
    data() {
        return{

        }
    },
    methods: {

    },
    mounted() {
        console.log("子组件");
    },
    watch: {
        input1(value) {
            console.log(value);
        }
    }
}
</script>

<style scoped>
    
</style>