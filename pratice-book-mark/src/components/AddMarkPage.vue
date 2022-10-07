<template>
  <BaseCard>
    <BaseTextInput :value="newMark.title" @onInput="updateData('title', $event)"> 書籤名稱 </BaseTextInput>
    <BaseTextInput :value="newMark.text" @onInput="updateData('text', $event)"> 書籤簡介 </BaseTextInput>
    <BaseTextInput :value="newMark.url" @onInput="updateData('url', $event)"> 網址 </BaseTextInput>

    <teleport to="body">
      <ErrorPopup v-if="popError" title="Input Error" @closePop="popError = false">{{ errorStr }}</ErrorPopup>
    </teleport>
    <button @click="addMark(newMark)">⤴</button>
  </BaseCard>
</template>

<script>
export default {
  emits: ["addMark"],
  data() {
    return {
      errorStr: "",
      popError: false,
      newMark: {
        title: "",
        text: "",
        url: "",
      },
    };
  },
  methods: {
    initInput() {
      this.newMark = {
        title: "",
        text: "",
        url: "",
      };
    },
    updateData(key, data) {
      this.newMark[key] = data;
    },
    addMark(newMark) {
      this.errorStr = "";
      if (!this.newMark.title) this.errorStr += "請輸入 書籤名稱\n";
      if (!this.newMark.text) this.errorStr += "請輸入 書籤簡介\n";
      if (!this.newMark.url) this.errorStr += "請輸入 網址\n";
      if (this.errorStr) {
        this.popError = true;
      } else {
        this.initInput();
        this.$emit("addMark", newMark);
      }
    },
  },
};
</script>

<style scoped></style>
