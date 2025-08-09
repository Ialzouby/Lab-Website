import Sidebar from "@/components/Sidebar"

export default function JoinUs() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <h1 className="section-title">Join Us</h1>

        <section className="highlight">
          <h2>Current/Admitted Students</h2>
          <p>
            If you are a graduate/undergraduate student at UNCC, please feel free to email me with your CV to discuss
            research opportunities.
          </p>
        </section>

        <section className="highlight">
          <h2>Prospective Students</h2>
          <p>
            I am always looking for highly motivated students to join my lab. Please apply to the CS graduate program
            and indicate my name in your application form.
          </p>
          <p>For Ph.D. application information, please visit the department website.</p>
        </section>
      </main>
    </div>
  )
}
