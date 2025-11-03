import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type FavContextType = {
  favorites: Set<string>
  isFavorite: (id: string) => boolean
  toggle: (id: string) => void
}

const FavContext = createContext<FavContextType | undefined>(undefined)
const LS_KEY = "lvh_favs_v1"

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      return new Set(raw ? (JSON.parse(raw) as string[]) : [])
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(Array.from(favorites)))
  }, [favorites])

  const isFavorite = (id: string) => favorites.has(id)
  const toggle = (id: string) => setFavorites(prev => {
    const next = new Set(prev)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    return next
  })

  return (
    <FavContext.Provider value={{ favorites, isFavorite, toggle }}>
      {children}
    </FavContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavContext)
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider")
  return ctx
}
