// .... weight .....
document.getElementsByTagName("body")[0].style.width = 9 * (400 + 32) + "px";
// <<<<<<<<<<<<<<<<<<<<<< Before Class >>>>>>>>>>>>>>>>>>>>>>
// -------- 原生JS寫法 --------
// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const ulEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItem = document.createElement("li");
//   listItem.textContent = enteredValue;
//   ulEl.append(listItem);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);

// -------- Vue3寫法 --------
Vue.createApp({
  data() {
    // data: function() {}
    return {
      goalList: [
        { course: "Vue with Dom", link: "#user-goal" },
        { course: "事件 Events", link: "#events" },
        { course: "computed & watch", link: "#vueComputed" },
        { course: "動態樣式 Dynamic Styling", link: "#styling" },
        { course: "Vue 條件句", link: "#todoList" },
        { course: "遊戲", link: "#praticeGame" },
        { course: "Vue 的運作原理", link: "#proxy" },
        { course: "Components 組件", link: "#friendList" },
      ],
      goalInput: "",
    };
  },
  methods: {
    // 函式
    addGoal() {
      this.goalInput ? this.goalList.push({ course: this.goalInput }) : "";
      this.goalInput = "";
    },
  },
}).mount("#app"); // 以 css選取器選取作用區域

// <<<<<<<<<<<<<<<<<<<<<< Dom >>>>>>>>>>>>>>>>>>>>>>
// -------- Dom 交互 --------
const app = Vue.createApp({
  data() {
    return {
      data: "I'm data...",
      goalLink: "https://google.com",
    };
  },
  methods: {
    add(a, b) {
      return a + b;
    },
  },
});
app.mount("#user-goal"); // 以 css選取器選取作用區域
// -------- Dom - Pratice --------
// pratice-1
Vue.createApp({
  data() {
    return {
      name: "Max",
      age: 18,
      image: "http://placekitten.com/400/301",
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");

// <<<<<<<<<<<<<<<<<<<<<< Events >>>>>>>>>>>>>>>>>>>>>>
// -------- Vue Events --------
Vue.createApp({
  data() {
    return {
      resulet: Math.floor(Math.random() * 100),
      inputName: "",
      name: "",
      wing: "",
    };
  },
  methods: {
    sub(num) {
      this.resulet = this.resulet - num;
    },
    setName(event, wing = "乂") {
      this.name = event.target.value;
      this.wing = wing;
    },
    submitForm() {
      // event.preventDefault();
      alert("已送出表單！");
    },
    resetInput() {
      this.name = "";
      this.wing = "";
    },
  },
}).mount("#events");
// -------- Events - Pratice --------
// Vue Events
Vue.createApp({
  data() {
    return {
      keyDownInput: "",
      enteredInput: "",
    };
  },
  methods: {
    showAlert(text) {
      alert(text);
    },
    keyDownSet(e) {
      this.keyDownInput = e.target.value;
    },
    enteredSet(e) {
      this.enteredInput = e.target.value;
    },
  },
}).mount("#praticeEvents");

// <<<<<<<<<<<<<<<<<<<<<< computed & watch >>>>>>>>>>>>>>>>>>>>>>
// -------- computed --------
Vue.createApp({
  data() {
    return {
      A: 0,
      B: 0,
    };
  },
  computed: {
    // vue自動檢查依賴項，若依賴項有更動才執行函數，若依賴項未變動則傳出前次執行結果之緩存
    add() {
      return this.A + this.B;
    },
  },
  methods: {},
}).mount("#vueComputed");
// -------- watch --------
Vue.createApp({
  data() {
    return {
      X: 0,
      Y: 0,
    };
  },
  watch: {
    X(value) {
      console.log("X =", value);
      this.Y = value;
    },
  },
  computed: {},
  methods: {},
}).mount("#vueWatch");
// -------- Reactivity - Pratice --------
Vue.createApp({
  data() {
    return {
      counted: 0,
      result: "Start to get 37",
      counting: false,
    };
  },
  watch: {
    counted(value) {
      console.log("counted =", value);
      this.result = value === 37 ? "You got it!" : value === 0 ? "Start to get 37" : value > 37 ? "Too much!" : "Not there yet";
      if (!this.counting && value !== 0) {
        this.counting = true;
        setTimeout(() => {
          this.counted = 0;
          this.counting = false;
        }, 5000);
      }
    },
  },
  computed: {},
  methods: {
    add(num) {
      this.counted += num;
    },
  },
}).mount("#praticeReactivity");

// <<<<<<<<<<<<<<<<<<<<<< 動態樣式 Dynamic Styling >>>>>>>>>>>>>>>>>>>>>>
// -------- 動態樣式 Dynamic Styling --------
Vue.createApp({
  data() {
    return {
      selectA: false,
      selectB: false,
      selectC: false,
      selectD: false,
      selectE: false,
      selectF: false,
    };
  },
  watch: {},
  computed: {
    boxFClass() {
      return { active: this.selectF };
    },
  },
  methods: {
    selected(box) {
      switch (box) {
        case "A":
          this.selectA = !this.selectA;
          break;
        case "B":
          this.selectB = !this.selectB;
          break;
        case "C":
          this.selectC = !this.selectC;
          break;
        case "D":
          this.selectD = !this.selectD;
          break;
        case "E":
          this.selectE = !this.selectE;
          break;
        case "F":
          this.selectF = !this.selectF;
          break;
        default:
          break;
      }
    },
  },
}).mount("#styling");
// -------- Dynamic Styling - Pratice --------
Vue.createApp({
  data() {
    return {
      boxColor: "0",
      boxVisible: "visible",
      setBackgroundColor: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    changVisible() {
      this.boxVisible = this.boxVisible === "hidden" ? "visible" : "hidden";
    },
  },
}).mount("#praticeDynamicStyling");

// <<<<<<<<<<<<<<<<<<<<<< 條件句 >>>>>>>>>>>>>>>>>>>>>>
// -------- Vue 條件句 --------
Vue.createApp({
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
}).mount("#todoList");
// -------- Vue 條件句 --------
Vue.createApp({
  data() {
    return {
      item: "",
      items: [],
      showList: true,
    };
  },
  watch: {},
  computed: {},
  methods: {
    addLi() {
      this.items.push(this.item);
      this.item = "";
    },
  },
}).mount("#praticeList");

// <<<<<<<<<<<<<<<<<<<<<< Play a game? >>>>>>>>>>>>>>>>>>>>>>
function randomNum(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}
Vue.createApp({
  data() {
    return {
      gameState: 0, // 0: 第一次加入, 1: 戰鬥中, 2: 戰鬥結算
      playerName: "",
      stateLv: 1,
      candy: 0,

      healthRandom: 0,
      atkRandom: 0,
      powRandom: 0,

      monsterHealth: 5,
      monsterMaxHealth: 5,
      monsterAtkMax: 2,
      monsterAtkMin: 1,

      playerHealth: 0,
      playerMaxHealth: 0,
      playerAtkMax: 0,
      playerAtkMin: 0,
      playerPower: 0,
      playerMaxPower: 0,

      gameLogs: [],
    };
  },
  watch: {
    healthRandom(value) {
      this.playerMaxHealth = value * 5;
      this.playerMaxPower = this.atkRandom + value;
    },
    atkRandom(value) {
      this.playerAtkMin = value;
      this.playerAtkMax = value + this.powRandom;
      this.playerMaxPower = value + this.healthRandom;
    },
    powRandom(value) {
      this.playerAtkMax = this.atkRandom + value;
    },
    gameState(newState, oldState) {
      // 0: 第一次加入, 1: 戰鬥中, 2: 戰鬥勝利結算, 3: 戰鬥失敗結算
      if (newState == 1) {
        this.monsterMaxHealth = this.stateLv * 5;
        this.monsterHealth = this.monsterMaxHealth;
        this.monsterAtkMax = this.stateLv * 2;
        this.monsterAtkMin = this.stateLv;
        this.playerHealth = this.playerMaxHealth;
        this.playerPower = this.playerMaxPower;
        this.candy = 5;
      }
    },
  },
  computed: {
    monsterHealthStyle() {
      return { width: (this.monsterHealth / this.monsterMaxHealth) * 100 + "%" };
    },
    playerHealthStyle() {
      return { width: (this.playerHealth / this.playerMaxHealth) * 100 + "%" };
    },
    playerPowerStyle() {
      return { width: (this.playerPower / this.playerMaxPower) * 100 + "%" };
    },
    readyToStart() {
      return this.playerName.length != 0 && this.healthRandom != 0 && this.candy === 0;
    },
  },
  methods: {
    addPoint(item) {
      this.candy--;
      switch (item) {
        case "health":
          this.healthRandom += 1;
          break;
        case "atk":
          this.atkRandom += 1;
          break;
        case "pow":
          this.powRandom += 1;
          break;
        default:
          break;
      }
    },
    dicePlayer() {
      this.healthRandom = Math.floor(Math.random() * 18) + 1;
      this.atkRandom = Math.floor(Math.random() * (18 - this.healthRandom)) + 1;
      this.powRandom = 20 - this.healthRandom - this.atkRandom;
    },
    moving(move, whoIsMoving) {
      const moveDice = Math.random();
      let num = 0;
      let who = "";
      let logText = "";
      switch (move) {
        case "attack":
          if (whoIsMoving === "Monster") {
            num = randomNum(this.monsterAtkMax, this.monsterAtkMin);
            this.playerHealth -= num;
            who = this.playerName;
          } else {
            num = randomNum(this.playerAtkMax, this.playerAtkMin);
            this.monsterHealth -= num;
            who = "Monster";
          }
          logText = `${who} 受到 ${num}點傷害`;
          break;
        case "heavyAttack":
          if (this.playerPower >= this.powRandom) {
            this.playerPower -= this.powRandom;
            num = randomNum(this.playerAtkMax + this.powRandom, this.playerAtkMin + this.powRandom);
            this.monsterHealth -= num;
            who = "Monster";
            logText = `${who} 受到 ${num}點傷害`;
          } else {
            logText = "耐力不足";
            move = "powloss";
          }
          break;
        case "recover":
          num = randomNum(this.playerAtkMax, this.playerAtkMin / 2);
          this.playerHealth += num;
          who = this.playerName;
          logText = `${who} 恢復 ${num}點血量`;
          const moveDice2 = Math.random();
          num = randomNum(this.playerAtkMax, this.playerAtkMin / 2);
          this.playerPower += num;
          logText += `、恢復 ${num}點耐力`;
          break;
        case "healing":
          if (this.playerPower >= this.powRandom) {
            num = randomNum(this.playerAtkMax + this.powRandom, this.playerAtkMin + this.powRandom);
            this.playerHealth += num;
            this.playerPower -= this.powRandom;
            who = this.playerName;
            logText = `${who} 受到 ${num}點治療`;
          } else {
            logText = "耐力不足";
            move = "powloss";
          }
          break;
        case "exit":
          logText = "已脫離戰鬥";
          this.gameState = 3;
          break;
        default:
          break;
      }
      this.playerHealth = this.playerHealth > this.playerMaxHealth ? this.playerMaxHealth : this.playerHealth;
      this.playerPower = this.playerPower > this.playerMaxPower ? this.playerMaxPower : this.playerPower;

      this.gameLogs.unshift({ text: logText, who: who, move: move });
      if (this.monsterHealth > 0 && this.playerHealth > 0 && whoIsMoving != "Monster" && this.gameState != 3) {
        // Monster round
        this.moving("attack", "Monster");
      } else if (this.monsterHealth <= 0) {
        // win
        this.stateLv++;
        this.gameState = 2;
      } else if (this.playerHealth <= 0) {
        // lose
        this.gameState = 3;
      }
    },
    round(move) {
      this.candy = this.candy > 1 ? this.candy - 1 : 1;
      this.moving(move, this.playerName);
      if (this.gameState === 3) {
        this.candy = 0;
      }
      if (this.gameLogs.length > 10) {
        this.gameLogs.length = 10;
      }
    },
  },
}).mount("#praticeGame");

// <<<<<<<<<<<<<<<<<<<<<< Vue 的運作原理 Behind The Scenes >>>>>>>>>>>>>>>>>>>>>>
// -------- proxy 更新 data --------
// 使 longMeesage 跟隨 meesage 做更新
data = {
  message: "Hello!",
  longMeesage: "Hello! friend!",
};

// // 原始 => message 改變，longMeesage 並未隨之更新
// data.longMeesage = data.message + " friend!"
// console.log(data.longMeesage);  // Hello! friend!
// data.message = "Hi!"; // 改變 message
// console.log(data.longMeesage);  // Hello! friend!  longMeesage 並未有更新

// 使用 Proxy => 設置 Handler，使 message 綁定 longMeesage 跟隨改變
dataHandler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMeesage = value + " friend!";
    }
    target[key] = value;
  },
};

const proxy = new Proxy(data, dataHandler);
console.log(proxy.longMeesage); // Hello! friend!
proxy.message = "Hi!"; // 改變 message
console.log(proxy.longMeesage); // Hi! friend!  longMeesage 有動態更新的效果

// -------- ref/refs --------
// 用法和v-model很像，v-model是監測每一次的資料變動，ref是在要使用時才去抓資料
// 在 html中註冊：ref
// 在 vue.js中調用使用：$refs
Vue.createApp({
  data() {
    return {
      currentInput: "",
      text: "html中註冊：ref；vue.js中調用：$refs",
    };
  },
  methods: {
    setText() {
      // this.text = this.currentInput;
      console.dir(this.$refs);
      console.dir(this.$refs.currentInput);
      this.text = this.$refs.currentInput.value;
    },
  },
}).mount("#refs");
// -------- 生命週期 --------
const lifeHooks = Vue.createApp({
  data() {
    return { text: "updated?" };
  },
  methods: {},

  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },

  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("update()");
  },

  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

lifeHooks.mount("#lifeHooks");

setTimeout(function () {
  lifeHooks.unmount(); // unmount:卸載 vue app
}, 2000);

// <<<<<<<<<<<<<<<<<<<<<< Components 組件 >>>>>>>>>>>>>>>>>>>>>>
// -------- Friend List --------
const friendList = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "01-2345 6789",
          email: "manuel@localhost.com",
        },
        {
          id: 2,
          name: "Julie Jones",
          phone: "09-8765 4321",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

friendList.component("friend-contact", {
  template: `<li>
              <h3>{{ friend.name }}</h3>
              <button @click="toggleDetail">{{ showDetail ? "Hide" : "Show" }} Details</button>
              <ul v-show="showDetail">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
              </ul>
            </li>`,
  data() {
    return {
      showDetail: false,
      friend: {
        id: 1,
        name: "Manuel Lorenz",
        phone: "01-2345 6789",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail;
    },
  },
});

friendList.mount("#friendList");
