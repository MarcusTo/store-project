import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  actions: {
    addToCart(item) {
      this.cartItems.push(item)
      console.log(this.cartItems); 
    },
    remove(item) {
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
      console.log(this.remove)
    }
  }
})