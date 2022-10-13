<template>
  <section>
    <base-card>
      <h2>請問您的學習體驗?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name"><h3>姓名</h3></label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <div class="form-control">
          <h3>我的學習狀況</h3>
          <input type="radio" id="rating-1" value="1" name="rating" v-model="chosenRating" />
          <label for="rating-1">★</label>
          <input type="radio" id="rating-2" value="2" name="rating" v-model="chosenRating" />
          <label for="rating-2">★★</label>
          <input type="radio" id="rating-3" value="3" name="rating" v-model="chosenRating" />
          <label for="rating-3">★★★</label>
          <input type="radio" id="rating-4" value="4" name="rating" v-model="chosenRating" />
          <label for="rating-4">★★★★</label>
          <input type="radio" id="rating-5" value="5" name="rating" v-model="chosenRating" />
          <label for="rating-5">★★★★★</label>
        </div>
        <p v-if="invalidInput">親！有漏填呦～</p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>送出</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  // emits: ["survey-submit"],
  methods: {
    submitSurvey() {
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.error = null;
      fetch("https://learn-vue-http-285cc-default-rtdb.firebaseio.com/survey.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.enteredName,
          rating: this.chosenRating,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status + "連線錯誤，請稍後再試");
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error.message;
          console.log(error);
        });
      // this.$emit("survey-submit", {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.enteredName = "";
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0 0 2rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  padding-right: 1rem;
}

input:checked + label {
  color: #092;
}
</style>
