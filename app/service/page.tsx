"use client"

import Link from "next/link"

export default function ServicePage() {
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
                  <Link href="/teaching">Teaching</Link>
                </li>
                <li>
                  <Link href="/service" className="active">
                    Service
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>

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
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Workshop on Performance and Management of Wireless and
              Mobile Networks (P2MNET' 2011)
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Conference on Wireless and Mobile Computing, Networking
              and Communications (WiMob 2011)
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>International Wireless Communications and Mobile Computing Conference
              (IWCMC' 08-12).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>IEEE International Conference on Communications in China (ICCC 2012).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>International Conference on Computing, Networking and Communications (ICNC
              2012).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>International Conference on Smart Homes and Health Telematics (iCOST
              2011).
            </li>
            <li className="tpc-work-item">
              <span className="bullet"></span>International Conference on Connected Vehicles & Expo (ICCVE 2012).
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
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Transactions on Vehicular Technology
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Network Journal
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>IEEE Communications Letters
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>Elsevier Journal on Computer Networks
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>Wiley Journal on Wireless Communications and Mobile Computing
            </li>
            <li className="journal-paper-review-item">
              <span className="bullet"></span>EURASIP Journal on Advances in Signal Processing
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
