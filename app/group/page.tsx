"use client"

import Image from "next/image"
import Link from "next/link"

export default function GroupPage() {
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
                  <Link href="/group" className="active">
                    Group
                  </Link>
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
        <h1 className="group-title">Research Group</h1>

        <h2 className="section-title">Principal Investigator</h2>
        <div className="principal-investigator">
          <Image src="/assets/images/puwang.jpg" alt="Pu Wang" width={150} height={150} className="investigator-pic" />
          <div className="investigator-details">
            <p>
              <strong>Pu Wang, Ph.D., Associate Professor</strong>
            </p>
            <p>
              <Link href="#">AI4Health Center</Link>
            </p>
            <p>
              <Link href="#">UNCC Department of Computer Science</Link>
            </p>
            <p>University of North Carolina Charlotte</p>
            <p>Office: Woodward Hall 205E</p>
            <p>Address: 9201 University City Blvd, Charlotte, NC 28223-0001</p>
            <p>Email: pu.wang@charlotte.edu</p>
          </div>
        </div>

        <h2 className="section-title">Ph.D. Students</h2>
        <div className="students-grid">
          <div className="student">
            <Image src="/assets/images/filler.jpg" alt="Shuang Xia" width={120} height={120} className="student-pic" />
            <p>
              <strong>Shuang Xia</strong>
            </p>
            <p>Topic: Stochastic Optimization of Wireless Networks</p>
            <p>Email: sxxia@shockers.wichita.edu</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/prabhu.jpg"
              alt="Prabhu Janakaraj"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Prabhu Janakaraj</strong>
            </p>
            <p>Topic: Software Defined Networking</p>
            <p>Email: pjanakar@uncc.edu</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/akarsh.jpg"
              alt="Akarsh Pokkunuru"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Akarsh Pokkunuru</strong>
            </p>
            <p>Topic: Wireless Communications and Networking for Networked Robots</p>
            <p>Email: akarsh.28891@gmail.com</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/ahmad.jpg"
              alt="Ahmad Rabanimotlagh"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Ahmad Rabanimotlagh</strong>
            </p>
            <p>Topic: Big Data Analytics and Swarming CPS</p>
            <p>Email: ahmad.rabani.m@gmail.com</p>
          </div>
        </div>

        <h2 className="section-title">M.S. Students</h2>
        <div className="students-grid">
          <div className="student">
            <Image
              src="/assets/images/pinyarash.jpg"
              alt="Pinyarash Pinyoanuntapong"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Pinyarash Pinyoanuntapong</strong>
            </p>
            <p>Topic: Wireless Software-Defined Networking</p>
            <p>Email: pxpinyoanuntapong@shockers.wichita.edu</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/yagna.jpg"
              alt="Yagna Venkata Siva Ganesh Phani Siriki"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Yagna Venkata Siva Ganesh Phani Siriki</strong>
            </p>
            <p>Topic: Wireless Software-Defined Networking</p>
            <p>Email: yxsiriki@shockers.wichita.edu</p>
          </div>
        </div>

        <h2 className="section-title">Undergraduate Students</h2>
        <div className="students-grid">
          <div className="student">
            <Image
              src="/assets/images/kalvik.jpg"
              alt="Kalvik Jakkala"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Kalvik Jakkala</strong>
            </p>
            <p>Topic: Underwater Robotics</p>
            <p>Email: kd.kalvik@gmail.com</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/austin.jpg"
              alt="Austin White"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Austin White</strong>
            </p>
            <p>Topic: Underwater Robotics</p>
            <p>Email: austinwhite93@gmail.com</p>
          </div>
        </div>

        <h2 className="section-title">Alumni</h2>
        <div className="students-grid">
          <div className="student">
            <Image
              src="/assets/images/filler.jpg"
              alt="Shuang Xia, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Shuang Xia, MS</strong>
            </p>
            <p>Topic: Optimal Scheduling in Wireless Networks</p>
            <p>Email: sxxia@shockers.wichita.edu</p>
            <p>Currently PhD at WSU</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/prabhu.jpg"
              alt="Prabhu Janakaraj, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Prabhu Janakaraj, MS</strong>
            </p>
            <p>Topic: Cloud Based Spectrum Mapping</p>
            <p>Email: pxjanakaraj@shockers.wichita.edu</p>
            <p>Currently PhD at WSU</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/varun.jpg"
              alt="Varun Palaksha, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Varun Palaksha, MS</strong>
            </p>
            <p>Topic: Software Defined Wireless Networking</p>
            <p>Email: varunpalaksha@gmail.com</p>
            <p>Currently with Arista Networks, Santa Clara, CA</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/assad.jpg"
              alt="Assad Hashmi, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Assad Hashmi, MS</strong>
            </p>
            <p>Topic: Large Scale Emulator for Software-Defined Networks</p>
            <p>Email: axhahsmi@shockers.wichita.edu</p>
            <p>Currently with Arista Networks, Santa Clara, CA</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/fahad.jpg"
              alt="Fahad Naeem, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Fahad Naeem, MS</strong>
            </p>
            <p>Topic: Software-Defined Networking</p>
            <p>Email: fahadnaeemkhan@gmail.com</p>
            <p>Currently with Cisco Systems, CA</p>
          </div>
          <div className="student">
            <Image
              src="/assets/images/samuel.jpg"
              alt="Samuel Wolde, MS"
              width={120}
              height={120}
              className="student-pic"
            />
            <p>
              <strong>Samuel Wolde, MS</strong>
            </p>
            <p>Topic: Software-Defined Wireless Networking</p>
            <p>Email: samiwolde@gmail.com</p>
            <p>Currently with Arista Networks, Santa Clara, CA</p>
          </div>
        </div>
      </main>
    </div>
  )
}
