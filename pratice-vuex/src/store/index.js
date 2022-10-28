import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
    products: [
      {
        id: "p1",
        image: "https://cdn.pixabay.com/photo/2018/02/28/10/26/collection-of-old-books-3187654_1280.jpg",
        title: "Book Collection",
        description: "A collection of must-read books. All-time classics included!",
        price: 100,
      },
      {
        id: "p2",
        image: "https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg",
        title: "Mountain Tent",
        description: "A tent for the ambitious outdoor tourist.",
        price: 20,
      },
      {
        id: "p3",
        image: "https://cdn.pixabay.com/photo/2012/03/04/00/05/background-21751_1280.jpg",
        title: "Food Box",
        description: "May be partially expired when it arrives but at least it is cheap!",
        price: 1,
      },
    ],
    cart: [],
  },
  mutations: {
    addProductToCart(state, prdId) {
      const productInCartIndex = state.cart.findIndex((ci) => ci.id === prdId);
      const product = state.products.find((ci) => ci.id === prdId);

      if (productInCartIndex >= 0) {
        state.cart[productInCartIndex].qty++;
      } else {
        state.cart.push({ id: product.id, qty: 1 });
      }
    },

    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.cart.findIndex((cartItem) => cartItem.productId === prodId);
      state.cart.splice(productInCartIndex, 1);
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    cart(state, getters) {
      const cart = state.cart.map((item) => {
        return {
          ...getters.products.find((prd) => item.id === prd.id),
          qty: item.qty,
        };
      });
      console.log(cart);
      return cart;
    },
    qty(state) {
      let qty = 0;
      state.cart.forEach((element) => {
        qty += element.qty;
      });
      console.log(qty);
      return qty;
    },
    total(state, getters) {
      let total = 0;
      getters.cart.forEach((element) => (total += element.qty * element.price));
      return total;
    },
  },
});

export default store;
