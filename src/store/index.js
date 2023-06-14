import { createStore } from 'vuex';

export default createStore ({
  state: {
    orders: [] // Initial empty array to store past orders
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order); // Add the order to the orders array
    },
    clearOrders(state) {
      state.orders = []; // Clear the orders array
    }
  },
  actions: {
    submitOrder({ commit }, order) {
        console.log('welcome to the submit order under actions');

        // Simulate submitting the order to the server or API
        // axios.get('/api/orders')
        console.log('order: ', order);      
        return new Promise((resolve) => {
        // Simulate a delay to mimic an asynchronous request
        setTimeout(() => {
          const orderId = generateOrderId();
          const response = {
            orderId: orderId,
            timestamp: new Date().toISOString(),
            order: order
          };
          commit('addOrder', response); // Call the addOrder mutation to add the order
          
          console.log('generated orderID: ', orderId);
          console.log('orders currently: ', this.getters.pastOrders);


          resolve(response);
        }, 2000);
      });
    }
  },
  getters: {
    pastOrders(state) {
      return state.orders; // Return the orders array as a getter
    }
  }
})

function generateOrderId() {
  // Generating a unique orderID/orderNumber
  
  // return 'ORDER_' + Date.now();
  return Math.random().toString(36).substr(2, 9);
}