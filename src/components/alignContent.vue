<template>
    <vue-markdown>{{content}}</vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'

const content = `
## align-content ##

\`align-content\` 定义了项目在侧轴上的对齐方式。

>**注：多行时才起作用！！**

- \`flex-start\`: 与侧轴起点对齐，每一行紧跟前一行。
- \`center\`: 往侧轴中心填充
- \`flex-end\`: 与侧轴终点对齐，每一行紧跟后一行。
- \`space-between\`: 每行在容器上均匀分布。相邻两行间距相等。第一行与侧轴起点对齐，最后一行与侧轴终点对齐。
- \`space-around\`: 每行在容器上均匀分布。相邻两行间距相等。第一行/最后一行与侧轴起终边的距离是相邻两行间距的一半。
- \`space-evenly\`: 每行在容器上均匀分布。相邻两行间距相等。第一行/最后一行与侧轴起终边的距离和相邻两行间距也是相同。
- \`stretch\` **(默认值)**: 拉伸所有行来填满剩余空间。剩余空间平均的分配给每一行

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
