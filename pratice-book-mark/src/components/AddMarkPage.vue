<template>
  <BaseCard>
    <form @submit.prevent="sub(newMark)">
      <BaseTextInput :value="newMark.title" type="text" @onInput="updateData('title', $event)">
        書籤名稱
      </BaseTextInput>
      <BaseTextInput :value="newMark.text" type="textarea" @onInput="updateData('text', $event)">
        書籤簡介
      </BaseTextInput>
      <BaseTextInput :value="newMark.url" type="url" @onInput="updateData('url', $event)"> 網址 </BaseTextInput>

      <BaseButton type="submit">⤴</BaseButton>
    </form>
  </BaseCard>
  <BasePopup v-if="popError" title="Input Error" @closePop="popError = false">{{ errorStr }}</BasePopup>
</template>

<script>
export default {
  inject: ["addMark"],

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
    sub(newMark) {
      this.errorStr = "";
      this.newMark.title = this.newMark.title.trim();
      this.newMark.text = this.newMark.text.trim();
      this.newMark.url = this.newMark.url.trim();
      if (!this.newMark.title) this.errorStr += "請輸入 書籤名稱\n";
      if (!this.newMark.text) this.errorStr += "請輸入 書籤簡介\n";
      if (!this.newMark.url) this.errorStr += "請輸入 網址\n";
      if (this.errorStr) {
        this.popError = true;
      } else {
        this.initInput();
        this.addMark(newMark);
      }
    },
  },
};
</script>

<style scoped></style>
