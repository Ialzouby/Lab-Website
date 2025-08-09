"use client"

import Link from "next/link"

export default function JoinUsPage() {
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
                  <Link href="/join-us" className="active">
                    Join Us
                  </Link>
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
                  <Link href="/teaching">Teaching</Link>
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
        <h1>Join Us</h1>
        <h2>Current/Admitted Students</h2>
        <p>
          If you are a graduate/undergraduate student at UNCC, please feel free to email me with your CV to discuss
          research opportunities.
        </p>
        <h2>Prospective Students</h2>
        <p>
          I am always looking for highly motivated students to join my lab. Please apply to the CS graduate program and
          indicate my name in your application form.
        </p>
        <p>
          For Ph.D. application information, <Link href="#">click here</Link>.
        </p>
      </main>
    </div>
  )
}
