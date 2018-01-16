<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## align-self ##

\`align-self\` 单独设置元素在行上的侧轴上的对齐方式。


- \`auto\` **(默认值)**: 设置为父元素的\`align-items\`值
- \`flex-start\`: 元素向该行的顶部对齐。
- \`center\`: 元素向该行的中点对齐。
- \`flex-end\`: 元素向该行的底部对齐。
- \`baseline\`: 元素向该行元素基线最大的基线对齐。
- \`stretch\`: 元素拉伸到跟行高一样高，会受 \`min/max-width/height\` 属性影响

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
