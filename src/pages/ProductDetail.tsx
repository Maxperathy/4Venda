import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductDetail() {
  const { slug } = useParams()
  const [qty, setQty] = useState(1)
  const title = (slug ?? "product").split("-").map(s => s.charAt(0).toUpperCase()+s.slice(1)).join(" ")

  function dec() { setQty(q => Math.max(1, q - 1)) }
  function inc() { setQty(q => q + 1) }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="inline-flex items-center gap-2">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li className="material-icons text-base">chevron_right</li>
          <li><Link className="hover:underline" to="/all-vendors">Vendors</Link></li>
          <li className="material-icons text-base">chevron_right</li>
          <li><Link className="hover:underline" to="/vendor/mama-esi">Mama Esi's Kitchen</Link></li>
          <li className="material-icons text-base">chevron_right</li>
          <li className="text-foreground font-medium">{title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image */}
        <div>
          <div className="rounded-lg shadow-sm overflow-hidden bg-muted">
            <img
              alt={title}
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXNRXKQ4jAcJn7aWFq55MRLAQtv5GQHjygNYsMqLIkHG-YtTfOMQNWpmyRlQe_7XODCuEijx4lR_ldqBnwBMmrBiK-IY8UJnrCR7rr-296nSN9ipdnW-fVbF3JMvNs0SaT2UMb_k8JkhYau-l0Gi23cWEOZkmpVL_YN6Ksce46AFdFCZM3GbckMAl9nYltXANsBNEpYifgbXoNir-tlNUW_f9KTVQoAJlpSDPsNzatU0wMBreGCm_29YwXH9I1YyDDh2v5AFTJbx8"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Delicious Ghanaian jollof rice with chicken and vegetables. Perfect for parties and events!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold text-primary">GHS 25.00</p>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <span className="material-icons text-base">check_circle</span>
              <span>15 available in stock</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <Button variant="ghost" size="icon" onClick={dec} aria-label="Decrease quantity">-</Button>
              <span className="px-4 py-1.5 text-lg font-semibold">{qty}</span>
              <Button variant="ghost" size="icon" onClick={inc} aria-label="Increase quantity">+</Button>
            </div>
          </div>
          <div className="pt-1">
            <Button className="w-full font-semibold">
              <span className="material-icons mr-2">add_shopping_cart</span>
              Add to Cart
            </Button>
          </div>
          <div className="pt-6 border-t">
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">Sold by:</h3>
              <div className="flex items-start gap-4">
                <img
                  alt="Mama Esi's Kitchen logo"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhsBGdO8VCxyM0badsoz2lJoWn1cQognPzwTt_kdVmJTs4B01XET-JEV-oM5wnoEhezxvfHA75Y7XJy0BdvgD9XGNy1PMzq85DNaU0c3Ni6ysEg3q4q-WAegABYiI4iaOkD2evP5a9jFoe_I5CHsmHOyVUBTb1LYhN1ErNPLkYvo3WnKh6L0rHJWBXgexkGX41CqJ8PF9f7l1NAxTQRfJ4WE7vZM5hF-Pu2SlHiKtJZXd6LTt0Rx615W0r-5pCVcgIX9T_ek2uI8g"
                />
                <div className="flex-1">
                  <p className="font-bold">Mama Esi's Kitchen</p>
                  <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><span className="material-icons text-base">location_on</span><span>Accra, Ghana</span></div>
                    <div className="flex items-center gap-2"><span className="material-icons text-base">phone</span><span>+233 XX XXX XXXX</span></div>
                  </div>
                </div>
                <Button variant="link" asChild>
                  <Link to="/vendor/mama-esi" className="font-semibold flex items-center gap-1">
                    <span>Visit Shop</span>
                    <span className="material-icons text-base">arrow_forward</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
