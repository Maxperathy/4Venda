import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/store/favorites"
import { useCart } from "@/store/cart"

export default function Home() {
  const { isFavorite, toggle } = useFavorites()
  const { addItem } = useCart()
  const navigate = useNavigate()

  return (
    <div className="space-y-16">
      {/* Hero with background and overlay */}
      <section
        className="rounded-lg p-8 md:p-16 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Discover Local Businesses Near You
        </h1>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          From handcrafted goods to fresh produce, find everything you need while supporting your local community.
        </p>
        <Button asChild className="font-bold">
          <Link to="/all-vendors">Browse Vendors</Link>
        </Button>
      </section>

      {/* Featured Vendors */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Vendors</h2>
          <Link to="/all-vendors" className="flex items-center gap-1 text-primary font-medium hover:underline">
            <span>View All</span>
            <span className="material-icons text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            title: "Mama Esi's Kitchen", items: '24 Items', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Pfbv0ErNph1WNlhp1qNvwrJ5WSkWLWEty2tX1XVtKA_SgvNI5zxYP5hzMfK1KEWcIOL38c6au8hvMdponU1W6eD5vsfTvS2hKb93AP0bZuPGeRyP6wzvARWJtbPpKtxKlDkZ7NjivoAbXAZD-Hz9NdtBr7hBLpspKUOwHATR3sxlFCCjPkVSCEVmF4CMcViQpMLSaxIHTyTRWYn6x3vDT1HkfjLtAR5eZNPDOss9oYW-11pY8dXQI9mQuDdPMRcS5ZJQREGqjy0', href: '/vendor/mama-esi'},
            { title: 'Kofi Tech Store', items: '15 Items', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjXpEbAHP6js-GNO6Spmh7IP3HH5KiGujC_nABVogj76p78cEWk--vkKynSJUJAEG62OJLhiTeNFSHZOmh4CM9Y6HCvh28fABRw8jtk6drku-qt6IOEf8Ms0Cu2WkVbusf28zqAW7zhMCMTtEuO1yCjbLu7swKsGBRIsNlCgA0-KddD3ZbnxZUFY22t3AVxizTzkIknyWTHemY0yw8GGs7HYY6Aodmd26YaNv2ZC_MFlpXNFFjSjoHx_OuK7vbZUf1U4WP3f4vn_o', href: '/vendor/kofi-tech'},
            { title: 'Ama Foods & More', items: '32 Items', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPRotOvjTOtbNeUv3pnma0x0vAFsN_xdoD5FnPf3ANC2PO3ZVvyJMLPTuVs_gvdyDeTmiDhJ-BRsTx1AJHN8eVRqZP0T5fZuRO1uAcObOsqJRcu2jzr7Qu97DJg8EYq07n8QSvi6G4dh7qzK5lYirKrPorPmII82WTDAfq4XBX08sEFdBgs9L1xToy5GmCL1ZhFMA8uIei6h71zoESYND6LMe2ZabL9qemoq_ZxZykB5iu0F616NavGx2By0e3qgraofNEq22nCJQ', href: '/all-vendors'}].map(v => (
            <div key={v.title} className="bg-card rounded-lg shadow-md overflow-hidden">
              <Link to={v.href}>
                <img alt={v.title} className="w-full h-48 object-cover" src={v.img} />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link to={v.href}>{v.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-4">{v.items}</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to={v.href}>View Shop</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Popular Products</h2>
          <Link to="#" className="flex items-center gap-1 text-primary font-medium hover:underline">
            <span>View All</span>
            <span className="material-icons text-lg">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[{
            title: 'Jollof Rice', vendor: "Mama Esi's Kitchen", price: 25, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPXS6qyzDJOInB6Xx-bQC3QRT2PfvGWAc7IIHJE7UMSzlIcPcji6ZJB60eAFPA3bkdggdSxv6JEBG_wQV5eYhPcwgHrACJ2skMuJ1IhEERQp0ytEOV6Hal3r3jXQz7eUEU9L1qtLCZUkcCcBvXDFc6xXAxRBzC2xmuBScmCg2mZR-jZvxOUpWPatDfP9P4RSp7VVHEBOI_QNqMBaeeksVD9FdhzYSYE5loYWYVnoqRMFuqhihTq1EFMW5eKd9-AxYZQdKBIg3iYDA' 
          },{
            title: 'Phone Charger', vendor: 'Kofi Tech Store', price: 15, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKM7F2wZq2OpNV8BA9NarifcRkcb3bi1SI7ZsdyXOOCNJOrhjXkbv_ihpkNyeIKQJPLpQLI12grnAdSDVBLapt3xaWvXFsWqbm5aLJJYj5arP_6wha1sKJKG-vsvL8n22pOooG0u_ySsFmyjEu_r91WsvojtHqcQyA27TXUGBA5rlk70FcPObQ-mbNplZceg-SuoTk7scwgfIPkS9kASieCbF1aCtgH0RGJBaElYu6tX1BP8zUDARUe5wxF9QGjjtt0C4co7NJc-g' 
          },{
            title: 'Fresh Fish', vendor: 'Ama Foods', price: 40, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhUR7kgK35Wzqmmh-JXEIXbrSPWrwauxH4ZoRcB1fuaX_RJHx_bJfF6WHmXzFQ5s15Q_YtuZfug3EB1Dbq_SIgqmhv6plRRBQUKRwoQoOByIZmmTDrEbQniXW43Ina3SZ_qGAId1vlmkzihyJLU3-6b5hf8nlyfy9msARhgf4QgpEiS4pXfgaGD0XjmsjXHn4MTwvuaZfsYnRpA8LisASzFYU64Fa5ku9AKh3zVNaTCIyL4drJjiCGDw4mzJlS4ig1PiLThxlJNRo' 
          },{
            title: 'Laptop Bag', vendor: 'Kofi Tech', price: 120, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCffCrsp1YU1vsQ562ujFJjAAPUeyV7nxmV_z_LxO5lOl-sKsz0cDam3GbZGu13LdKB18FWp1sfxMVd7Odg8dazAZfUHK0edEaaer-HMKx2fpIQoTdSzz6bvZE4tJQNkOaPJUZkmdHaB41qhrBRbrz3s5iHNKyglxiPhzy9F-PvmlbdK3xulCGHx3wUxWBIZIOARzoXiAObcXgwVKPvP7b_tmrSB7i3chn-fICQO5XCHasULAql24K2zmgo34XezCkh48ptzDF1YE8' 
          }].map((p) => {
            const slug = p.title.toLowerCase().replace(/\s+/g, '-');
            const id = slug
            const addToCart = () => {
              addItem({ id, title: p.title, price: p.price, img: p.img, vendor: p.vendor })
              navigate('/cart')
            }
            const liked = isFavorite(id)
            return (
              <div key={p.title} className="bg-card rounded-lg overflow-hidden flex flex-col group">
                <div className="relative">
                  <Link to={`/product/${slug}`}>
                    <img alt={p.title} className="w-full h-52 object-cover" src={p.img} />
                  </Link>
                  <button onClick={() => toggle(id)} className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-slate-600 hover:text-primary transition">
                    <span className="material-icons">{liked ? 'favorite' : 'favorite_border'}</span>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold flex-grow">
                    <Link to={`/product/${slug}`}>{p.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{p.vendor}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-lg text-primary">GHS {p.price}</span>
                    <Button className="p-2 h-9" onClick={addToCart}>
                      <span className="material-icons">add_shopping_cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Become a Vendor */}
      <section className="rounded-lg p-8 text-center bg-secondary">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Want to sell your products?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Join our community of local vendors and reach more customers in your area. It's easy to get started.
        </p>
        <Button asChild className="font-bold"><Link to="/vendor/register">Become a Vendor</Link></Button>
      </section>
    </div>
  )
}
