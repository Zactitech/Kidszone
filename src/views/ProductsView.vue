<template>
      <main class="wrapper">
        <h1>Products</h1>
            <div class="recommended">
              <div v-for="product in localInventory" :key="product.id" class="card">
        <div class="card-title">
          {{ product.name }}
        </div>

        <div class="card-body">
          <i :class="'icofont-10x icofont-' + product.icon"></i>
          <form>
            <div class="row">
              <div class="cell">
                <label>Type:</label>
              </div>
              <div class="cell">
                <em>{{ product.type }}</em>
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Price:</label>
              </div>
              <div class="cell">
                {{ product.price.USD }}
              </div>
            </div>
            <div class="row">
              <div class="cell">
                <label>Quantity:</label>
              </div>
              <div class="cell">
                <input type="number" v-model.number="quantities[product.name]" @input="handleQuantityInput(product.name)" min="0">
              </div>
            </div>
          </form>
        </div>

        <div class="card-footer">
          <button @click="addToCart(product.name, quantities[product.name])" class="btn btn-light">
            Add to cart
          </button>
        </div>
      </div>
            </div>

      </main>
</template>

<script>
export default {
  name: 'ProductsView',
      props: ['inventory', 'addToCart'],
  data() {
    return {
      localInventory: [],
      quantities: {}      
    };
  },
  created() {
    // Initialize the localInventory with the prop value
    this.localInventory = [...this.inventory];
    console.log('quantities ', this.quantities['Cherries']);
  },
  
  methods: {
    handleQuantityInput(name) {
    const quantity = this.quantities[name];
    if (quantity < 0) {
      this.quantities[name] = 0; // Reset the value to zero
      // Alternatively, you can display an error message
    }
  },
  }
}
</script>

<style scoped>
.recommended {
  display: block;
}
</style>
