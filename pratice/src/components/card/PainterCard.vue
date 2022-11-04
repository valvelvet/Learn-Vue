<template>
  <li>
    <div @mouseenter="hover = true" @mouseleave="hover = false" @click="active = true">
      <div class="avator">
        <img :src="value.avator" alt="" />
      </div>
      <div class="info">
        <div>
          <h3>{{ value.name }}</h3>
          <p>{{ value.description }}</p>
        </div>
        <div class="tags">
          <BaseChip v-for="tag in opctionTags" :key="tag.id" :readonly="true" :value="tag">{{ tag.value }}</BaseChip>
        </div>
      </div>
      <div class="link">
        <router-link :to="infoPage">Commisson ></router-link>
      </div>
    </div>
    <div class="work" v-if="hover || active">
      <img v-for="work in value.works" :key="work" :style="{ height: worksNum + '%' }" :src="work" />
    </div>
  </li>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      hover: false,
      active: false,
    };
  },
  computed: {
    opctionTags() {
      return this.$store.getters.tags([...this.value.tags]);
    },
    infoPage() {
      return { name: "COMMISSION", query: { id: this.value.id } };
    },
    worksNum() {
      return 100 / this.value.works.length;
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  display: flex;
  z-index: 1;
  background: linear-gradient(90deg, #fff 150px, transparent);
  border-radius: 200px 0 0 200px;
}
.work {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  z-index: -1;
}
.work img {
  display: block;
  padding: 1rem;
  opacity: 0.8;
}
.avator {
  position: absolute;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: -50px;
  border: 5px solid #fff;
}
.link {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  bottom: 0;
  right: 0;
}
.link a {
  font-size: 2rem;
  color: #88a2;
}
.link a:hover {
  color: #88a7;
}
.avator img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.info {
  width: 100%;
  height: 150px;
  padding: 1rem;
  background: linear-gradient(90deg, #fff 150px, transparent);
  padding-left: 170px;
  border-radius: 200px 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;
}
li:hover {
  background: linear-gradient(90deg, #fff 80%, transparent);
}

li:hover .avator img {
  transform: translate(-50%, -50%) scale(1.05);
}
.tags {
  display: flex;
}
p {
  color: #888;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
