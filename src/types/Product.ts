import { defineStore } from 'pinia'

export interface Product {
  id: number
  name: string
  price: number
  memory: number
  color:string
  description: string
  category: string
  image: string 
}

interface ProductState {
  items: Record<string, Product>
  ids: number[]
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Product[] {
      return this.ids.map(i => this.items[i])
    },

    loaded(): boolean {
      return this.ids.length > 0
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded)
        return

      const res = await fetch(`http://localhost:5173/iphone`);
      const data: Product[] = await res.json()
      this.ids = data.map((product) => {
        this.items[product.id] = product
        return product.id
      })
    },
  },
})