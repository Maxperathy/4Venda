import type { PropsWithChildren } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useCart } from '@/store/cart'

export function Layout({ children }: PropsWithChildren) {
  const { count } = useCart()
  const { pathname } = useLocation()
  const hideAuth = pathname.startsWith('/vendor/login') || pathname.startsWith('/vendor/register')
  const noShell = pathname.startsWith('/vendor/dashboard')

  if (noShell) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 font-bold whitespace-nowrap">
            <span className="text-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-orange-500 bg-clip-text text-transparent tracking-wide">4VENDA</span>
          </Link>
          <div className="hidden md:block flex-1 max-w-xl">
            <div className="relative">
              <input
                className="w-full pl-3 pr-10 py-2 rounded-md border bg-background"
                placeholder="Search..."
              />
              <span className="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">search</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!hideAuth && (
              <>
                <Link to="/sign-in" className="hidden md:inline-block text-sm text-muted-foreground hover:text-primary whitespace-nowrap">Sign in</Link>
                <Button asChild className="hidden md:inline-block whitespace-nowrap">
                  <Link to="/create-account">Create account</Link>
                </Button>
              </>
            )}
            <Link to="/cart" className="relative flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-4 w-4 grid place-items-center">{count}</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 flex-1">
        {children}
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 4VENDA</p>
          <nav className="flex items-center gap-6">
            <Link to="#" className="hover:underline">About</Link>
            <Link to="#" className="hover:underline">Contact</Link>
            <Link to="#" className="hover:underline">Help</Link>
            <Link to="#" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
