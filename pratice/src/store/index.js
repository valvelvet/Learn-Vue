import { createStore } from "vuex";

const store = createStore({
  state: {
    islogin: false,
    loginId: "",
    painters: [
      {
        id: "a1000",
        paw: "123456",
        name: "巴勃羅·畢卡索",
        description:
          "西班牙著名的藝術家、畫家、雕塑家、版畫家、舞台設計師、作家和前法國共產黨黨員，出名於法國，和喬治·布拉克同為立體主義的創始者，是20世紀現代藝術的主要代表人物之一。",
        tags: [6, 7],
        isEnable: true,
        works: [
          "https://d2onjhd726mt7c.cloudfront.net/images/datas/000/051/540/2ijzow68ul1bu0z3sckkj3idcqe7lg9a_950x450.jpg",
          "http://bravo913.com.tw/image/timthumb.php?src=http://bravo913.com.tw/image/data/classical/program/0113.001.jpeg&w=350&h=350&zc=1",
          "https://www.christies.com/media-library/images/features/articles/2016/10/08/picasso/pablo-picasso-portrait-de-renart-1899.jpg?w=780",
        ],
        avator:
          "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSSAllYJ2KspQYgcVEFCx1Q-ojYy4km8vGNKph7fXmSaLsJLQq6Ld8RJLXamQzcD79x",
      },
      {
        id: "a1001",
        paw: "123456",
        name: "奇麟",
        description: "我是奇麟 喜歡畫圖打生存跟露營",
        tags: [1, 3, 10],
        isEnable: true,
        works: ["", ""],
        avator: "https://shoplineimg.com/56e52142e37ec643e700005f/62e7c9cbfcfb6e002907302a/800x.jpg?",
      },
      {
        id: "a1002",
        paw: "123456",
        name: "家鈴在電線竿下",
        description: "家鈴在電線桿下，做些大家都會做的事。",
        tags: [2, 3, 12],
        isEnable: true,
        works: ["", ""],
        avator:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zk4nw2678KZ-ETW8ZLSp8Av0fYL03Dksz0AqxWFXqvWps5O5TgBRAcSJ0W-jfbp0TF0&usqp=CAU",
      },
      {
        id: "a1003",
        paw: "123456",
        name: "鯊小",
        description: "自介",
        tags: [3, 5, 14],
        isEnable: false,
        works: ["", ""],
        avator: "https://picsum.photos/300/200/?random=1",
      },
      {
        id: "a1004",
        paw: "123456",
        name: "木下",
        description:
          "捷克畫家、裝飾品藝術家，早年赴法國求學，並在巴黎揚名，成為新藝術運動的代表性人物。其海報作品以端莊優雅的女性人物形象和唯美的線條聞名，形成獨樹一幟的風格。",
        tags: [1, 6, 7],
        isEnable: true,
        works: [
          "https://media.vogue.com.tw/photos/61bd2bbc4456e017df527a45/2:3/w_334,h_501,c_limit/%E5%9C%96%E8%AA%AA%EF%BC%9A%E6%85%95%E5%A4%8F%E7%B6%93%E5%85%B8%E4%BD%9C%E5%93%81%E3%80%8A%E8%97%9D%E8%A1%93%E5%9B%9B%E8%81%AF%E4%BD%9C%EF%BC%8D%E8%88%9E%E8%B9%88%E3%80%8B%EF%BC%88%E6%85%95%E5%A4%8F%E5%9F%BA%E9%87%91%E6%9C%83%EF%BC%89%20.png",
          "https://im.marieclaire.com.tw/s805c452h100b0/assets/mc/202011/5F9FBBBC15DF71604303804.jpeg",
        ],
        avator:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alfons_Mucha_LOC_3c05828u.jpg/1280px-Alfons_Mucha_LOC_3c05828u.jpg",
      },
      {
        id: "a1005",
        paw: "123456",
        name: "駿英",
        description:
          "這裡是藝術家駿英的實況頻道!!主要以檢討學員的繪圖作品、閒聊圖繪與偶而打電動同樂為主。每週日實況時間與公告請參閱我的FB粉專，另外我們的CG電繪資源官網， ...",
        tags: [1, 2, 8, 9, 13],
        isEnable: true,
        works: ["", ""],
        avator: "http://g.sbkk8.com/uploads/allimg/c170605/149B3350N20-2S32.gif",
      },
    ],
    tagsOpctions: [
      { id: 1, value: "頭貼" },
      { id: 2, value: "CG立繪" },
      { id: 3, value: "個人工作室" },
      { id: 4, value: "3D" },
      { id: 5, value: "v皮" },
      { id: 6, value: "跨時代" },
      { id: 7, value: "實體藝術" },
      { id: 8, value: "電繪" },
      { id: 9, value: "指導" },
      { id: 10, value: "獵奇" },
      { id: 11, value: "二創" },
      { id: 12, value: "漫畫" },
      { id: 13, value: "類真" },
      { id: 14, value: "日系" },
    ],
    commissions: [
      { painterId: "a1000", email: "qqq@email.com", context: "約約", time: new Date() },
      { painterId: "a1000", email: "F12345@email.com", context: "委託啦，錢拿去", time: new Date() },
    ],
  },
  getters: {
    islogin(state) {
      return state.islogin;
    },
    loginId(state) {
      return state.loginId;
    },
    painters(state) {
      return state.painters.filter((painter) => painter.isEnable === true);
    },
    painterInfo: (state) => (id) => {
      return state.painters.filter((painter) => painter.id === id)[0];
    },
    tags: (state) => (tags) => {
      const tagsOpctions = state.tagsOpctions.filter(
        (tagOpction) => tags.find((tagId) => tagId === tagOpction.id) >= 0
      );
      return tagsOpctions;
    },
    tagsOpctions(state) {
      return state.tagsOpctions;
    },
    getCommissions(state) {
      return state.commissions.filter((mes) => mes.painterId === state.loginId);
    },
  },
  mutations: {
    register(state, payload) {
      state.painters.push({
        id: payload.email,
        paw: payload.paw,
        name: payload.name,
        description: "",
        tags: [],
        isEnable: true,
        works: [],
        avator: "",
      });
    },
    logout(state) {
      state.islogin = false;
    },
    login(state, payload) {
      state.islogin = true;
      state.loginId = payload;
    },
    updatePainterInfo(state, payload) {
      state.painters = state.painters.map((painter) => {
        if (painter.id === payload.id) {
          return { ...payload };
        }
        return { ...painter };
      });
    },
    addNewCommission(state, payload) {
      console.log(payload);
      state.commissions.push(payload);
    },
  },
  actions: {
    register(context, payload) {
      context.commit("register", payload);
      context.dispatch("login", payload);
    },
    logout(context) {
      context.commit("logout");
    },
    login(context, payload) {
      // call login api
      console.log(payload.email);
      console.log(payload.paw);
      if (context.state.painters.find((p) => p.id === payload.email && p.paw === payload.paw)) {
        context.commit("login", payload.email);
        return true;
      } else return false;
    },
    updatePainterInfo(context, payload) {
      // call update api
      context.commit("updatePainterInfo", payload); // 改成另一個 呼叫更新 painters資料 api的 action
    },
    addNewCommission(context, payload) {
      // call addNewCommission api
      context.commit("addNewCommission", { ...payload, time: new Date() }); // 改成另一個 呼叫更新 painters資料 api的 action
    },
  },
});

export default store;
