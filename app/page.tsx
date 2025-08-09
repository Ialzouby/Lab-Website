"use client"

import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
                  <Link href="/" className="active">
                    Home
                  </Link>
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
        <header className="profile-header">
          <div className="profile-container">
            <Image src="/assets/images/puwang.jpg" alt="Dr. Pu Wang" width={150} height={150} className="profile-pic" />
            <div className="profile-details">
              <h1>Dr. Pu Wang</h1>
              <p>Ph.D., Associate Professor</p>
              <p>IEEE Senior Member, ACM Member</p>
              <p>
                <Link href="https://cws.charlotte.edu/stage-ai4health/">AI4Health Center</Link>
                <br />
                <Link href="https://cci.charlotte.edu/">UNCC Department of CS</Link>
                <br />
                University of North Carolina Charlotte
              </p>
              <p>Office: Woodward Hall 205E</p>
              <p>Address: 9201 University City Blvd, Charlotte NC, 28223-0001</p>
              <p>Phone: 404-687-6168</p>
              <p>Email: pu.wang@charlotte.edu</p>
              <p>
                <Link href="https://scholar.google.com/citations?user=0buJlAUAAAAJ&hl=en">Google Scholar</Link> |{" "}
                <Link href="https://www.linkedin.com/in/pu-wang-54a57914/">LinkedIn</Link>
              </p>
            </div>
            <div className="profile-right-image">
              <Image
                src="/assets/images/wordcloud.png"
                alt="Word Cloud"
                width={400}
                height={300}
                className="right-image"
              />
            </div>
          </div>
        </header>

        <section className="highlight">
          <h2>Prospective Students</h2>
          <p>
            I am currently looking for self-motivated graduate students willing to work in the area of deep learning for
            computer vision and smart sensing, reinforcement learning for networking, and computational biomechanics.
          </p>
          <p>Requirements:</p>
          <p>
            (1) - Undergraduate or MS students with degrees in Computer Science/Engineering, Electrical Engineering,
            Mechanical Engineering, Mathematics or related majors.
          </p>
          <p>
            (2) - Strong programming and/or mathematical skills. Proficient in deep learning frameworks, e.g., PyTorch
          </p>
          <p style={{ marginBottom: "20px" }}>
            (3) - Research experience in computer vision and machine learning are preferred.
          </p>
          <p style={{ marginBottom: "20px" }}>
            If interested, please send your CV, and transcripts to me at pu.wang@uncc.edu
          </p>
        </section>

        <section className="interests">
          <h2>Research Interests</h2>
          <ul>
            <li>Computer Vision</li>
            <li>Machine Learning</li>
            <li>Image and Video Processing</li>
          </ul>
        </section>

        <section className="news">
          <h2>News</h2>
          <ul>
            <li>Best student paper runner-up, IEEE SCC, San Francisco</li>
            <li>John A. See Innovation Award</li>
            <li>TPC Highest Ranked Paper of IEEE DySPAN, IEEE Communication Society, Germany</li>
            <li>
              BWN Lab Researcher of the Year Award, for his outstanding research achievements throughout the year.
            </li>
            <li>
              Fellow of the School of Graduate Studies in recognition of his outstanding academic achievement throughout
              a graduate programme, Memorial University of Newfoundland, 2008
            </li>
            <li>IEEE Travel Grant for 2007 International Conference on Communications</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
