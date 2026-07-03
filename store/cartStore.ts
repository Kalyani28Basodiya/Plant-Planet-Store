import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

function createCartStore(userEmail: string) {
  return create<CartState>()(
    persist(
      (set) => ({
        items: [],

        addItem: (item) =>
          set((state) => {
            const existing = state.items.find((i) => i.id === item.id)
            if (existing) {
              return {
                items: state.items.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                ),
              }
            }
            return { items: [...state.items, item] }
          }),

        removeItem: (id) =>
          set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

        updateQuantity: (id, quantity) =>
          set((state) => ({
            items:
              quantity <= 0
                ? state.items.filter((i) => i.id !== id)
                : state.items.map((i) =>
                  i.id === id ? { ...i, quantity } : i  
                ),
          })),

        clearCart: () => set({ items: [] }),
      }),
      {
        name: `cart-${userEmail}`,  // ← har user ka alag key
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
}

// Store cache — ek user ke liye ek baar hi banao
const storeCache: Record<string, ReturnType<typeof createCartStore>> = {}

export function useUserCart(email?: string | null) {
  const key = email ?? 'guest'
  if (!storeCache[key]) {
    storeCache[key] = createCartStore(key)
  }
  return storeCache[key]
}

export const selectTotalItems = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0)

export const selectTotalPrice = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
