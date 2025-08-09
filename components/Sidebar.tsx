"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <h2>Dr. Wang</h2>
      <nav>
        <div className="section">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/biography" className={pathname === "/biography" ? "active" : ""}>
                Biography
              </Link>
            </li>
            <li>
              <Link href="/group" className={pathname === "/group" ? "active" : ""}>
                Group
              </Link>
            </li>
            <li>
              <Link href="/join-us" className={pathname === "/join-us" ? "active" : ""}>
                Join Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Research</h3>
          <ul>
            <li>
              <Link href="/publications" className={pathname === "/publications" ? "active" : ""}>
                Publications
              </Link>
            </li>
            <li>
              <Link href="/research" className={pathname === "/research" ? "active" : ""}>
                Research
              </Link>
            </li>
            <li>
              <Link href="/datasets" className={pathname === "/datasets" ? "active" : ""}>
                Datasets
              </Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Teaching & Service</h3>
          <ul>
            <li>
              <Link href="/teaching" className={pathname === "/teaching" ? "active" : ""}>
                Teaching
              </Link>
            </li>
            <li>
              <Link href="/service" className={pathname === "/service" ? "active" : ""}>
                Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
