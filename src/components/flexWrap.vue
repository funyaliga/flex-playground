<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## flex-wrap ##

\`flex-wrap\` 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向。

- \`nowrap\`(默认值): 一行显示
- \`wrap\`: 换行。
- \`wrap-reverse\`: 换行，cross-start 和 cross-end 互换。 (cross: 交叉轴)

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
