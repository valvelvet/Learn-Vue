<template>
  <form @submit.prevent="sub">
    <div class="form-control">
      <label for="user-name">姓名</label>
      <span>{{ userNameValid === "valid" ? "＊輸入不得空白" : "" }}</span>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="validInput('userName')" />
    </div>
    <div class="form-control">
      <label for="age">年齡</label>
      <span>{{ userAgeValid === "empty" ? "＊輸入不得空白" : "" }}</span>
      <span>{{ userAgeValid === "toMin" ? "＊輸入不得為負值" : "" }}</span>
      <input id="age" name="age" type="number" v-model="userAge" ref="userAge" @blur="validInput('userAge')" />
    </div>
    <div class="form-control">
      <label for="referrer">從什麼通路了解我們的？</label>
      <span>{{ referrerValid === "valid" ? "＊輸入不得空白" : "" }}</span>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>你對什麼感興趣？</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>從何處學習？</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <h2>評分</h2>
      <!-- <RatingControl :value="rating" @onChange="updateData"></RatingControl> -->
      <!-- <RatingControl :model-value="..." @update:modelValue="..."></RatingControl> -->
      <RatingControl v-model="rating"></RatingControl>
    </div>
    <div class="form-control">
      <div>
        <input id="confirm" name="confirm" type="checkbox" v-model="confirm" />
        <label for="confirm">同意條款</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl.vue";
export default {
  components: { RatingControl },
  data() {
    return {
      userName: "",
      userAge: null,
      referrer: "google",
      interest: [],
      how: null,
      confirm: false,
      rating: 0,
      userNameValid: "",
      userAgeValid: "",
      referrerValid: "",
    };
  },
  methods: {
    initForm() {
      this.userName = "";
      this.userAge = null;
      this.referrer = "google";
      this.interest = [];
      this.how = null;
      this.confirm = false;
      this.rating = 0;
    },
    sub() {
      console.log('-----------');
      console.log("姓名: ", this.userName);
      console.log("年齡: ", this.userAge); // v-mode無需修飾符，值也將自動轉為 Number
      console.log("年齡 by ref: ", this.$refs.userAge.value); // ref 與 原生JS 存取的內容都是 String
      console.log("通路: ", this.referrer);
      console.log("感興趣: ", this.interest);
      console.log("從何處學習: ", this.how);
      console.log("評分: ", this.rating);
      console.log("同意條款: ", this.confirm);
      this.initForm();
    },
    updateData(value) {
      this.rating = value;
    },
    validInput(key) {
      switch (key) {
        case "userName":
          if (this.userName === "") {
            this.userNameValid = "valid";
          } else {
            this.userNameValid = "";
          }
          break;
        case "userAge":
          if (this.userAge === null) {
            this.userAgeValid = "empty";
          } else if (this.userAge < 0) {
            this.userAgeValid = "toMin";
          } else {
            this.userAgeValid = "";
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

span {
  font-size: smaller;
  color: #a30;
}
</style>
