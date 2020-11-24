// @ts-check

/**
 * Get all orderItems
 *
 * @export
 * @param {array} orderItems
 * @param {string} id
 * @returns
 */
export function getOrderItemById(orderItems, id) {
  const index = orderItems.findIndex(item => item.id === id);
  let item = null;
  if (index !== -1) {
    item = orderItems[index];
  }

  return {
    index,
    item
  };
}

export const SAVE_ORDERS = "saveOrders";

export default {
  namespaced: true,

  state() {
    return {
      orderItems: []
    };
  },

  getters: {
    orderItems: state => state.orderItems,
    orderItemsLength: state => state.orderItems.length
  },

  mutations: {
    initOrders(state, payload) {
      state.orderItems = payload;
    },
    [SAVE_ORDERS](state, payload) {
      state.orderItems.push(payload);
    }
  },

  actions: {
    init: {
      handler({ commit }) {
        if (typeof sessionStorage !== "undefined") {
          const savedItems = sessionStorage.getItem("order-items");
          if (savedItems) {
            commit("initOrders", JSON.parse(savedItems));
          }
        }
      },
      root: true
    },
    [SAVE_ORDERS]({ commit, dispatch }, payload) {
      commit(SAVE_ORDERS, payload);
      dispatch("saveOrdersInStorage");
    },

    saveOrdersInStorage({ state }) {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("order-items", JSON.stringify(state.orderItems));
      }
    }
  }
};
