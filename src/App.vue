<template>
    <div id="app">
        <c-view :boxStyle="boxStyle" :itemStyle="itemStyle"></c-view>
        <c-intro :active="active"></c-intro>
        <c-ctr @boxChange="boxChange" @itemChange="itemChange" @activeChange="activeChange"></c-ctr>
    </div>
</template>

<script>
import cView from './View';
import cCtr from './Ctr';
import cIntro from './Intro';
export default {
    name: 'app',
    data(){
        return {
            boxApi: {},
            itemApi: {},
            active: '',
        }
    },
    components: {
        cView,
        cCtr,
        cIntro,
    },
    computed: {
        boxStyle() {
            const style = {}
            for (const key in this.boxApi) {
                if (this.boxApi.hasOwnProperty(key)) {
                    style[key] = this.boxApi[key].selected
                }
            }
            return style
        },
        itemStyle() {
            const style = []
            for (const key in this.itemApi) {
                if (this.itemApi.hasOwnProperty(key)) {
                    this.itemApi[key].value.forEach((val, index) => {
                        if (!style[index]) {
                            style[index] = {}
                        }
                        style[index][key] = val
                    })
                }
            }
            return style
        },
    },
    methods: {
        boxChange(boxApi) {
            this.boxApi = boxApi
        },
        itemChange(itemApi) {
            this.itemApi = itemApi
        },
        activeChange(active) {
            this.active = active
        },
    }
}
</script>

<style lang="postcss">
*{
    margin: 0;
    padding: 0;
}
*{
    &,
    &:before,
    &:after{
        box-sizing: border-box;
    }
}

body{
    background: #333;
    color: #efefef;
}

#app {
    min-width: 1200px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    display: grid;
    padding: 10px;
    height: 100vh;
    grid-template-columns: 600px auto;
    grid-template-rows: 260px auto;
    grid-template-areas: "view ctr"
                        "intro ctr"
}

.m-view{
    grid-area: view;
}

.m-intro,
.m-ctr{
    border-radius: 8px;
    background: rgba(255, 255, 255, .1);
    overflow: auto;
}
.m-ctr{
    grid-area: ctr;
    margin-left: 10px;
}

.m-intro{
    grid-area: intro;
}

</style>
