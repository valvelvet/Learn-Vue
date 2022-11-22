<template>
  <div>
    <label>{{ label }}</label>
    <div v-if="!readonly">
      <BaseChip
        v-for="(item, index) in items"
        :key="item.id"
        :id="'chip' + item.id"
        :class="{ checked: item.checked }"
        @onClick="checkedItem(index)"
      >
        {{ item.value }}
      </BaseChip>
    </div>
    <div v-else-if="readonly && checkedItems.length == 0"><p>無</p></div>
    <div v-else-if="readonly">
      <BaseChip v-for="item in checkedItems" :key="item.id" :readonly="true" class="checked">
        {{ item.value }}
      </BaseChip>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "label", "readonly"],
  emits: ["onInput"],
  data() {
    return {
      items: [],
    };
  },
  watch: {
    modelValue() {
      this.items = this.modelValue;
    },
  },
  computed: {
    checkedItems() {
      return this.items.filter((item) => item.checked);
    },
  },
  methods: {
    checkedItem(index) {
      this.items[index].checked = !this.items[index].checked;
      this.$emit("onInput", [...this.items.filter((tag) => tag.checked).map((tag) => tag.id)]);
    },
  },
  created() {
    this.items = this.modelValue;
  },
};
</script>

<style scoped>
div {
  margin: 0 0.5rem 0.5rem 0;
}
p {
  color: #59a;
}
</style>
