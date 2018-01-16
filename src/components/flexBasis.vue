<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## flex-basis ##

\`flex-basis\` 指定了 flex 元素在主轴方向上的初始大小。

\`flex-direction\`值为\`row\`时设置的是宽度，值为\`column\`设置的是高度。

flex初始大小优先取\`flex-basis\`, 如果没设置会再取\`width/height\`
\`flex-basis\`受\`min/max-width/height\`限制影响。

\`flex-basis\`设置的只是初始大小。
当容器空间不够时，最终大小会受\`flex-shrink\`影响。

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
