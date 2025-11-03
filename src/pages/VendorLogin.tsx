import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function VendorLogin() {
  const [remember, setRemember] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    alert('Vendor login submitted (mock).')
  }

  const inputCls = "w-full rounded-md border border-input px-3 py-2 bg-background dark:bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="text-sm text-muted-foreground">LocalVendor Hub</div>
        <h1 className="text-xl font-bold">Vendor Dashboard Login</h1>
      </div>
      <form onSubmit={submit} className="bg-card rounded-lg border p-6 space-y-4">
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="email">Email or Phone</label>
          <input id="email" className={inputCls} placeholder="you@example.com or +233__________" />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="password">Password</label>
          <input id="password" type="password" className={inputCls} />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <span>Remember me</span>
          </label>
          <Link to="#" className="hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full">Login to Dashboard</Button>
        <div className="flex items-center gap-3 text-sm text-muted-foreground"><span className="flex-1 border-t" />or<span className="flex-1 border-t" /></div>
        <div className="text-sm">Don't have an account? <Link to="/vendor/register" className="hover:underline">Register as a Vendor</Link></div>
        <div className="text-sm"><Link to="/" className="hover:underline">← Back to Home</Link></div>
      </form>
    </div>
  )
}
