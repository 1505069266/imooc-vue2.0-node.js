<template>
    <div>
        <div v-if="goodsList">
            <h1>你还得购物车还是空的哦~</h1>
            <router-link to="/about">去购物</router-link>
        </div>
        <div v-else>
            这是你的购物车的列表
        </div>
        <div>
            <div>
                结算
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            goodsList:false
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

    },
    components: {

    },
};
</script>

<style scoped>

</style>
