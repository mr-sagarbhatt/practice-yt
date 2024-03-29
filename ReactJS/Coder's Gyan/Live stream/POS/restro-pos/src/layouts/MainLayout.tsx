import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex gap-4">
      <aside className="w-36 min-h-screen bg-slate-700">
        <div>Logo</div>
        <ul>
          <li>
            <Link to="/">Tables</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </aside>
      <main className="w-3/4">
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout
