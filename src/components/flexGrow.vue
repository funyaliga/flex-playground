<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## flex-grow ##

\`flex-grow\` 设置元素分配剩余空间的权重

默认值为\`0\`

**计算公式：** 
分配到的大小 = 剩余空间 * flexGrow值 / flexGrow总和
元素大小 = 原来大小 + 分配到的大小

flexGrow总和小于1时，按1来

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
