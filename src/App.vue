<template>
      <header class="top-bar spread">
        <nav class="top-bar-nav">
          <router-link to="/" class="top-bar-link">
            <i class="icofont-spoon-and-fork"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/products" class="top-bar-link">
            <span>Products</span>
          </router-link>
          <router-link to="/pastorders" class="top-bar-link">
            <span>Past Orders</span>
          </router-link>
        </nav>
        <div @click="toggleSideBar" class="top-bar-cart-link">
          <i class="icofont-cart-alt icofont-1x"></i>
          <span>Cart ({{ totalQuantity }})</span>
        </div>
      </header>
  <router-view :inventory="inventory" :addToCart="addToCart"/>
  <SideBar
  v-if="showSideBar"
  :toggle="toggleSideBar"
  :cart="cart"
  :inventory="inventory"
  :remove="removeItem"
  />
</template>

<script>
import SideBar from './components/SideBar.vue'
import food from './food.json'
export default {
  components:{
    SideBar  },
  data(){
    return{
      showSideBar: false,
      inventory: food,
      cart: {},
      totalAmountInCart: 0
    }
  },
  computed:{
    totalQuantity(){
      return Object.values(this.cart).reduce((acc, curr)=>{
        return acc + curr
      }, 0)
    },

    cartTotal() {
      let total = 0;

      for (const itemName in this.cart) {
        if (Object.prototype.hasOwnProperty.call(this.cart, itemName)) {
          const quantity = this.cart[itemName];
          const item = this.inventory.find((product) => product.name === itemName);

          if (item) {
            const price = item.price.USD; // Assuming you want to use USD price
            const subtotal = quantity * price;
            total += subtotal;
          }
        }
      }
      return total;
    }
  },
  methods:{
    addToCart(name, quantity) {
      if (quantity && quantity > 0) {

        console.log('quantity value', quantity);
        console.log('name value', name);
        console.log('current total in cart', );

        if (!this.cart[name]) {
          this.cart[name] = 0;
        }

        if (isNaN(this.cart[name])) {
          this.cart[name] = 0;
        }

        this.cart[name] = this.cart[name] + quantity; // 0 + 5
        // this.quantity = 0;
    
        console.log('cart name value', this.cart[name]);
        console.log('cart value', this.cart);

        const cartTotal = this.cartTotal;

        // Log the cart total
        console.log('Cart Total:', cartTotal);

        // this.inventory[index].quantity = 0;

        this.totalAmountInCart = 0;
      }
    },

    toggleSideBar(){
      this.showSideBar=!this.showSideBar
    },
    removeItem(name){
      delete this.cart[name]
    },
  }
}
</script>
