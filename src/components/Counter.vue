<template>
    <div>
        {{num}}
        <button @click="increment()">+</button>
        <button @click="decrement()">-</button>
    </div>
</template>

<script>
export default {
    props: {
        num:{
            // require:true,
            type:Number,
            default:0
        }
    },
    data() {
        return {
            msg:"hello vue"
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        increment(e){
            e = 2
            this.$emit("increment",e)
        },
        decrement(){
            e = 2
            this.$emit("decrement",e)
        }
    },
    components: {

    },
};
</script>

<style scoped>

</style>
