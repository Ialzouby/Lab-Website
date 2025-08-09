"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path: string) => {
    return pathname === path ? "active" : ""
  }

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <aside className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <h2>Dr. Wang</h2>
        <nav>
          <div className="section">
            <ul>
              <li>
                <Link href="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/biography" className={isActive("/biography")}>
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/group" className={isActive("/group")}>
                  Group
                </Link>
              </li>
              <li>
                <Link href="/join-us" className={isActive("/join-us")}>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h3>Research</h3>
            <ul>
              <li>
                <Link href="/publications" className={isActive("/publications")}>
                  Publication
                </Link>
              </li>
              <li>
                <Link href="/research" className={isActive("/research")}>
                  Research
                </Link>
              </li>
              <li>
                <Link href="/datasets" className={isActive("/datasets")}>
                  Dataset
                </Link>
              </li>
            </ul>
          </div>
          <div className="section">
            <h3>Teaching & Service</h3>
            <ul>
              <li>
                <Link href="/teaching" className={isActive("/teaching")}>
                  Teaching
                </Link>
              </li>
              <li>
                <Link href="/service" className={isActive("/service")}>
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}
