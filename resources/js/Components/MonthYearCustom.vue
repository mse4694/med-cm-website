<template>
  <div class="month-year-wrapper">
    <div class="custom-month-year-component">
      <select 
            class="select-input"
            :value="month" 
            @change="$emit('update:month', +$event.target.value)">
        <option 
            v-for="m in months" 
            :key="m.value"
            :value="m.value">{{ m.text }}</option>
      </select>
      <select 
            class="select-input" 
            :value="year" 
            @change="$emit('update:year', + $event.target.value)">
        <option 
            v-for="y in years"
            :key="y.value" 
            :value="y.value">{{ parseInt(y.text)+543 }}</option>
      </select>
    </div>
    <div class="icons">
        <span class="custom-icon" @click="onPrev">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </span>
        <span class="custom-icon" @click="onNext">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </span>
    </div>
  </div>
</template>

<script>
// Icons used in the example, you can use your custom ones
// import ChevronLeftIcon from './ChevronLeftIcon.vue';
// import ChevronRightIcon from './ChevronRightIcon.vue';

import { defineComponent } from 'vue';

export default defineComponent({
//   components: { ChevronLeftIcon, ChevronRightIcon },
  emits: ['update:month', 'update:year'],
  // Available props
  props: {
    months: { type: Array, default: () => [] },
    years: { type: Array, default: () => [] },
    filters: { type: Object, default: null },
    monthPicker: { type: Boolean, default: false },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    customProps: { type: Object, default: null }
  },
  setup(props, { emit }) {
    const updateMonthYear = (month, year) => {
      emit('update:month', month);
      emit('update:year', year);
    };

    const onNext = () => {
      let month = props.month;
      let year = props.year;
      if (props.month === 11) {
        month = 0;
        year = props.year + 1;
      } else {
        month += 1;
      }
      updateMonthYear(month, year);
    };

    const onPrev = () => {
      let month = props.month;
      let year = props.year;
      if (props.month === 0) {
        month = 11;
        year = props.year - 1;
      } else {
        month -= 1;
      }
      updateMonthYear(month, year);
    };

    return {
      onNext,
      onPrev,
    };
  },
});
</script>

<style scoped>

.month-year-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.custom-month-year-component {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.select-input {
  margin: 5px 3px;
  padding: 5px;
  width: 100px;
  border-radius: 4px;
  border-color: var(--dp-border-color);
  outline: none;
}

.icons {
  display: flex;
}

.custom-icon {
  padding: 5px;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 25px;
  color: var(--dp-icon-color);
  text-align: center;
  border-radius: 50%;
  /* &:hover {
    background: var(--dp-hover-color);
  } */
}
</style>