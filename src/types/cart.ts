import { defineStore } from 'pinia'

export interface Purchase {
  productId: number
  quantity:number

}

interface CartState {
  contents: Record<string, Purchase>
}

export interface CartPreview {
  id: number
  image: string
  title: string
  cost: number
}

export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => ({
    contents: {},
  }),
  getters: {
    totalQuantity() {
      return Object.values(this.contents).reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    add(product: CartPreview, quantity: number = 1) {
      if (!this.contents[product.id]) {
        this.contents[product.id] = { productId: product.id, quantity };
      } else {
        this.contents[product.id].quantity += quantity;
      }
    },
    remove(product: CartPreview) {
      delete this.contents[product.id];
    },
  },
});