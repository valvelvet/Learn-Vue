<template>
  <section>
    <BaseCard class="commission-painter">
      <div class="commission-painter-avator">
        <div class="commission-painter-avatorPic">
          <img :src="painter.avator" alt="" />
        </div>
      </div>
      <div class="commission-painter-info">
        <h3>{{ painter.name }}</h3>
        <p>{{ painter.description }}</p>
      </div>
      <div class="commission-painter-tags">
        <BaseChip v-for="tag in opctionTags" :key="tag.id" :readonly="true" :painter="tag">{{ tag.value }}</BaseChip>
      </div>
    </BaseCard>
    <BaseCard v-if="loginId !== painter.id">
      <!-- <h1>發送委託訊息</h1> -->
      <form @submit.prevent="save()">
        <BaseInput label="Email：" v-model="commission.email" @onInput="updateData('email', $event)"></BaseInput>
        <BaseTextarea
          label="Context："
          row="4"
          v-model="commission.context"
          @onInput="updateData('context', $event)"
        ></BaseTextarea>
        <BaseButton>送出</BaseButton>
      </form>
    </BaseCard>
  </section>
</template>

<script>
export default {
  data() {
    return {
      commission: {
        painterId: "",
        email: "",
        context: "",
      },
    };
  },
  computed: {
    opctionTags() {
      return this.$store.getters.tags([...this.painter.tags]);
    },
    painter() {
      return { ...this.$store.getters.painterInfo(this.commission.painterId) };
    },
    loginId() {
      const islogin = this.$store.getters.islogin;
      if (islogin) return this.$store.getters.loginId;
      else return null;
    },
  },
  methods: {
    updateData(key, data) {
      this.commission[key] = data;
    },
    save() {
      console.log(this.commission);
      this.$store.dispatch("addNewCommission", this.commission);
    },
    initPainterInfo(id) {
      this.id = id;
      this.painter = { ...this.$store.getters.painterInfo(id) };
    },
  },
  created() {
    this.commission.painterId = this.$route.query.id;
  },
};
</script>
<style scoped>
.commission-painter {
  margin-bottom: 2rem;
  min-height: calc(150px + 2rem);
}
.commission-painter-avator {
  float: left;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.commission-painter-avatorPic {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: inset 0 1px 5px 0 #ddd;
}
.commission-painter-avatorPic img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.commission-painter-info {
  min-height: calc(150px - 2rem);
}
.commission-painter-info h3 {
  color: #446;
}
.commission-painter-info p {
  color: #558;
  margin-block: 1rem;
}
.commission-painter-tags {
  text-align: end;
  width: 100%;
}
@media screen and (max-width: 378px) {
  .commission-painter-avator {
    width: 100%;
  }
  .commission-painter-avatorPic {
    margin: auto;
  }
}
</style>
