<template>
    <div>
      <h1>Payment Method</h1>
      <form @submit.prevent="submitPayment">
        <!-- Payment form fields -->
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required>
        
        <button type="submit" class="btn btn-primary">Place Order</button>
      </form>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        name: '',
        address: ''
      };
    },
    methods: {
      submitPayment() {
        // Perform any necessary actions for cash on delivery payment
        // For example, you can save the order details to a database or display a success message
  
        // Assuming you have a route named "order-success" for the order success page
        this.$router.push({ name: 'order-success' });
      }
    }
  };
  </script>  