import { createContext, useContext, useMemo, useState, PropsWithChildren } from "react"

export type CartItem = {
  id: string
  title: string
  price: number
  img: string
  vendor?: string
  quantity: number
}

type StoreState = {
  cart: CartItem[]
  favorites: Set<string>
  addToCart: (item: Omit<CartItem, 'quantity'>, qty?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  toggleFavorite: (id: string) => void
}

const StoreContext = createContext<StoreState | null>(null)

export function StoreProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  function addToCart(item: Omit<CartItem, 'quantity'>, qty: number = 1) {
    setCart(prev => {
      const existing = prev.find(ci => ci.id === item.id)
      if (existing) {
        return prev.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + qty } : ci)
      }
      return [...prev, { ...item, quantity: qty }]
    })
  }

  function removeFromCart(id: string) {
    setCart(prev => prev.filter(ci => ci.id !== id))
  }

  function updateQuantity(id: string, quantity: number) {
    setCart(prev => prev.map(ci => ci.id === id ? { ...ci, quantity: Math.max(1, quantity) } : ci))
  }

  function toggleFavorite(id: string) {
    setFavorites(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const value = useMemo<StoreState>(() => ({ cart, favorites, addToCart, removeFromCart, updateQuantity, toggleFavorite }), [cart, favorites])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error("useStore must be used within StoreProvider")
  return ctx
}
