import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function VendorDashboard() {
  return (
    <div className="flex h-screen gap-0">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-shrink-0 bg-card border-r flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="4Venda" className="h-10 w-10 rounded" />
            <h1 className="text-xl font-bold">Mama Esi's</h1>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold">
            <span className="material-icons">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent">
            <span className="material-icons">inventory_2</span>
            <span>Products</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent">
            <span className="material-icons">shopping_cart</span>
            <span>Orders</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent">
            <span className="material-icons">settings</span>
            <span>Settings</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent">
            <span className="material-icons">bar_chart</span>
            <span>Reports</span>
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Link to="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-accent">
            <span className="material-icons">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex-shrink-0 bg-card/80 backdrop-blur border-b flex items-center justify-between px-6">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center gap-5">
            <button className="relative text-muted-foreground hover:text-foreground">
              <span className="material-icons">notifications</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
            </button>
            <div className="flex items-center gap-3">
              <img alt="User avatar" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBSGerfFtGC3n2tOeiMaa7z-zcgft_jN9GFnA6X5j3tuf-KxybjzjAZv10xi9-XA_FoUge-c_fMXDV6zI3Wr4h4vtsoMxAfoPkbAckUpHFu2dwWf20VRERxHhxU_llofXthMGk9G1Jr1Di-v9Lir5Irui-3V198rIXE2JhiaE03tPe3Py7ViI_qoxrYsIHGsbLJfpPsFGp1rJ2jPREkSJ3N_hTGw0AlrSXObHmt04Z2KJ2nwoL6qYH87Zto9kchQFAQYBM3naU-ms" />
              <div>
                <p className="font-semibold text-sm">Esi Mensah</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <button className="text-muted-foreground">
                <span className="material-icons">expand_more</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Top stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                  <span className="material-icons text-blue-500">inventory_2</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/50">
                  <span className="material-icons text-red-500">pending_actions</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending Orders</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/50">
                  <span className="material-icons text-green-500">attach_money</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Sales</p>
                  <p className="text-2xl font-bold">GHS 450</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/50">
                  <span className="material-icons text-yellow-500">warning</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Low Stock</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                  <span className="material-icons text-purple-500">task_alt</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed Orders (Today)</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                  <span className="material-icons text-indigo-500">fact_check</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Products</p>
                  <p className="text-2xl font-bold">21</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mt-8 bg-card rounded-lg border">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <Link to="#" className="text-sm font-medium text-primary hover:underline">View All</Link>
            </div>
            <div className="divide-y">
              {[{ id: 1234, customer: 'John Doe', total: 50, detail: 'Jollof Rice x2 - 2 minutes ago', color: 'yellow' },
                { id: 1233, customer: 'Jane Smith', total: 35, detail: 'Banku & Tilapia - 15 minutes ago', color: 'green' },
                { id: 1232, customer: 'Kwame Boateng', total: 65, detail: '3 items - 1 hour ago', color: 'yellow' }].map(o => (
                <div key={o.id} className="flex items-center justify-between p-4 hover:bg-accent/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${o.color === 'yellow' ? 'bg-yellow-100' : 'bg-green-100'} dark:${o.color === 'yellow' ? 'bg-yellow-900/50' : 'bg-green-900/50'}`}>
                      <span className={`material-icons text-base ${o.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'}`}>{o.color === 'yellow' ? 'hourglass_top' : 'local_shipping'}</span>
                    </div>
                    <div>
                      <p className="font-medium">#{o.id} | {o.customer} | GHS {o.total}</p>
                      <p className="text-sm text-muted-foreground">{o.detail}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <span className="material-icons">arrow_forward</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
