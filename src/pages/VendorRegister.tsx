import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function VendorRegister() {
  const [agree, setAgree] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!agree) {
      alert('Please agree to the Terms and Conditions')
      return
    }
    alert('Vendor registration submitted!')
  }

  const inputCls = "w-full rounded-md border border-input px-3 py-2 bg-background dark:bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Vendor Registration</h1>
      <form onSubmit={submit} className="space-y-6">
        {/* Business Information */}
        <section className="bg-card rounded-lg border p-6 space-y-4">
          <h2 className="font-semibold">Business Information</h2>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="businessName">Business Name *</label>
            <input id="businessName" className={inputCls} required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="category">Business Category *</label>
            <select id="category" className={inputCls} defaultValue="" required>
              <option value="" disabled>Select Category</option>
              <option>Food</option>
              <option>Drinks</option>
              <option>Snacks</option>
              <option>Tech</option>
              <option>Fashion</option>
              <option>Grocery</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="desc">Business Description</label>
            <textarea id="desc" className={`${inputCls} min-h-[96px]`} />
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-card rounded-lg border p-6 space-y-4">
          <h2 className="font-semibold">Contact Information</h2>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="owner">Owner Name *</label>
            <input id="owner" className={inputCls} required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="email">Email Address *</label>
            <input id="email" type="email" className={inputCls} required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="phone">Phone Number *</label>
            <input id="phone" className={inputCls} placeholder="+233__________" required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="whatsapp">WhatsApp Number *</label>
            <input id="whatsapp" className={inputCls} placeholder="+233__________" required />
            <p className="text-xs text-muted-foreground">For receiving order notifications</p>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="address">Business Address</label>
            <input id="address" className={inputCls} />
          </div>
        </section>

        {/* Account Security */}
        <section className="bg-card rounded-lg border p-6 space-y-4">
          <h2 className="font-semibold">Account Security</h2>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="password">Password *</label>
            <input id="password" type="password" className={inputCls} required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="confirm">Confirm Password *</label>
            <input id="confirm" type="password" className={inputCls} required />
          </div>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>I agree to the Terms and Conditions</span>
          </label>
          <div className="flex items-center justify-between">
            <Button type="submit">Create Vendor Account</Button>
            <Link to="/vendor/login" className="text-sm hover:underline">Already have an account? [Login]</Link>
          </div>
        </section>
      </form>
    </div>
  )
}
