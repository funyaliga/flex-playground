<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## align-items ##

\`align-items\` 定义了每个元素在每一行的侧轴上的对齐方式。


- \`flex-start\`: 每行的元素向该行的顶部对齐。
- \`center\`: 每行的元素向该行的中点对齐。
- \`flex-end\`: 每行的元素向该行的底部对齐。
- \`baseline\`: 每行的元素向该行元素基线最大的基线对齐。
- \`stretch\` **(默认值)**: 每行的元素拉伸到跟行高一样高，会受 \`min/max-width/height\` 属性影响

>**注：**
>
>如果只有一行，行高等于容器高度。
>
>如果是多行时：
>\`align-content\`值为\`stretch\`，行高就是\`stretch\`算出来的高度。
>\`align-content\`值不等于\`stretch\`，行高是该行最高元素的高度。
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
