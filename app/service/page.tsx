import Sidebar from "@/components/Sidebar"

export default function Service() {
  return (
    <div className="container">
      <Sidebar />
      <main className="content">
        <header className="header-section">
          <h1 className="header-title">Professional Memberships and Contributions</h1>
        </header>

        <section className="membership-section">
          <h2 className="section-title">Memberships in Professional Societies</h2>
          <ul className="membership-list">
            <li className="membership-item">
              <span className="bullet"></span>Member, The Institute of Electrical and Electronics Engineers (IEEE)
            </li>
            <li className="membership-item">
              <span className="bullet"></span>Member, Association for Computing Machinery (ACM)
            </li>
          </ul>
        </section>

        <section className="symposium-chair-section">
          <h2 className="section-title">Symposium Chair</h2>
          <ul className="symposium-chair-list">
            <li className="symposium-chair-item">
              <span className="bullet"></span>IEEE Vehicular Technology Conference (IEEE VTC 2015): Connected Vehicles
              track.
            </li>
            <li className="symposium-chair-item">
              <span className="bullet"></span>The 25th International Conference on Computer Communication and Networks
              (ICCCN 2016): Software Defined Networks and Network Testing and Deployment Track
            </li>
          </ul>
        </section>

        <section className="tpc-work-section">
          <h2 className="section-title">Technical Program Committee (TPC) Work</h2>
          <ul className="tpc-work-list">
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Conference on Computer Communications (INFOCOM 2017,
              2018).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE Global Telecommunications Conference (GLOBECOM' 2009-2017).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Conference on Communications (ICC' 2011-2017).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Symposium on Personal, Indoor and Mobile Radio
              Communications (PIMRC 2012).
            </li>
          </ul>
        </section>

        <section className="journal-paper-reviews-section">
          <h2 className="section-title">Journal Paper Reviews</h2>
          <ul className="journal-paper-reviews-list">
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE/ACM Transactions on Networking
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Journal on Selected Areas in Communications
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Transactions on Multimedia
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Transactions on Communications
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Transactions on Wireless Communications
            </li>
          </ul>
        </section>

        <section className="conference-paper-reviews-section">
          <h2 className="section-title">Conference Paper Reviews</h2>
          <ul className="conference-paper-reviews-list">
            <li className="conference-paper-review-item">
              <span className="bullet"></span>IEEE Global Telecommunications Conference (Globecom)
            </li>
            <li className="conference-paper-review-item">
              <span className="bullet"></span>IEEE International Conference on Communications (ICC)
            </li>
            <li className="conference-paper-review-item">
              <span className="bullet"></span>IEEE Wireless Communications and Networking Conference
            </li>
            <li className="conference-paper-review-item">
              <span className="bullet"></span>IEEE Symposium on Computers and Communications
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
