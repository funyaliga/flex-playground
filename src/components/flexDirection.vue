<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## flex-direction ##

\`flex-direction\` 属性指定主轴的方向

- \`row\` **(默认值)**: 主轴为水平方向, 从左到右
- \`row-reverse\`: 主轴为水平方向, 从右到左
- \`column\`: 主轴为垂直方向, 从上到下
- \`column-reverse\`: 主轴为垂直方向, 从下到上

`

export default {
    data() {
        return {
            content,
        }
    },
    components: {
        VueMarkdown,
    }
}
</script>
