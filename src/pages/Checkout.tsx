import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useCart } from "@/store/cart"
import { useMemo, useState } from "react"

export default function Checkout() {
  const { items, subtotal } = useCart()
  const navigate = useNavigate()

  const groups = useMemo(() => {
    return items.reduce<Record<string, { count: number; total: number }>>((acc, i) => {
      const key = i.vendor ?? 'Other'
      const g = acc[key] || { count: 0, total: 0 }
      g.count += i.qty
      g.total += i.qty * i.price
      acc[key] = g
      return acc
    }, {})
  }, [items])

  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    address1: "",
    address2: "",
    address3: "",
    city: "",
    notes: "",
    updates: false,
  })

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function placeOrder() {
    const address = [form.address1, form.address2, form.address3].filter(Boolean).join(', ')
    const state = {
      orderNo: `#ORD-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(Math.random()*9000+1000)}`,
      date: new Date().toLocaleString(),
      form: { name: form.name || 'John Doe', phone: form.phone || '+233 XX XXX XXXX', address: address || `${form.city}` },
      groups: Object.fromEntries(Object.entries(groups).map(([k, g]) => [k, { items: [{ title: 'Items', qty: g.count, price: g.total }], total: g.total }])),
      subtotal,
    }
    navigate('/order-confirmation', { state })
  }

  const inputCls = "w-full rounded-md border border-input px-3 py-2 bg-accent dark:bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <ol className="inline-flex items-center">
          <li className="flex items-center">
            <Link className="hover:underline" to="/">Home</Link>
            <span className="material-icons mx-2 text-base">chevron_right</span>
          </li>
          <li className="flex items-center">
            <Link className="hover:underline" to="/cart">Cart</Link>
            <span className="material-icons mx-2 text-base">chevron_right</span>
          </li>
          <li>Checkout</li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Delivery information */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border p-6 space-y-4">
            <h2 className="font-semibold">Delivery Information</h2>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="name">Full Name *</label>
              <input id="name" className={inputCls} value={form.name} onChange={(e) => update('name', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="phone">Phone Number *</label>
              <input id="phone" className={inputCls} placeholder="+233__________" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="whatsapp">WhatsApp Number (optional)</label>
              <input id="whatsapp" className={inputCls} placeholder="+233__________" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Delivery Address *</label>
              <input className={`${inputCls} mb-2`} value={form.address1} onChange={(e) => update('address1', e.target.value)} />
              <input className={`${inputCls} mb-2`} value={form.address2} onChange={(e) => update('address2', e.target.value)} />
              <input className={inputCls} value={form.address3} onChange={(e) => update('address3', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="city">City *</label>
              <input id="city" className={inputCls} value={form.city} onChange={(e) => update('city', e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" htmlFor="notes">Additional Notes (optional)</label>
              <textarea id="notes" className={`${inputCls} min-h-[96px]`} rows={3} value={form.notes} onChange={(e) => update('notes', e.target.value)} />
            </div>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.updates} onChange={(e) => update('updates', e.target.checked)} />
              <span>Send me updates via WhatsApp</span>
            </label>
            <div>
              <Link to="/cart" className="text-sm underline">← Back to Cart</Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-lg font-bold border-b pb-4 mb-4">Order Summary</h2>
            <div className="space-y-4">
              {Object.entries(groups).map(([vendor, g]) => (
                <div key={vendor} className="text-sm">
                  <div className="font-medium">{vendor}</div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>{g.count} {g.count === 1 ? 'item' : 'items'}</span>
                    <span>GHS {g.total.toFixed(0)}</span>
                  </div>
                </div>
              ))}
              <div className="border-t pt-4"></div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium">GHS {subtotal.toFixed(0)}</span>
              </div>
              <div className="flex items-center justify-between font-bold text-lg border-t pt-4">
                <span>Total</span>
                <span>GHS {subtotal.toFixed(0)}</span>
              </div>
              <div>
                <div className="text-sm mb-2">Payment:</div>
                <div className="text-sm">Cash on Delivery</div>
              </div>
              <Button className="w-full" onClick={placeOrder}>Place Order</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
