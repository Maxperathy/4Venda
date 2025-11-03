import { Link, useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useCart } from '@/store/cart'

type Product = {
  title: string
  price: number
  img: string
  stock?: string
}

const DUMMY_PRODUCTS: Product[] = [
  { title: "Jollof Rice", price: 25, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Gr7mFSz2ZZlbgD0vZiO0nGeI-1quUdwEVy50uhvzNLU5vvwqx9WArVLsAMhWQAK-kOlyohbQ3sQTDl593SKHajj-fEPIJrb07ovWXmucF00sMuxXc6wWJHIL8_kuQgXsRO-PSSHMebpR9DwtxehezQEgE5Cnro4nxdavbcudVMTICH82dZFROGU4wsXeaEgaLAPj1QK9uAEgPlb_EnxU2__ghTLjMg7qtUhWZCmZOh4BLsYaBCZUb3RG2nZysbXafzjhe4FKGks", stock: "In Stock" },
  { title: "Banku & Tilapia", price: 45, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzmQixnhSncAljkPRRmXtC4ngjpJgvuBtsbLsrumMv2BE3vfxsxf5iPQRPh1d7QDPfFx7tJXouq_vFAlCrSPT_1gL-SG9SzgkqggmxvZJxJvkppYmjiVxxDGFnbHuP04WOm64hJdKJOwMKZPnD4TG6A4QiUJdlvPlPwnWI-zEANN90jeTXFVyazMbKfD-La2hJHecsMhKgkM3mHnrEPq3ZWde1XOJF64Gjn5nL1GAaejspbiT-hxYYaUquq3hL2p0BYab5XskEas8", stock: "In Stock" },
  { title: "Kelewele", price: 15, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvrXeBBtWNRnbN8WKiNnGLYNsmm-2AhuSEXSbeOKQPPag9XbF_bdc3E0zwwnvFRajUx-pZ6D34VlIIkpybKIUhHzuvmsGl0FlWwFCC0iULjxjW6NeDET3z_pgpo476q9pwud-8Kcwty3dnwAPfXIDOmHG-3Si33gFHUdaKk3Srzv2nk6be_UpAAN_7sGs_xd66mpqt2fPGFgyeqvuBjbhfjEhy4nkUN5qDY5qyK_7p_uslQpfPqhhQo_BKnwlIjNNrfDuEMeluxB8", stock: "In Stock" },
  { title: "Sobolo Drink", price: 5, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjXt3AUGoMgRoip4qdXgaiqnQyXVxFKjmygZxt225hTlbfq3HJ5Cn0bGfO0BaL6x7w90hMG574aYUvbgLV2WEDX5MxA34xsUhqdmIzEN8zeulE5Wivlg2S2v-mzRAGZNPrjIN-GdJUyh-pdJMrRu43NSJMzTGVfuIAhZdy0bOlQmeW5WtwjTeRuayvvzG2TnAIqDLR5JNRBfzyN8gazf1t4tFZk-N7lwSpqj1Mfec5IdCKeKa5n7qXtm0TLaZhnNEosWGu13UO5nU", stock: "In Stock" },
  { title: "Waakye", price: 20, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97eUI2l1IYsNFChBCCtS-mHlm-K2AHG4waOMwpoYQIT5eoJZBD7ZYu1SRYKKGveQLPYXolN5uW2MgzADkTXerdAySrfw2FjIaPpI8bxQ-mvT1Rv3a10zXhDsrzs5vMskXyOp3wuNwrclMsCWlhDdu_wBVxia7NztKKhFs0U23C5GX_Df_delydeZGkxu9KNW0RR33mW9Nn5DudTcdZHsl6YognxY74tlWWjOTji1QX2tnvN9cvwF8ut-ntHa0QjJOVqntl9nLIQ8", stock: "In Stock" },
  { title: "Fufu & Light Soup", price: 35, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrbWA6brpPetDAqdXyN8bCRjz-Lh_NjORPlzcrrNRtGBs8nfquLbQUQgwUw9Prv6ffBHAqp25hMJ-M_Y-dIe8o_H4u4oHwxEgRfnVg2whDzGKQ1nwgUXpaVxAXixYRfKCyBmHFLI_xDhI6dEQUXSlW1A6t-WpdAedgI7WUT2QWyBLMCw1cxCjXQrYHQPYaEGszK2tr5BW1SwpPkWoOcyl2PATEV2HoFwECBysPGU8bpsMO3JFYc2HdCvvKlfyjXVZocAiUiV6Zdmw", stock: "In Stock" },
  { title: "Fried Yam", price: 12, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPM5NirOSRt52NKf5Yviq0uEwAldm0efKCekR3HROYptjlgo_w1HIH0I3lfnqiXQBG4yI_55GBnUNyZusRnWBBdx-RvKosXIZF855x0oei2WBRZNZN3MnfkPqdJk5b5MqUoVsotVFplDYDrJmt_S8dXENNWgcig7Tgscy3c10BGko4o6kU_rtY6ZQHg6u8rJ3qNR2VKHLL4cC65zpeBCj42UE7sTNEIt3ZhG-bh9OSuYNlXW8MJbdAa2X08JOZP3YKoA5K_SZN-1Q", stock: "In Stock" },
  { title: "Fresh Juice", price: 8, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI-Sema0OQ3GP5XTPj22Qv2Wm4q31zekyhJ8xnoL2-wFscZQupu4vywa7reY8X8f_0e42Dv_2ykXU47BAwLiD-QRQ2wi4fzPLe3IgojhMeZPdS_mb5TBWprPyc0GwjQXZ7nWHiCT-3xFpw7KW7pbww2TacH_Zqweee43v2qWRBqVbm93OnSEwIXpQI9on5Or-_o1EZBMgKs7Mt6YRJSTbuglfO93H35t68bKiAA__vKOJwZix3e7SqRkzvZYbaSSjIERczxEZcOAk", stock: "In Stock" },
]

export default function Vendor() {
  const { slug } = useParams()
  const name = (slug ?? "vendor").split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
  const { addItem } = useCart()
  const navigate = useNavigate()

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="inline-flex items-center gap-2 text-muted-foreground">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li className="material-icons text-base">chevron_right</li>
          <li><Link to="/all-vendors" className="hover:underline">Vendors</Link></li>
          <li className="material-icons text-base">chevron_right</li>
          <li className="text-foreground font-medium">{name}</li>
        </ol>
      </nav>

      {/* Vendor header */}
      <section>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <img
              alt={`${name} logo`}
              className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRiyzjUGHi1ZlEahe8XVYSVkhpke4f_MYDFLdthFs-c0ahK3Lt5cWr1y5MV0kzz5JQvVJ3iB7EDQ7WCPNiR69wE2me414KGdcsN-srUkTgeCsUY_QKL3Tmyvz9bCIxp-A2pJB5nmp089JKgW-RgIAIjQCOje_OCooOyZZdLEVkx09eCZzPZ5nIrjZ7oTFQ9tPBZNlaNbnwCfHriW4-puc79chI4m05jmVabuT1aacw6CYBT9MXhZnaEE0HCOm30SN0FVX0cIvgBVM"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="text-lg text-primary font-medium mt-1">Authentic local products</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2"><span className="material-icons text-lg">call</span><span>+233 XX XXX XXXX</span></div>
              <div className="flex items-center gap-2"><span className="material-icons text-lg text-red-500">location_on</span><span>Accra, Ghana</span></div>
              <div className="flex items-center gap-2"><span className="material-icons text-lg">schedule</span><span>Open: 8am - 8pm</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Products ({DUMMY_PRODUCTS.length} items)</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Button className="rounded-full px-4" size="sm">All</Button>
              <Button variant="secondary" className="rounded-full px-4" size="sm">Food</Button>
              <Button variant="secondary" className="rounded-full px-4" size="sm">Drinks</Button>
              <Button variant="secondary" className="rounded-full px-4" size="sm">Snacks</Button>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">search</span>
                <input className="w-full pl-10 pr-4 py-2 rounded-lg bg-accent border-transparent focus:ring-primary focus:border-primary text-sm" placeholder="Search products..." />
              </div>
              <div className="relative">
                <select className="appearance-none bg-accent border-transparent text-sm rounded-lg py-2 pl-4 pr-10 focus:ring-primary focus:border-primary">
                  <option>Sort by: Price</option>
                  <option>Sort by: Name</option>
                  <option>Sort by: Popularity</option>
                </select>
                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DUMMY_PRODUCTS.map((p) => {
            const slug = p.title.toLowerCase().replace(/\s+/g, '-')
            const add = () => {
              addItem({ id: slug, title: p.title, price: p.price, img: p.img, vendor: name })
              navigate('/cart')
            }
            return (
              <div key={p.title} className="bg-card rounded-lg overflow-hidden flex flex-col shadow-sm border transition-shadow hover:shadow-lg">
                <div className="w-full">
                  <Link to={`/product/${slug}`}>
                    <img alt={p.title} className="w-full h-48 object-cover" src={p.img} />
                  </Link>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold flex-grow">
                    <Link to={`/product/${slug}`}>{p.title}</Link>
                  </h3>
                  <p className="text-lg font-bold text-primary mt-2">GHS {p.price}</p>
                  <p className="text-sm text-green-600 mt-1">{p.stock ?? "In Stock"}</p>
                  <Button className="mt-4 w-full" variant="secondary" onClick={add}>
                    <span className="material-icons text-base">add_shopping_cart</span>
                    <span className="ml-2">Add Cart</span>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
