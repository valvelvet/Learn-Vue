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
        <BaseChip v-for="tag in opctionTags" :key="tag.id" :readonly="true" :value="tag">{{ tag.value }}</BaseChip>
      </div>
    </BaseCard>
    <BaseCard>
      <form @submit.prevent="save()">
        <BaseInput
          label="Email："
          type="email"
          :readonly="isSend"
          v-model="commission.email"
          @onInput="updateData('email', $event)"
        ></BaseInput>
        <BaseTextarea
          label="Context："
          row="4"
          :readonly="isSend"
          v-model="commission.context"
          @onInput="updateData('context', $event)"
        ></BaseTextarea>
        <BaseButton v-if="!isSend">送出</BaseButton>
        <BaseButton v-else :isLink="true" to="/">返回首頁</BaseButton>
        <p class="error-msg">{{ valid.msg }}</p>
      </form>
    </BaseCard>
  </section>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      loading: false,
      isSend: false,
      commission: {
        painterId: "",
        email: "",
        context: "",
      },
      valid: {
        msg: "",
      },
      painter: {},
      opctionTags: [],
    };
  },
  computed: {
    userId() {
      if (this.$store.getters.token) return this.$store.getters.userId;
      else return null;
    },
  },
  methods: {
    updateData(key, data) {
      this.commission[key] = data;
    },
    async save() {
      this.loading = true;
      if (!this.valid.msg) {
        const res = await this.$store.dispatch("addNewCommission", this.commission);
        if (res.code === 200) {
          this.loading = false;
          this.isSend = true;
        } else {
          this.valid.msg = res.message;
        }
      }
    },
    async initCommission() {
      this.commission.painterId = this.$route.query.id;
    },
  },
  async created() {
    await this.$store.dispatch("getPainters");
    await this.initCommission();
    this.painter = await this.$store.getters.painterInfo(this.commission.painterId);
    this.opctionTags = await this.$store.getters.tags([...this.painter.tags]);
  },
  beforeRouteEnter(to) {
    if (store.getters.token) {
      const userId = store.getters.userId;
      if (userId === to.query.id) return { path: "/SETTING" };
    }
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
