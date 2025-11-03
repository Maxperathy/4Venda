import { Link, useLocation } from "react-router-dom"

function formatNow() {
  const d = new Date()
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

export default function OrderConfirmation() {
  const location = useLocation() as { state?: any }
  const state = location.state || {}
  const orderNo = state.orderNo || `#ORD-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-1234`
  const date = state.date || formatNow()
  const form = state.form || { name: 'John Doe', phone: '+233 XX XXX XXXX', address: '123 Main Street, Accra' }
  const groups: Record<string, { items: { title: string; qty: number; price: number }[]; total: number }> = state.groups || {
    "Mama Esi's": { items: [{ title: 'Jollof Rice', qty: 2, price: 50 }, { title: 'Kelewele', qty: 1, price: 15 }], total: 65 },
    "Kofi Tech": { items: [{ title: 'Phone Charger', qty: 1, price: 15 }], total: 15 },
  }
  const total = Object.values(groups).reduce((a, g) => a + g.total, 0)

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border p-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="material-icons text-green-600">check_circle</span>
          <span className="font-semibold">Order Placed!</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Your order has been successfully placed</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-card rounded-lg border p-6 space-y-6">
          <div>
            <div className="text-sm">Order Number: <span className="text-primary font-medium">{orderNo}</span></div>
            <div className="text-sm">Order Date: {date}</div>
          </div>
          <hr />
          <div>
            <div className="font-semibold mb-2">Delivery Information:</div>
            <div className="text-sm">
              <div>{form.name}</div>
              <div>{form.phone}</div>
              <div>{form.address}</div>
            </div>
          </div>
          <hr />
          <div>
            <div className="font-semibold mb-3">Orders from {Object.keys(groups).length} vendors:</div>
            <div className="space-y-4 text-sm">
              {Object.entries(groups).map(([vendor, g]) => (
                <div key={vendor}>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="material-icons text-orange-500 text-base">storefront</span>
                    <span>{vendor}</span>
                  </div>
                  <ul className="ml-6 mt-1 space-y-1 list-disc">
                    {g.items.map((it, idx) => (
                      <li key={idx}>
                        {it.title} (x{it.qty}) — GHS {it.price}
                      </li>
                    ))}
                  </ul>
                  <div className="ml-6 text-muted-foreground">Status: Pending</div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="font-medium">Total: GHS {total.toFixed(2)}</div>
          <div className="text-sm mt-2">
            ✓ Confirmation sent to <span className="font-medium">{form.phone}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            The vendors have been notified and will contact you shortly to confirm your order.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Link to="#" className="underline text-sm">Track Order</Link>
            <Link to="/" className="underline text-sm">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
