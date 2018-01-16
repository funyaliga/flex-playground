<template>
    <div class="m-radio" @change="$emit('change', currentValue)">
        <label v-for="(option, index) in options" :key="index" class="radio-label">
            <input
                class="radio-label-input"
                type="radio"
                v-model="currentValue"
                :disabled="option.disabled"
                :value="option.value || option"
            >
            <span class="radio-label-check"></span>
            <span class="radio-label-t" v-text="option.label || option"></span>
        </label>
    </div>
</template>

<script>

export default {
    name: 'c-radio',
    props: {
        title: String,
        options: {
            type: Array,
            required: true
        },
        defaultValue: String
    },
    data() {
        return {
            currentValue: this.defaultValue
        };
    },
    watch: {
        defaultValue(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            this.$emit('input', val);
        }
    },
};
</script>

