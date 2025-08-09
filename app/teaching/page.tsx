"use client"

import Link from "next/link"

export default function TeachingPage() {
  return (
    <div className="container">
      <div id="sidebar-container">
        <div
          className="hamburger"
          onClick={() => {
            const sidebar = document.querySelector(".sidebar-container")
            sidebar?.classList.toggle("open")
          }}
        >
          ☰
        </div>
        <aside className="sidebar-container">
          <h2>Dr. Wang</h2>
          <nav>
            <div className="section">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/biography">Biography</Link>
                </li>
                <li>
                  <Link href="/group">Group</Link>
                </li>
                <li>
                  <Link href="/join-us">Join Us</Link>
                </li>
              </ul>
            </div>
            <div className="section">
              <h3>Research</h3>
              <ul>
                <li>
                  <Link href="/publications">Publication</Link>
                </li>
                <li>
                  <Link href="/research">Research</Link>
                </li>
                <li>
                  <Link href="/datasets">Dataset</Link>
                </li>
              </ul>
            </div>
            <div className="section">
              <h3>Teaching & Service</h3>
              <ul>
                <li>
                  <Link href="/teaching" className="active">
                    Teaching
                  </Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>

      <main className="content">
        <h1>Courses</h1>
      </main>
    </div>
  )
}
