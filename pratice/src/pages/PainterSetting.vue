<template>
  <section>
    <BaseCard>
      <form @submit.prevent="save()">
        <div class="buttons">
          <BaseButton v-if="!editing" @click="editing = true">編輯</BaseButton>
          <BaseButton v-if="editing" @click="editing = false">取消</BaseButton>
          <BaseButton v-if="editing" @click="save()">儲存</BaseButton>
        </div>
        <div class="avator">
          <div class="avatorPic">
            <img :src="painter.avator" alt="" />
          </div>
          <BaseInput v-if="editing" v-model="painter.avator" @onInput="updateData('avator', $event)"></BaseInput>
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
            row="5"
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
            <div v-if="editing">
              <BaseInput v-model="painter.works[0]" @onInput="updateWorks(0, $event)"></BaseInput>
              <BaseInput v-model="painter.works[1]" @onInput="updateWorks(1, $event)"></BaseInput>
              <BaseInput v-model="painter.works[2]" @onInput="updateWorks(2, $event)"></BaseInput>
            </div>
            <div @click="updateData('avator', $event)">
              <img v-for="pic in painter.works" :key="pic" :src="pic" />
            </div>
          </div>
        </div>
      </form>
    </BaseCard>
  </section>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      painter: {
        email: "",
        name: "",
        description: "",
        tags: [],
        works: ["", "", ""],
        avator: "",
      },
    };
  },
  computed: {
    opctionTags() {
      return [...this.$store.getters.tagsOpctions].map((tag) => {
        return { ...tag, checked: this.painter.tags?.find((t) => t === tag.id) ? true : false };
      });
    },
  },
  methods: {
    updateData(key, data) {
      console.log(this.painter);
      this.painter[key] = data;
    },
    updateWorks(key, data) {
      this.painter.works[key] = data;
    },
    save() {
      this.painter.works = this.painter.works?.filter((work) => work);
      this.painter = {
        ...this.painter,
        works: this.painter.works?.filter((work) => work),
        isEnable:
          this.painter.avator &&
          this.painter.description &&
          this.painter.name &&
          this.painter.tags.length &&
          this.painter.works.length
            ? true
            : false,
      };
      this.$store.dispatch("updatePainterInfo", this.painter);
      this.editing = false;
    },
  },
  async created() {
    await this.$store.dispatch("getPainters");
    this.painter = await { ...this.$store.getters.painterInfo };
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
.avator :deep(input) {
  width: 100%;
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
section form > .buttons {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.artWorks div {
  width: 100%;
}
.artWorks :deep(input) {
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
