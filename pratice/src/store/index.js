import { createStore } from "vuex";
import painters from "./painters.js";
import commissions from "./commissions.js";

const store = createStore({
  modules: { painters, commissions },
  state: {
    projectApiKey: "AIzaSyBgq5kFAF13eXisk1DQyY17z1KZbcWYcF8",
    token: null,
    userId: null,
    tokenExpiration: null,
  },
  getters: {
    token(state) {
      return state.token;
    },
    userId(state) {
      return state.userId;
    },
    // tokenExpiration(state) {
    //   return state.tokenExpiration;
    // },
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
      localStorage.setItem("token", payload.token ?? "");
      localStorage.setItem("userId", payload.userId ?? "");
    },
  },
  actions: {
    async signUp(context, payload) {
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + context.state.projectApiKey,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.paw,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw response.json();
          }
          return response.json();
        })
        .then((responseData) => {
          context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
          });
          return {
            code: 200,
            data: responseData,
          };
        })
        .catch((error) => {
          return error.then((err) => {
            let message = "連線錯誤，請稍後再試";
            let code = 404;
            switch (err.error.message) {
              case "EMAIL_EXISTS":
                code = 3001;
                message = "帳號已註冊，請移步至登入";
                break;
              case "INVALID_EMAIL":
                code = 3001;
                message = "信箱格式錯誤，請再次確認";
                break;
              case "WEAK_PASSWORD : Password should be at least 6 characters":
                code = 3002;
                message = "密碼長度至少6位";
                break;
              default:
                break;
            }
            return {
              code: code,
              message: message,
            };
          });
        });
    },
    async login(context, payload) {
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + context.state.projectApiKey,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.paw,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw response.json();
          }
          return response.json();
        })
        .then((responseData) => {
          context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
          });
          return {
            code: 200,
            data: responseData,
          };
        })
        .catch((error) => {
          return error.then((err) => {
            let message = "連線錯誤，請稍後再試";
            let code = 404;
            switch (err.error.message) {
              case "EMAIL_NOT_FOUND":
                code = 3001;
                message = "帳號未註冊，請確認帳號或註冊加入我們";
                break;
              case "INVALID_EMAIL":
                code = 3001;
                message = "信箱格式錯誤，請再次確認";
                break;
              case "INVALID_PASSWORD":
                code = 3002;
                message = "密碼錯誤";
                break;
              case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
                code = 3002;
                message = "由於多次失敗的登錄嘗試，為了帳號安全，此帳號已暫時鎖定";
                break;
              default:
                break;
            }
            return {
              code: code,
              message: message,
            };
          });
        });
    },
    logout(context) {
      context.commit("setUser", {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
    tryLogin(context) {
      context.commit("setUser", {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
        tokenExpiration: null,
      });
    },
  },
});

export default store;
