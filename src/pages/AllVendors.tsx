import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"

type Vendor = {
  name: string
  location: string
  items: number
  href: string
  img: string
  category: 'Food' | 'Tech' | 'Fashion' | 'Grocery'
}

const VENDORS: Vendor[] = [
  { name: "Mama Esi's Kitchen", location: "Accra", items: 24, href: "/vendor/mama-esi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3upE2A87IKNvAJNnAR-OJpD2TKnxmCZbtpsHpRXiyloZNWktctkb9jSfMsPeYNWUzGBiqkbeJprxCKMUdXVdPJnRFSBR2KOE03A0Mz44lceHkhS0mYoCCseIXMw4IEz2LKnfrxH7QBjGyFkiotPnMZXJe_yXxoJMW1_8Ld6dUVVSj5qivimyM5Fq7CmAgAE7-FrF1o-fsnneK_CxNSjH5ZmvF9AixvLpmZ7WqI5k5nlEU2Qo7T0Dx6aqlbnvXizQ0cehh8lVJ2rM", category: 'Food' },
  { name: "Kofi Tech Store", location: "Kumasi", items: 15, href: "/vendor/kofi-tech", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTnhLKa8i9Sc8HIbBBfdbTzVozkbTrGG5TBXtJzgeSBWDnseQhqktGss0N7cphotYDCGlfsBuZ8Nl1TQYKrOsOsWch8MK2F1zJKyPBn_OnPWbcYp8DHaLACChXG7oo5HRWzHoxIdh2iz5ipb5BhNrkZZvZLRsIgGxlTrX6QZKGO-qkIZ_8nVWsytcjsTo2Gw0K4db-xEOvYGKCkgA3RjnI0wZngsLkG0Q-YQ7D7Memt5GsQNwl_7I-gN4rMrIS1Y3JhuzK1ELjyis", category: 'Tech' },
  { name: "Ama Foods & More", location: "Accra", items: 32, href: "/all-vendors", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjMVMEbWHwKr1zF8ip_Z3yicrv8nN7568HVc1-kRDg-AWAYEtv9AtITGgO-B2rDWxUDMcPaP3j7rXsJRZ4Q0rQIHrh0NjU_FCTKDFTgF0Nw3jCgc2-EKeutcptJaew_oFSXhDzI_S-8iedmdv3_MN9iqO6cmFMKPIulwW9jRddgQNY71uLzqLx859IM1BPmM7zF3a98gFg8aw8PEj6GbI5YNVEv7KzxIkB3TpUEpEyUleSwiueCAD3JpSC8Uc0g0IP46M4TOInHTQ", category: 'Grocery' },
  { name: "Kwame's Electronics", location: "Tema", items: 18, href: "/all-vendors", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnOVz54ITeqzhFqsK9C5VlmJaoHRgub4Bt0Gpr72QDHIlCszWlKzXQU50b77FH8p90TL_858cC-XVYx3FqBWgusG1MX9kOitJhiKkVigLgzUvBa2RlsmhjgPmXM17yQwdEWdb-g_usmp5M9_bE0lGjGrsXWWn4D5yEqHHPgI406AGw5s9UqRcv10uGihDFkSJwNEuRnAZigmBTyvzKZxLZGMfYwk8uKwYsKp1I5PmcsI73d_qlDy0RT3XCWDb_lsUscJdSCeZ0xkg", category: 'Tech' },
  { name: "Adwoa's Boutique", location: "Accra", items: 45, href: "/all-vendors", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtENtx-31M3NeeCr-domoWFXDSMsh_fJkAwulD0YaqmYK-6YzM-VdEFTwg7G_iHbr45IRAVcCVfYBokF2nDXHxMSs0C6WhtOVrEYWBFV8rm6zNZy7HEqumGDJCr-V3XWUClfe_JkRRpHklobQjt4BwhxOgNNxbRz0hLsRFO6T52ISyDM7s4_s_rZC1ZITMNknxAh4E-n_jzhdBMAINKVPVx9Nz3OK1pv1jhOiXQEmCq8JyBu50wYTgL7NFy-63v18gndRaQm3hbIU", category: 'Fashion' },
  { name: "Yaw's Groceries", location: "Kumasi", items: 28, href: "/all-vendors", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArHSxsmfbp3_iyvdeh0JY081fgw1LHU9srr7AY2vTUMq4fAcmrwbAFKJvPzQFEdIJElgk8BbtwmKZskD6Fm2uDtu_nG2BuSNaMtw-_0iE1WqUQUgfr_sHkTtlpcg4os2WuqwMiD_3al2d7K_y1-Ar652X9zrOmrl2KZtebE3KA8DnF8Qhw6Y0tA6h57qvglSyb4HjDJv5f9JwGqzRliFnuYcYVtAGg1WTww0tLnIWk4l-1YbMrbyU8qYq8HlxSDtRVkWfE4W-MBGE", category: 'Grocery' },
  { name: "Kojo Fresh Produce", location: "Cape Coast", items: 12, href: "/all-vendors", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=60", category: 'Grocery' },
  { name: "Akosua Fashion", location: "Accra", items: 20, href: "/all-vendors", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=60", category: 'Fashion' },
]

export default function AllVendors() {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [nameAsc, setNameAsc] = useState(true)
  const categories: (Vendor['category'] | 'All')[] = ['All', 'Food', 'Tech', 'Fashion', 'Grocery']

  const filtered = useMemo(() => {
    let list = [...VENDORS]
    const cat = categories[categoryIndex]
    if (cat !== 'All') list = list.filter(v => v.category === cat)
    list.sort((a, b) => nameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    return list
  }, [categoryIndex, nameAsc])

  const total = filtered.length

  function cycleCategory() {
    setCategoryIndex(i => (i + 1) % categories.length)
  }

  function toggleSort() {
    setNameAsc(v => !v)
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="inline-flex items-center gap-2 text-muted-foreground">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li className="material-icons text-base">chevron_right</li>
          <li className="text-foreground font-medium">Vendors</li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">All Vendors <span className="text-muted-foreground font-normal">({total})</span></h1>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={cycleCategory} className="whitespace-nowrap">Filter by Category: {categories[categoryIndex]}</Button>
          <Button variant="secondary" onClick={toggleSort} className="whitespace-nowrap">Sort by: Name {nameAsc ? '↑' : '↓'}</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((v) => (
          <div key={v.name} className="bg-card rounded-lg overflow-hidden shadow-sm border">
            <Link to={v.href}>
              <img alt={v.name} className="w-full h-48 object-cover" src={v.img} />
            </Link>
            <div className="p-5 flex flex-col">
              <h3 className="text-lg font-bold">
                <Link to={v.href}>{v.name}</Link>
              </h3>
              <div className="flex items-center text-sm text-muted-foreground my-2">
                <span className="material-icons text-base mr-1">location_on</span>
                <span>{v.location}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{v.items} Items</p>
              <Button asChild className="mt-auto w-full">
                <Link to={v.href}>View Shop</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-0">
        <Button variant="secondary" className="rounded-r-none">Previous</Button>
        <Button variant="default" className="rounded-none">1</Button>
        <Button variant="secondary" className="rounded-none">2</Button>
        <Button variant="secondary" className="rounded-none hidden md:inline-flex">3</Button>
        <span className="px-3 py-2 border text-sm bg-card">...</span>
        <Button variant="secondary" className="rounded-none hidden md:inline-flex">8</Button>
        <Button variant="secondary" className="rounded-l-none">Next</Button>
      </nav>
    </div>
  )
}
