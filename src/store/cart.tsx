import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react"

export type CartItem = {
  id: string // slug or id
  title: string
  price: number
  img: string
  vendor?: string
  subtitle?: string
  qty: number
}

type CartContextType = {
  items: CartItem[]
  count: number
  subtotal: number
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void
  removeItem: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const LS_KEY = "lvh_cart_v1"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items))
  }, [items])

  const addItem: CartContextType["addItem"] = (item, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { ...item, qty }]
    })
  }

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id))
  const increment = (id: string) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  const decrement = (id: string) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))
  const clear = () => setItems([])

  const count = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((acc, i) => acc + i.qty * i.price, 0), [items])

  const value: CartContextType = { items, count, subtotal, addItem, removeItem, increment, decrement, clear }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
