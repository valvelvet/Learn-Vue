<template>
  <section class="container">
    <table>
      <tr>
        <th colspan="2">
          <BaseButton @onClick="changeData">Change Data</BaseButton>
        </th>
      </tr>
      <tr>
        <td>基本變數無響應</td>
        <td>
          <span :class="{ red: baseVal != 'baseVal' }">{{ baseVal }}</span>
        </td>
      </tr>
      <tr>
        <th colspan="2"><h2>««« ref »»»</h2></th>
      </tr>
      <tr>
        <td>用 ref 達成響應</td>
        <td>
          <span :class="{ red: refName != 'ref' }">{{ refName }}</span>
        </td>
      </tr>
      <tr>
        <td>物件 有響應</td>
        <td>
          <span :class="{ red: book.price != 399 }">$ {{ book.price }}</span>
        </td>
      </tr>
      <tr>
        <td>物件屬性 沒有響應</td>
        <td>
          <span :class="{ red: bookPrice != 399 }">$ {{ bookPrice }}</span>
        </td>
      </tr>
      <tr>
        <th colspan="2"><h2>««« reactive »»»</h2></th>
      </tr>
      <tr>
        <td>基本型別響應無效</td>
        <td>
          <span :class="{ red: candyName != '黑嘉麗' }">{{ candyName }}</span>
        </td>
      </tr>
      <tr>
        <td>物件響應</td>
        <td>
          <span :class="{ red: candy.price != 45 }">$ {{ candy.price }}</span>
        </td>
      </tr>
    </table>
    <div>
      <!-- <input type="text" placeholder="姓" @input="updateFirstName" />
      <input type="text" placeholder="名" @input="updateLastName" /> -->
      <BaseInput type="text" placeholder="姓" v-model="firstName" @input="firstName = $event.target.value" />
      <input type="text" placeholder="名" v-model="lastName" />
      <p>姓名：{{ userName }}</p>
    </div>
    <div>
      <BaseButton :btnStyle="{ marginRight: '1rem' }" @onClick="clickButton()">Click Me</BaseButton>
      <span ref="clickCount">0</span>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
import BaseInput from "./components/BaseInput.vue";
export default {
  // data() {
  //   return {
  //     baseVal: "baseVal",
  //     firstName: "",
  //     lastName: ""
  //   };
  // },
  // methods: {
  //   changeData() { this.baseVal = "baseVal reactive" }
  // },
  // mounted: {
  //   userName() { return this.firstName + " " + this.lastName }
  // },
  components: { BaseInput },
  setup() {
    // 基本變數無響應
    let baseVal = "baseVal";

    // ========== 響應式 ==========
    // ref()
    // 訪問需透過.value
    // 較適用於基本型別：string, number, bool
    // 複雜型別（ref 跟 rective 都一樣），無法響應深層(響應物件：直接傳物件 - 以物件取用會保持響應；直接傳物件的屬性 - 會無法響應)
    const refName = ref("refName");

    // ref 無法監聽深層變化，book 有響應，但 book.name 沒有
    const book = ref({
      price: 399,
    });

    // --------------------------
    // reactive()
    // 訪問可以繞過.value
    // 適用於複雜型別：object, array
    // 無法對基本類型創建響應，傳入基本類型會直接返回原始數據，不會有響應性
    let candyName = reactive("黑嘉麗"); // reactive 對基本型別無響應性，會直接返回值
    const candy = reactive({
      price: 45,
    });

    function changeData() {
      baseVal = "在 <script setup> 有響應"; // 不會有響應(在 <script setup> 有響應？？)
      refName.value = "refName reactive"; // ref 需要改 .value
      book.value.price *= 0.9;
      candyName = "在 <script setup> 有響應"; // reactive 對基本型別無響應性，會直接返回值
      candy.price *= 0.9; // reactive 可以繞過.value
    }

    // --------------------------
    const firstName = ref("");
    const lastName = ref("");
    // function updateFirstName(event) {
    //   firstName.value = event.target.value;
    // }
    // function updateLastName(event) {
    //   lastName.value = event.target.value;
    // }
    const userName = computed(() => {
      return firstName.value + " " + lastName.value;
    });
    // --------------------------
    // watch(userName, (newval, oldval) => {
    //   console.log("Old name", oldval);
    //   console.log("New name", newval);
    // });
    watch([candy, userName], (newval, oldval) => {
      console.log("candy price: Old - ", oldval[0].price, "New - ", newval[0].price);
      console.log("name: Old - ", oldval[1], "New - ", newval[1]);
    });
    // watch 物件內屬性的方法(watch 物件再看屬性，old value 會抓到新的)，或把屬性也改成響應性：const { price } = toRefs(candy);
    watch(
      () => candy.price,
      (newValue, oldValue) => {
        console.log("watch 物件內屬性: Old - ", oldValue, "New - ", newValue);
      }
    );
    // --------------------------
    // template 的 Refs
    const clickCount = ref(null);
    function clickButton() {
      console.log('+1');
      clickCount.value.innerText = parseInt(clickCount.value.innerText) + 1;
      // clickCount.value 為 template 中 ref 綁定的標籤
      // clickCount.value.innerText 為綁定的標籤的 .innerText
      // 如果 ref 綁的是 input 標籤，操作 input 資料就會出現 "XXX.value.value"，看起來怪怪但合理的寫法
    }

    return {
      baseVal,
      refName,
      book,
      bookPrice: book.value.price,
      candy,
      candyName,
      changeData,
      firstName,
      lastName,
      userName,
      clickCount,
      clickButton,
    };
  },
};
</script>

<!-- <script setup>
import { ref, reactive, computed, watch } from "vue";

// 基本變數無響應(在 <script setup> 有響應)
let baseVal = "baseVal";

// ========== 響應式 ==========
// ref()
// 訪問需透過.value
// 較適用於基本型別：string, number, bool
// 複雜型別（ref 跟 rective 都一樣），無法響應深層(響應物件：直接傳物件 - 以物件取用會保持響應；直接傳物件的屬性 - 會無法響應)
const refName = ref("ref");

// ref 無法監聽深層變化，book 有響應，但 book.name 沒有
const book = ref({
  price: 399,
});
const bookPrice = book.value.price;
// --------------------------
// reactive()
// 訪問可以繞過.value
// 適用於複雜型別：object, array
// 無法對基本類型創建響應，傳入基本類型會直接返回原始數據，不會有響應性
let candyName = reactive("黑嘉麗"); // reactive 對基本型別無響應性，會直接返回值(在 <script setup> 有響應)
const candy = reactive({
  price: 45,
});

function changeData() {
  baseVal = "在 <script setup> 有響應"; // 不會有響應(在 <script setup> 有響應？？)
  refName.value = "refName reactive"; // ref 需要改 .value
  book.value.price *= 0.9;
  candyName = "在 <script setup> 有響應"; // reactive 對基本型別無響應性，會直接返回值(在 <script setup> 有響應)
  candy.price *= 0.9; // reactive 可以繞過.value
}
// --------------------------
const firstName = ref("");
const lastName = ref("");
// function updateFirstName(event) {
//   firstName.value = event.target.value;
// }
// function updateLastName(event) {
//   lastName.value = event.target.value;
// }
const userName = computed(() => {
  return firstName.value + " " + lastName.value;
});
// --------------------------
// watch(userName, (newval, oldval) => {
//   console.log("Old name", oldval);
//   console.log("New name", newval);
// });
watch([candy, userName], (newval, oldval) => {
  console.log("candy price: Old - ", oldval[0].price, "New - ", newval[0].price);
  console.log("name: Old - ", oldval[1], "New - ", newval[1]);
});
// watch 物件內屬性的方法(watch 物件再看屬性，old value 會抓到新的)，或把屬性也改成響應性：const { price } = toRefs(candy);
watch(
  () => candy.price,
  (newValue, oldValue) => {
    console.log("watch 物件內屬性: Old - ", oldValue, "New - ", newValue);
  }
);
</script> -->

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
h2 {
  text-align: center;
}
table {
  margin: auto;
  white-space: pre-wrap;
}
tr > td:first-child {
  text-align: right;
  border-right: 3px solid #ddd;
}
.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.red {
  color: #e44;
}
</style>
