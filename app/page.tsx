import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <div className="profile-container">
          <img src="/placeholder.svg?height=250&width=200" alt="Dr. Pu Wang" className="profile-pic" />
          <div className="profile-details">
            <h1>Dr. Pu Wang</h1>
            <p>Ph.D., Associate Professor</p>
            <p>IEEE Senior Member, ACM Member</p>
            <p>
              <a href="https://cws.charlotte.edu/stage-ai4health/">AI4Health Center</a>
              <br />
              <a href="https://cci.charlotte.edu/">UNCC Department of CS</a>
              <br />
              University of North Carolina Charlotte
            </p>
            <p>Office: Woodward Hall 205E</p>
            <p>Address: 9201 University City Blvd, Charlotte NC, 28223-0001</p>
            <p>Phone: 404-687-6168</p>
            <p>Email: pu.wang@charlotte.edu</p>
            <p>
              <a href="https://scholar.google.com/citations?user=0buJlAUAAAAJ&hl=en">Google Scholar</a> |{" "}
              <a href="https://www.linkedin.com/in/pu-wang-54a57914/">LinkedIn</a>
            </p>
          </div>
          <img src="/placeholder.svg?height=200&width=300&text=Word Cloud" alt="Word Cloud" className="right-image" />
        </div>

        <section className="highlight">
          <h2>Prospective Students</h2>
          <p>
            I am currently looking for self-motivated graduate students willing to work in the area of deep learning for
            computer vision and smart sensing, reinforcement learning for networking, and computational biomechanics.
          </p>
          <p>Requirements:</p>
          <p>
            (1) Undergraduate or MS students with degrees in Computer Science/Engineering, Electrical Engineering,
            Mechanical Engineering, Mathematics or related majors.
          </p>
          <p>
            (2) Strong programming and/or mathematical skills. Proficient in deep learning frameworks, e.g., PyTorch
          </p>
          <p>(3) Research experience in computer vision and machine learning are preferred.</p>
          <p>If interested, please send your CV and transcripts to me at pu.wang@uncc.edu</p>
        </section>

        <section>
          <h2>Research Interests</h2>
          <ul>
            <li>Computer Vision</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Wireless Communications</li>
            <li>Internet of Things</li>
          </ul>
        </section>

        <section className="news">
          <h2>News</h2>
          <ul>
            <li>
              <strong>Dec 2024:</strong> Best student paper runner-up, IEEE SCC, San Francisco
            </li>
            <li>
              <strong>Nov 2024:</strong> John A. See Innovation Award
            </li>
            <li>
              <strong>Oct 2024:</strong> TPC Highest Ranked Paper of IEEE DySPAN, IEEE Communication Society, Germany
            </li>
            <li>
              <strong>Sep 2024:</strong> BWN Lab Researcher of the Year Award
            </li>
            <li>
              <strong>Aug 2024:</strong> Fellow of the School of Graduate Studies, Memorial University of Newfoundland
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
