webpackJsonp([3],{"75lj":function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("Xoog"),l={data:function(){return{content:"\n## flex-shrink ##\n\n`flex-shrink` 设置元素在空间不足时的收缩系数\n\n默认值为`1`\n\n**计算公式：** \n- **溢出大小** = (元素1的大小 + 元素2的大小 + ...) - 容器宽度\n- **总权重** = 元素1的大小 * 元素1的flexShrink的值 + 元素2的大小 * 元素2的flexShrink的值 + ...\n- **元素n收缩大小** = 溢出大小 * 元素n的flexShrink的值 * 元素n的大小 / 总权重\n- **元素n实际大小** = 元素n大小 - 元素n收缩大小\n- (如果flexShrink值总和小于1, 收缩宽度还需要乘以flexShrink值总和)\n\n比如当前页面的例子（flex-wrap为nowrap,flex-basis均为auto的情况下）\n5个元素，每个元素原宽度都是100， 父元素为400，flexShrink的值均为1\n溢出宽度 = 120 * 5 - 420 = 180\n总权重 = (120 * 1) * 5 = 600\n每个元素的收缩宽度 = 180 * 1 * 120 / 600 = 36\n每个元素的宽度 = 120 - 20 = 84\n\n\n如果flexShrink分别设置为 1, 2, 3, 2, 1，则：\n溢出宽度 = 120 * 5 - 420 = 180\n总权重 = 120 * (1+2+3+2+1)= 1080\n元素1/5收缩宽度 = 180 * 1 * 120 / 1080 = 20\n元素2/4收缩宽度 = 180 * 2 * 120 / 1080 = 40\n元素3收缩宽度 = 180 * 3 * 120 / 1080 = 60\n元素1/5的宽度 = 120 - 20 = 100\n元素2/4的宽度 = 120 - 40 = 80\n元素3的宽度 = 120 - 60 = 60\n\n如果flexShrink分别设置为 0.1, 0.2, 0.3, 0.2, 0.1，则：\n溢出宽度 = 120 * 5 - 420 = 180 \n总权重 = 120 * (0.1+0.2+0.3+0.2+0.1)= 108\n// 如果flexShrink值总和小于1, 收缩宽度还需要乘以flexShrink值总和\n元素1/5收缩宽度 = 180 * (0.1+0.2+0.3+0.2+0.1) * 0.1 * 120 / 108 = 18\n元素2/4收缩宽度 = 180 * (0.1+0.2+0.3+0.2+0.1) * 0.2 * 120 / 108 = 36\n元素3收缩宽度 = 180 * (0.1+0.2+0.3+0.2+0.1) * 0.3 * 120 / 108 = 54\n元素1/5的宽度 = 120 - 18 = 102\n元素2/4的宽度 = 120 - 36 = 84\n元素3的宽度 = 120 - 54 = 66\n"}},components:{VueMarkdown:r.n(t).a}},i={render:function(){var n=this.$createElement;return(this._self._c||n)("vue-markdown",[this._v(this._s(this.content))])},staticRenderFns:[]},f=r("VU/8")(l,i,!1,null,null,null);e.default=f.exports}});
//# sourceMappingURL=3.10a65c135fa76f9a09a3.js.map