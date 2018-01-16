<template>
    <div class="m-view">
        <div class="box" :style="boxStyle">
            <div v-for="i in 5" :key="i" class="item" :style="itemStyle[i - 1]"><p>{{ i }}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "c-view",
    props: {
        boxStyle: Object,
        itemStyle: Array,
    },
    data () {
        return {
        };
    }
}
</script>

<style lang="postcss">
.m-view{
    & .box{
        display: flex;
        width: 100%;
        max-width: 420px;
        height: 240px;
        // padding: 10px;
        margin: 8px auto;
        box-shadow: 0 0 1px rgba(255, 255, 255, .8);
        background: rgba(255, 255, 255, .05);
        border-radius: 4px;
        overflow: hidden;
    }
    & .item{
        width: 120px;
        line-height: 40px;
        min-height: 40px;
        text-align: center;
        opacity: .9;
        align-items: center;
        & p{
            width: 100%;
            padding: 0;
            margin: 0;
        }
        &:nth-child(1){
            background: #584F84;
        }
        &:nth-child(2){
            background: #A7425C;
        }
        &:nth-child(3){
            background: #EA5959;
            height: 70px;
            line-height: 70px;
            font-size: 24px;
        }
        &:nth-child(4){
            background: #EF9B59;
            line-height: 50px;
        }
        &:nth-child(5){
            background: #FFD460;
            color: #666;
        }
    }
}
</style>