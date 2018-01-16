<template>
    <div class="m-select">
        <label class="select-label">
            <span class="select-label-t">{{label}}</span>
            <select
                class="select-label-select"
                v-model="selected"
            >
                <option v-for="option in options" :key="option" :value="option">{{option}}</option>
            </select>
        </label>
    </div>
</template>

<script>

export default {
    name: 'c-select',
    props: {
        label: [String, Number],
        options: {
            type: Array,
            required: true,
        },
        defaultValue: [String, Number],
    },
    data() {
        return {
            selected: this.defaultValue,
        };
    },
    watch: {
        defaultValue(val) {
            this.selected = val;
        },
        selected(val){
            this.$emit('change', val);
        },
    },
};
</script>

