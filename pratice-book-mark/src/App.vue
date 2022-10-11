<template>
  <TheHeader />
  <main>
    <BaseCard>
      <TheMenu :menu="menu" @changePage="changePage" :openingPage="page"></TheMenu>
    </BaseCard>
    <keep-alive>
      <component :is="page"></component>
    </keep-alive>
  </main>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheMenu from "./components/layouts/TheMenu.vue";
import BookMarkPage from "./components/BookMarkPage.vue";
import AddMarkPage from "./components/AddMarkPage.vue";

export default {
  components: {
    TheHeader,
    TheMenu,
    BookMarkPage,
    AddMarkPage,
  },
  data() {
    return {
      menu: [
        { component: "BookMarkPage", lable: "列表" },
        { component: "AddMarkPage", lable: "新增書籤" },
      ],
      page: "BookMarkPage",
      bookMarks: [
        {
          id: 1,
          title: "ABCD",
          text: "abcdefg",
          url: "https://google.com",
        },
        {
          id: 2,
          title: "0123",
          text: "4567890",
          url: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      bookMarks: this.bookMarks,
      deleteBookMark: this.deleteBookMark,
      addMark: this.addMark,
    };
  },
  methods: {
    deleteBookMark(markId) {
      this.bookMarks.splice(
        this.bookMarks.findIndex((item) => item.id === markId),
        1
      );
    },
    changePage(t) {
      this.page = t;
    },
    addMark(newMark) {
      this.bookMarks.push({
        id: this.bookMarks.length + 1,
        ...newMark,
      });
      this.changePage("BookMarkPage");
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

* {
  margin: 0;
  padding: 0;
  color: #555;
  box-sizing: border-box;
  list-style: none;
}
</style>
