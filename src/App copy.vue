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
      // cart: {},
      cart: [],
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
    getPrice(name){
        const product = this.inventory.find((product)=>{
            return product.name === name
        })
        // const item = this.localInventory.find((product) => product.name === name);
        // return item ? item.price : 0;
        return product.price.USD
    },

    addToCart(name, quantity) {
      if (quantity && quantity > 0) {
        // Check if the product already exists in the cart
        const existingItem = this.cart.find((product) => product.name === name);

        if (existingItem) {
          // If the product already exists, increment the quantity
          existingItem.quantity += quantity;
        } else {
          // If the product is new, create a new cart item
          const newCartItem = {
            name: name,
            quantity: quantity,
            price: this.getPrice(name),
            // Add other relevant information about the item here
          };
          this.cart.push(newCartItem); // Add the new item to the cart
        }

        // Log the updated cart
        console.log('Cart:', this.cart);

        // Calculate the cart total
        const cartTotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Log the cart total
        console.log('Cart Total:', cartTotal);

        // Clear the quantity input field
        this.quantity = 0;
      }




      if (quantity && quantity > 0) {

        // console.log('quantity value', quantity);
        // console.log('name value', name);
        // console.log('current total in cart', );

        // let newCart= {
        //   Cherries: 3,
        //   Bananas: 2,
        //   Onions: 5
        // };
        // console.log('new full cart', newCart);
        
        // console.log('cherries ', newCart['Cherries']);
        // console.log('Onions ', newCart['Onions']);

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














// newest
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
      // cart: {},
      cart: [],
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
    getPrice(name){
        const product = this.inventory.find((product)=>{
            return product.name === name
        })
        // const item = this.localInventory.find((product) => product.name === name);
        // return item ? item.price : 0;
        return product.price.USD
    },

    addToCart(name, quantity) {
      if (quantity && quantity > 0) {
        // Check if the product already exists in the cart
        const existingItem = this.cart.find((product) => product.name === name);

        if (existingItem) {
          // If the product already exists, increment the quantity
          existingItem.quantity += quantity;
        } else {
          // If the product is new, create a new cart item
          const newCartItem = {
            name: name,
            quantity: quantity,
            price: this.getPrice(name),
            // Add other relevant information about the item here
          };
          this.cart.push(newCartItem); // Add the new item to the cart
        }

        // Log the updated cart
        console.log('Cart:', this.cart);

        // Calculate the cart total
        const cartTotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Log the cart total
        console.log('Cart Total:', cartTotal);

        // Clear the quantity input field
        this.quantity = 0;
      }




      if (quantity && quantity > 0) {

        // console.log('quantity value', quantity);
        // console.log('name value', name);
        // console.log('current total in cart', );

        // let newCart= {
        //   Cherries: 3,
        //   Bananas: 2,
        //   Onions: 5
        // };
        // console.log('new full cart', newCart);
        
        // console.log('cherries ', newCart['Cherries']);
        // console.log('Onions ', newCart['Onions']);

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
