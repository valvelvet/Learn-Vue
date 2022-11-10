<template>
  <li>
    <router-link
      :to="infoPage"
      @mouseenter="hovering()"
      @mouseleave="endHover()"
      class="painter-card"
      :class="{ hovering: hover }"
    >
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
        <p>Commisson »</p>
      </div>
    </router-link>
    <transition name="art-works">
      <div class="works" v-if="hover">
        <transition name="art-work" v-for="(work, index) in value.works" :key="work">
          <img v-if="workSwitch === index" :src="work" />
        </transition>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      hover: false,
      workSwitch: 0,
      switching: null,
    };
  },
  computed: {
    opctionTags() {
      return this.$store.getters.tags([...this.value.tags]);
    },
    infoPage() {
      return { name: "COMMISSION", query: { id: this.value.email } };
    },
  },
  methods: {
    hovering() {
      this.hover = true;
      if (this.value.works.length > 1)
        this.switching = setInterval(() => {
          this.workSwitch = this.workSwitch < this.value.works.length - 1 ? this.workSwitch + 1 : 0;
        }, 3000);
    },
    endHover() {
      clearTimeout(this.switching);
      this.hover = false;
      this.workSwitch = 0;
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  display: flex;
  border-radius: 200px 0 0 200px;
}
li:hover .info {
  background: linear-gradient(90deg, #fffc 450px, transparent);
}
.painter-card {
  width: 100%;
}
.painter-card .hovering {
  position: relative;
  z-index: 10;
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
.avator img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
li:hover .avator img {
  transform: translate(-50%, -50%) scale(1.05);
}
.link p {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 200px 0 0 200px;
  font-size: 100px;
  width: 700px;
  line-height: 150px;
  color: #88a;
  transition: 1s ease;
  background: linear-gradient(90deg, transparent 250px, #fffc 350px, #fffc 80%, transparent 100%);
}
li:hover .link p {
  left: 150px;
  opacity: 1;
}
.info {
  width: 100%;
  height: 150px;
  padding: 1rem;
  background: linear-gradient(90deg, #fff 90%, transparent);
  padding-left: 170px;
  border-radius: 200px 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #333;
}
.info p {
  color: #888;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.tags {
  display: flex;
}
.works {
  position: fixed;
  bottom: 2rem;
  left: 0;
  width: 100%;
  height: calc(100% - 60px - 2rem);
  z-index: 1;
}
.art-works-leave-to,
.art-works-enter-from {
  opacity: 0;
}
.art-works-leave-active,
.art-works-enter-active {
  transition: 1s ease;
}
.art-works-enter-to,
.art-works-leave-from {
  opacity: 1;
}
.works img {
  display: block;
  position: absolute;
  height: 90%;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  box-shadow: 0 0 50px 50px #3332;
}
.art-work-enter-from {
  opacity: 0;
  left: 100% !important;
}
.art-work-leave-active,
.art-work-enter-active {
  transition: 1s ease;
}
.art-work-enter-to,
.art-work-leave-from {
  opacity: 1;
  left: 50% !important;
}
.art-work-leave-to {
  opacity: 0;
  left: 0% !important;
}
</style>
