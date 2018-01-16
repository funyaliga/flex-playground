<template>
    <div class="m-intro markdown-body">
       <component :is="md"></component>
    </div>
</template>
<script>
import 'github-markdown-css'

export default {
    name: "component_name",
    props: {
        active: String,
    },
    data () {
        return {
            mds: [
                {
                    name: 'flexDirection',
                    introduce: () => import('./components/flexDirection'),
                },
                {
                    name: 'flexWrap',
                    introduce: () => import('./components/flexWrap'),
                },
                {
                    name: 'justifyContent',
                    introduce: () => import('./components/justifyContent'),
                },
                {
                    name: 'alignContent',
                    introduce: () => import('./components/alignContent'),
                },
                {
                    name: 'alignItems',
                    introduce: () => import('./components/alignItems'),
                },
                {
                    name: 'alignSelf',
                    introduce: () => import('./components/alignSelf'),
                },
                {
                    name: 'flexGrow',
                    introduce: () => import('./components/flexGrow'),
                },
                {
                    name: 'flexShrink',
                    introduce: () => import('./components/flexShrink'),
                },
                {
                    name: 'flexBasis',
                    introduce: () => import('./components/flexBasis'),
                },
            ]
        };
    },
    computed: {
        md(){
            const f = this.mds.filter(v => v.name === this.active)
            return f[0] && f[0].introduce || ''
        }
    },
}
</script>
<style lang="postcss">
.m-intro{
    padding: 10px;
    &.markdown-body{
        color: #fff;
        & code {
            background: rgba(27, 31, 35, .5);
        }
        & pre code{
            color: #607D8B;
            background: transparent;
        }
        & blockquote{
            color: #dfe2e5;
        }
    }
}
</style>