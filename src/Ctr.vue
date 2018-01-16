<template>
    <div class="m-ctr">

        <dl v-for="(v, styleName) in boxApi" :key="v.title" :class="['floor', 'type-box', active === styleName ? 'active' : '']" @click="floorClick(styleName)">
            <dt>
                {{v.title}} <em v-if="v.subtitle">({{v.subtitle}})</em>
            </dt>
            <dd>
                <c-radio :options="v.options" :defaultValue="v.selected" @change="radioChange($event, styleName)"></c-radio>
            </dd>
        </dl>

        <dl v-for="(v, styleName) in itemApi" :key="v.title" :class="['floor', 'type-item', active === styleName ? 'active' : '']"  @click="floorClick(styleName)">
            <dt>{{v.title}} <em v-if="v.subtitle">({{v.subtitle}})</em></dt>

            <dd v-if="v.type === 'inputNumber'">
                <div v-for="(value, index) in v.value" :key="`inputNumber-${index}`">
                    <em>{{ index+1 }}</em>
                    <input type="number" :value="value" @focus="inputFocus" @input="inputChange($event.target.value, styleName, index)" step="0.1">
                </div>
            </dd>

            <dd v-if="v.type === 'input'">
                <div v-for="(value, index) in v.value" :key="`input-${index}`">
                    <em>{{ index+1 }}</em>
                    <input type="text" :value="value" @focus="inputFocus" @input="inputChange($event.target.value, styleName, index)">
                </div>
            </dd>

            <dd v-else-if="v.type === 'select'">
                <div v-for="(value, index) in v.value" :key="`select-${index}`">
                    <em>{{ index+1 }}</em>
                    <c-select :options="v.options" :defaultValue="value" @change="inputChange($event, styleName, index)" ></c-select>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
import cRadio from './components/radio';
import cSelect from './components/select';
export default {
    name: "c-ctr",
    components: {
        [cRadio.name]: cRadio,
        [cSelect.name]: cSelect,
    },
    data () {
        return {
            boxApi: {
                flexDirection: {
                    title: 'flex-direction',
                    type: 'radio',
                    selected: 'row',
                    options: ['row', 'row-reverse', 'column', 'column-reverse'],
                },
                flexWrap: {
                    title: 'flex-wrap',
                    type: 'radio',
                    selected: 'nowrap',
                    options: ['nowrap', 'wrap', 'wrap-reverse'],
                },
                justifyContent: {
                    title: 'justify-content',
                    type: 'radio',
                    selected: 'flex-start',
                    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
                },
                alignContent: {
                    title: 'align-content',
                    type: 'radio',
                    selected: 'stretch',
                    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'stretch'],
                },
                alignItems: {
                    title: 'align-items',
                    type: 'radio',
                    selected: 'stretch',
                    options: ['flex-start', 'center', 'flex-end', 'baseline', 'stretch'],
                },
            },
            itemApi: {
                alignSelf: {
                    title: 'align-self',
                    type: 'select',
                    value: ['auto', 'auto', 'auto', 'auto', 'auto'],
                    options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
                },
                flexGrow: {
                    title: 'flex-grow',
                    subtitle: '拉伸比率',
                    type: 'inputNumber',
                    value: ['0', '0', '0', '0', '0'],
                },
                flexShrink: {
                    title: 'flex-shrink',
                    subtitle: '收缩比率',
                    type: 'inputNumber',
                    value: ['1', '1', '1', '1', '1'],
                },
                flexBasis: {
                    title: 'flex-basis',
                    subtitle: '元素宽度',
                    type: 'input',
                    value: ['auto', 'auto', 'auto', 'auto', 'auto'],
                },
                order: {
                    title: 'order',
                    subtitle: '排列顺序',
                    type: 'inputNumber',
                    value: ['0', '0', '0', '0', '0'],
                },
            },
            active: '',
        };
    },
    created() {
        this.$emit('boxChange', this.boxApi)
        this.$emit('itemChange', this.itemApi)
    },
    methods: {
        inputFocus(event) {
            event.target.select()
        },
        radioChange(val, styleName) {
            this.boxApi[styleName].selected = val
            this.$emit('boxChange', this.boxApi)
        },
        inputChange(val, styleName, index) {
            const valueArr = [].concat(this.itemApi[styleName].value)
            valueArr.splice(index, 1, val)
            this.itemApi[styleName].value = valueArr
            this.$emit('itemChange', this.itemApi)
        },
        floorClick(styleName) {
            if (this.active !== styleName) {
                this.active = styleName
                this.$emit('activeChange', this.active)
            }
        }
    }
}
</script>

<style lang="postcss">
.m-ctr{
    padding: 10px 0;
    & dl{
        padding: 6px 8px;
        &.active{
            background: #333;
        }
    }
    & dt{
        font-size: 24px;
    }
    & dd{
        max-width: 740px;
    }
    & .type-item {
        & dd{
            display: flex;
            & > div{
                margin-right: 12px;
                font-size: 0;
            }

            & em{
                display: inline-block;
                height: 32px;
                background: #333;
                padding: 0 4px;
                font-size: 12px;
                line-height: 32px;
                color: #fff;
                vertical-align: top;
                font-weight: bold;
                font-style: normal;
                border-right: 1 solid #acacac;
            }

            & input,
            & select{
                width: 80px;
                height: 32px;
                padding: 0 4px;
                border: none;
                border-radius: 0 4px 4px 0;
                -webkit-appearance: none;
            }

            & .m-select{
                display: inline-block;
                vertical-align: top;
            }
        }
    }

    & .m-radio{
        display: flex;
        flex-wrap: wrap;
    }

    & .radio-label{
        position: relative;
        flex: 1;
        display: inline-block;
        padding: 4px 10px;
        margin: 4px;
        border: 1px solid #539092;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
        z-index: 1;
        & input{
            position: absolute;
            left: 0;
            width: 0;
            height: 0;
            overflow: hidden;
            opacity: 0;
            &:checked {
                &+.radio-label-check{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: #539092;
                    z-index: -1;
                    &+.radio-label-t{
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>