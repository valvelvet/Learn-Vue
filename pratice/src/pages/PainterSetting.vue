<template>
  <section>
    <BaseCard>
      <form @submit.prevent="save()">
        <BaseButton v-if="!editing" @click="editing = true">編輯</BaseButton>
        <BaseButton v-if="editing" @click="save()">儲存編輯</BaseButton>
        <div class="avator">
          <div class="avatorPic">
            <img :src="painter.avator" alt="" />
          </div>
          <BaseButton v-if="editing" @click="updateData('avator', $event)">
            <img src="https://cdn-icons-png.flaticon.com/512/3031/3031708.png" alt="" />
          </BaseButton>
        </div>
        <div class="intro">
          <BaseInput
            label="暱稱："
            v-model="painter.name"
            :readonly="!editing"
            @onInput="updateData('name', $event)"
          ></BaseInput>
          <BaseTextarea
            label="自我介紹："
            row="4"
            v-model="painter.description"
            :readonly="!editing"
            @onInput="updateData('description', $event)"
          ></BaseTextarea>
        </div>
        <div class="intro2">
          <BaseChipGroup
            label="領域標籤："
            v-model="opctionTags"
            :readonly="!editing"
            @onInput="updateData('tags', $event)"
          >
            {{ tag.value }}
          </BaseChipGroup>
          <div class="artWorks">
            <label for="">Sample work：</label>
            <div @click="updateData('avator', $event)">
              <img v-for="pic in painter.works" :key="pic" :src="pic" />
            </div>
          </div>
          <!-- <BaseFileUpLoad></BaseFileUpLoad> -->
        </div>
      </form>
    </BaseCard>
  </section>
</template>

<script>
import store from "@/store/index.js";
export default {
  data() {
    return {
      id: "",
      painter: {
        id: "",
        name: "",
        description: "",
        tags: [],
        works: [],
        avator: "",
      },
      editing: false,
    };
  },
  computed: {
    opctionTags() {
      return [...this.$store.getters.tagsOpctions].map((tag) => {
        return { ...tag, checked: this.painter.tags.find((t) => t === tag.id) ? true : false };
      });
    },
  },
  methods: {
    updateData(key, data) {
      this.painter[key] = data;
    },
    save() {
      this.$store.dispatch("updatePainterInfo", this.painter);
      this.editing = false;
    },
    initPainterInfo(id) {
      this.id = id;
      this.painter = { ...this.$store.getters.painterInfo(id) };
    },
  },
  created() {
    this.initPainterInfo(this.$store.getters.loginId);
  },
  beforeRouteEnter() {
    return !store.getters.islogin ? { name: "REGISTER" } : true;
  },
};
</script>

<style scoped>
section {
  margin: 0 auto;
}
section.commission {
  margin-top: 2rem;
}
section form {
  display: flex;
  flex-wrap: wrap;
}
.avator {
  position: relative;
  margin-right: 1rem;
  width: 150px;
  height: 150px;
}
.avatorPic {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: -50px;
  border: 5px solid #fff;
  box-shadow: inset 0 1px 5px 0 #ddd;
}
.avator .avatorPic img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.avator button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  font-style: 1rem;
}
.avator button img {
  width: 50%;
  border-radius: 2px;
}
.intro {
  width: calc(100% - 150px - 1rem);
}
section :deep(textarea) {
  width: 100%;
}
:deep(label) {
  display: block;
}
section form > button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.artWorks div {
  width: 100%;
}
.artWorks img {
  padding: 1rem;
  width: calc(100% / 3);
}

@media screen and (max-width: 500px) {
  section form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .intro {
    width: 100%;
  }
  .intro2 {
    width: 100%;
  }
}
</style>
