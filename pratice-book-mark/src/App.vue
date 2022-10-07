<template>
  <TheHeader />
  <main>
    <BaseCard>
      <TheMenu :menu="menu" @changePage="changePage" :openingPage="page"></TheMenu>
    </BaseCard>
    <keep-alive>
      <component :is="page" :bookMarks="bookMarks" @deleteBookMark="deleteBookMark" @addMark="addMark"></component>
    </keep-alive>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMenu from "./components/TheMenu.vue";
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
  methods: {
    deleteBookMark(markId) {
      this.bookMarks = this.bookMarks.filter((item) => item.id !== markId);
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
}
button {
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.5rem;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 4px 2px #00000022;
}
button:hover {
  background-color: #00000006;
  box-shadow: inset 0 2px 3px 2px #00000022;
}
</style>
