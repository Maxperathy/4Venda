import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useCart } from '@/store/cart'

function LineItem({ id, title, subtitle, price, img, qty, onDec, onInc, onRemove }: { id: string; title: string; subtitle?: string; price: number; img: string; qty: number; onDec: () => void; onInc: () => void; onRemove: () => void }) {
  return (
    <div className="flex items-center p-4 gap-4 flex-wrap">
      <img alt={title} className="w-20 h-20 object-cover rounded" src={img} />
      <div className="flex-grow min-w-[160px]">
        <p className="font-semibold">{title}</p>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center border rounded">
        <Button variant="ghost" size="icon" onClick={onDec}>-</Button>
        <span className="px-3 py-1 font-medium">{qty}</span>
        <Button variant="ghost" size="icon" onClick={onInc}>+</Button>
      </div>
      <p className="font-semibold w-24 text-right">GHS {(price * qty).toFixed(2)}</p>
      <Button variant="ghost" className="ml-2 text-muted-foreground hover:text-red-500" onClick={onRemove}>
        <span className="material-icons">delete</span>
      </Button>
    </div>
  )
}

export default function Cart() {
  const { items, subtotal, increment, decrement, removeItem } = useCart()

  // group by vendor
  const groups = items.reduce<Record<string, typeof items>>( (acc, item) => {
    const key = item.vendor ?? 'Other'
    acc[key] = acc[key] || []
    acc[key].push(item)
    return acc
  }, {})

  const groupEntries = Object.entries(groups)
  const itemCount = items.reduce((acc, i) => acc + i.qty, 0)

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <ol className="inline-flex items-center">
          <li className="flex items-center">
            <Link className="hover:underline" to="/">Home</Link>
            <span className="material-icons mx-2 text-base">chevron_right</span>
          </li>
          <li>Shopping Cart</li>
        </ol>
      </nav>

      {/* Heading */}
      <h1 className="text-3xl font-bold">Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left column - vendors */}
        <div className="lg:col-span-2 space-y-6">
          {groupEntries.length === 0 && (
            <div className="bg-card rounded-lg border p-6 text-muted-foreground">Your cart is empty.</div>
          )}
          {groupEntries.map(([vendor, list]) => (
            <div key={vendor} className="bg-card rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-muted-foreground">
                  From: <span className="text-foreground">{vendor}</span>
                </h2>
              </div>
              <div className="divide-y">
                {list.map(line => (
                  <LineItem
                    key={line.id}
                    id={line.id}
                    title={line.title}
                    subtitle={line.subtitle}
                    price={line.price}
                    img={line.img}
                    qty={line.qty}
                    onDec={() => decrement(line.id)}
                    onInc={() => increment(line.id)}
                    onRemove={() => removeItem(line.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right column - summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg shadow-sm border p-6 sticky top-24">
            <h2 className="text-xl font-bold border-b pb-4 mb-4">Cart Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                <span className="font-medium">GHS {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>GHS {subtotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <Button className="w-full" asChild>
                <Link to="/checkout">
                  Proceed to Checkout
                  <span className="material-icons text-base align-middle ml-1">arrow_forward</span>
                </Link>
              </Button>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
