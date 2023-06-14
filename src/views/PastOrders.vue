<template>
  <main class="wrapper">
    <h1>Past Orders</h1>
    <table class="product-table">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Timestamp</th>
          <th>Products List</th>
          <th>Date</th>
          <th>Order Total</th>
          <th>Action</th>
          <!-- <td><span class="sr-only">Product Image</span></td> -->
          <!-- <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="pastOrder in pastOrders" :key="pastOrder.orderId">
          <td>{{ pastOrder.orderId }}</td>
          <td>{{ pastOrder.timestamp }}</td>
          <td>
            <!-- <li v-for="product in pastOrders.order" :key="product.id">
              {{ product.name }} - Quantity: {{ product.quantity }} - Price: {{ product.price }}
            </li> -->

            <li v-for="(value, key) in pastOrder.order.items" :key="key">
              {{ key }}: {{ value }}
            </li>
          </td>
          <td>{{ 'Date' }}</td>
          <td>{{ 'Total' }}</td>
          <!-- <td><i :class="order.iconClass"></i></td>
          <td>{{ order.price }}</td>
          <td>{{ order.quantity }}</td>
          <td> calculateTotal(order.price, order.quantity) </td> -->
          <td><button class="btn btn-dark">View</button></td>
          <td><button class="btn btn-dark">Edit</button></td>
        </tr>
      </tbody>
    </table>


  <div>
    <h1>Past Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.orderId">
        <div>Order ID: {{ order.orderId }}</div>
        <div>Timestamp: {{ order.timestamp }}</div>
        <div>Order Details:</div>
        <ul>
          <li v-for="product in order.order" :key="product.id">
            {{ product.name }} - Quantity: {{ product.quantity }} - Price: {{ product.price }}
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div>
    <h1>Past Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.orderId">
        <div>Order ID: {{ order.orderId }}</div>
        <div>Timestamp: {{ order.timestamp }}</div>
        <div>Order Details:</div>
        <ul>
          <li v-for="product in order.order" :key="product.id">
            {{ product.name }} - Quantity: {{ product.quantity }} - Price: {{ product.price }}
          </li>
          
        </ul>
      </li>
    </ul>
  </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';

export default {

  data() {
    return {
      // orders: [],

      orders: [
          {
            orderId: '1',
            timestamp: '2023-06-12T12:34:56Z',
            order: [],
          },
          {
            orderId: '2',
            timestamp: '2023-06-11T09:22:14Z',
            order: [
              { id: '3', name: 'Product 3', quantity: 1, price: 5 },
            ],
          },
      ],
    };
  },
  computed: {
  ...mapGetters(['pastOrders'])
  },
  mounted() {
      console.log('from vuex test: ', this.pastOrders);
      console.log('order products section from vuex test: ', this.pastOrders[0].order.items['Raddishes']);
      // console.log('order number for the second Order from vuex test: ', this.pastOrders[1].orderId);      

    // this.fetchPastOrders();
  },
  methods: {

  },
  // created() {
  //   fetch('/path/to/food.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.pastOrders = data;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // },
  
  // methods: {
  //   calculateTotal(price, quantity) {
  //     return (price * quantity).toFixed(2);
  //   },
  // },
};
</script>