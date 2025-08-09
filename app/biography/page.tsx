"use client"

import Link from "next/link"

export default function BiographyPage() {
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
                  <Link href="/biography" className="active">
                    Biography
                  </Link>
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
        <h1>Biography</h1>
        <p>
          Pu Wang received B.Eng degree in Electrical Engineering from Beijing Institute of Technology, China, in 2003,
          and M.Eng degree in Electrical and Computer Engineering from Memorial University of Newfoundland, Canada, in
          2008. He received the Ph.D. degree in Electrical and Computer Engineering from the Georgia Institute of
          Technology, Atlanta, GA, in August 2013, under the guidance of Professor Ian F. Akyildiz.
        </p>
        <p>
          Currently, he is an Associate Professor with the Department of Computer Science at the University of North
          Carolina at Charlotte. Prior to joining UNCC, he was an assistant professor with Department of Electrical
          Engineering and Computer Science at Wichita State University from 2013 to 2017. His current research interests
          focus on deep learning and reinforcement learning, with applications in smart sensing, networking, computer
          vision, Internet of Things, and Cyber-Physical Systems.
        </p>
      </main>
    </div>
  )
}
