<template>
    <div>
        这是商品列表页面<br>
        <span>{{$route.params.goodsId}}</span><br>
        <span>{{$route.params.name}}</span>
        <router-link to="/goodslist/title">title页面显示</router-link>
        <router-link to="/goodslist/image">image页面显示</router-link>
        <router-view></router-view>
        <router-link to="/cart">跳转到购物车页面</router-link>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

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
