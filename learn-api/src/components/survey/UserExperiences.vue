<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurvey">Load Submitted Experiences</base-button>
      </div>
      <LoadingMask v-if="isLoading" />
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length <= 0)">查無資料</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadSurvey() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://learn-vue-http-285cc-default-rtdb.firebaseio.com/survey.json" //, {
        //   method: "GET", // 預設即為"GET"，可不寫
        //   headers: {}, // 沒有 body所以也沒有 headers
        //   body: {}, // 無request，略過不寫
        // }
      )
        .then((res) => {
          if (res.ok) {
            console.log(res);
            return res.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          console.log(data);
          this.results = [];
          for (const key in data) {
            this.results.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = "連線錯誤，請稍後再試";
          console.log(error);
        });
    },
  },
  // mounted() {
  //   this.loadSurvey();
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
