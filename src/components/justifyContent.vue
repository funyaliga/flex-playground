<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## justify-content ##

\`justify-content\` 定义了元素在每一行的主轴上的对齐方式。

- \`flex-start\`: 每行第一个元素与\`主轴起点\`对齐，后续的元素与前一个对齐。
- \`center\`: 每行元素居中显示
- \`flex-end\`: 每行第一个元素与\`主轴终点\`对齐，后续的元素与后一个对齐。
- \`space-between\`: 在每一行上均匀分配元素。相邻元素间距离相同。每行第一个元素与主轴起点对齐，每行最后一个元素与主轴终点对齐。
- \`space-around\`: 在每一行上均匀分配元素。相邻元素间距离相同。每行第一个元素/最后一个元素和边框的距离是相邻元素之间距离的一半。
- \`space-evenly\`: 在每一行上均匀分配元素。相邻元素间距离相同。每行第一个元素/最后一个元素和边框的距离和相邻元素间距离也是相同。

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
