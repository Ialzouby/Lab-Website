"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PublicationsPage() {
  const [collapsedSections, setCollapsedSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (year: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

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
                  <Link href="/publications" className="active">
                    Publication
                  </Link>
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
        <div className="publications-section">
          <h1 className="section-title">Publications</h1>
          <p className="copyright">
            <strong>DISCLAIMER:</strong> Readers may view, browse, and/or download any material in this website for
            temporary use only, provided that this is used for noncommercial personal purposes only. Except as provided
            by law, this material may not be further reproduced, distributed, transmitted, modified, adapted, performed,
            displayed, published, or sold in whole or part, without prior written permission from the publisher and the
            web site owner.
          </p>

          {/* 2025 */}
          <div className="section-header">
            <h2 className="collapsible-header" onClick={() => toggleSection("2025")} style={{ cursor: "pointer" }}>
              2025 <span className="toggle-indicator">▼</span>
            </h2>
          </div>
          {!collapsedSections["2025"] && (
            <div>
              <div className="publication">
                <Image
                  src="/assets/images/genhmr.gif"
                  alt="GenHMR Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>GenHMR: Generative Human Mesh Recovery</h3>
                  <p>Muhammad Usama Saleem, Ekkasit Pinyoanuntapong, Pu Wang, Hongfei Xue, Srijan Das, Chen Chen</p>
                  <p>
                    <em>The Thirty-Ninth AAAI Conference on Artificial Intelligence (AAAI '25), 2025</em>
                  </p>
                  <Link href="https://arxiv.org/abs/2412.14444" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2024 */}
          <div className="section-header">
            <h2 className="collapsible-header" onClick={() => toggleSection("2024")} style={{ cursor: "pointer" }}>
              2024 <span className="toggle-indicator">▼</span>
            </h2>
          </div>
          {!collapsedSections["2024"] && (
            <div>
              <div className="publication">
                <Image
                  src="/assets/images/bamm.gif"
                  alt="BAMM Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>BAMM: Bidirectional Autoregressive Motion Model (ECCV 2024)</h3>
                  <p>
                    Ekkasit Pinyoanuntapong°, Muhammad Usama Saleem°, Pu Wang°, Minwoo Lee°, Srijan Das°, Chen Chen†
                  </p>
                  <p>
                    <em>°University of North Carolina at Charlotte, †University of Central Florida</em>
                  </p>
                  <Link href="https://exitudio.github.io/BAMM-page/" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/contrlmm.gif"
                  alt="ControlMM Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>ControlMM: Controllable Masked Motion Generation</h3>
                  <p>
                    Ekkasit Pinyoanuntapong¹, Muhammad Usama Saleem¹, Korrawe Karunratanakul², Pu Wang¹, Hongfei Xue¹,
                    Chen Chen³, Chuan Guo⁴, Junli Cao⁴, Jian Ren⁴, Sergey Tulyakov⁴
                  </p>
                  <p>
                    <em>
                      ¹University of North Carolina at Charlotte, ²ETH Zurich, ³University of Central Florida, ⁴Snap
                      Inc.
                    </em>
                  </p>
                  <Link href="https://exitudio.github.io/ControlMM-page/" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2023 */}
          <div className="section-header">
            <h2 className="collapsible-header" onClick={() => toggleSection("2023")} style={{ cursor: "pointer" }}>
              2023 <span className="toggle-indicator">▼</span>
            </h2>
          </div>
          {!collapsedSections["2023"] && (
            <div>
              <div className="publication">
                <Image
                  src="/assets/images/mmm.gif"
                  alt="MMM Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>MMM: Generative Masked Motion Model</h3>
                  <p>E. Pinyoanuntapong, P. Wang, M. Lee, C. Chen</p>
                  <p>
                    <em>Proc. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023</em>
                  </p>
                  <Link href="https://arxiv.org/pdf/2312.03596" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/Designing Acoustic Reconfigurable Intelligent Surface for Underwater Communications .gif"
                  alt="Acoustic Surface Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>Designing Acoustic Reconfigurable Intelligent Surface for Underwater Communications</h3>
                  <p>H. Wang, Z. Sun, H. Guo, P. Wang, I. Akyildiz</p>
                  <p>
                    <em>IEEE Transactions on Wireless Communications, to appear, 2023</em>
                  </p>
                  <Link href="#" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/gaitsada.png"
                  alt="GaitSADA Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>GaitSADA: Self-Aligned Domain Adaptation for mmWave Gait Recognition</h3>
                  <p>E. Pinyoanuntapong, A. Ali, K. Jakkala, P. Wang, M. Lee, Q. Peng, C. Chen, Z. Sun</p>
                  <p>
                    <em>Proc. IEEE 20th International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2023</em>
                  </p>
                  <Link href="https://arxiv.org/pdf/2301.13384" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/dha-fl.png"
                  alt="DHA-FL Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>
                    DHA-FL: Enabling Efficient and Effective AIoT via Decentralized Hierarchical Asynchronous Federated
                    Learning
                  </h3>
                  <p>W. Huff, P. pinyoanuntapong, R. Balakrishnan, H. Feng, M. Lee, P. Wang, C. Chen</p>
                  <p>
                    <em>Proc. MLSys 2023 Workshop on Resource-Constrained Learning in Wireless Networks, 2023</em>
                  </p>
                  <Link href="https://openreview.net/pdf?id=bSpvqVACDmQ" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/gaitmixer.png"
                  alt="GaitMixer Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>GaitMixer: Skeleton-based Gait Representation Learning via Wide-spectrum Multi-axial Mixer</h3>
                  <p>E. Pinyoanuntapong, A. Ali, P. Wang, M. Lee, C. Chen</p>
                  <p>
                    <em>
                      Proc. IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023
                    </em>
                  </p>
                  <Link href="https://arxiv.org/pdf/2210.15491" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2022 */}
          <div className="section-header">
            <h2 className="collapsible-header" onClick={() => toggleSection("2022")} style={{ cursor: "pointer" }}>
              2022 <span className="toggle-indicator">▼</span>
            </h2>
          </div>
          {!collapsedSections["2022"] && (
            <div>
              <div className="publication">
                <Image
                  src="/assets/images/MutualNet: Adaptive ConvNet via Mutual Learning from Different Model Configurations.png"
                  alt="MutualNet Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>MutualNet: Adaptive ConvNet via Mutual Learning from Different Model Configurations</h3>
                  <p>T. Yang, S. Zhu, M. Mendieta, P. Wang, R. Balakrishnan, M. Lee, T. Han, M. Shah, C. Chen</p>
                  <p>
                    <em>IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI), 2022</em>
                  </p>
                  <Link href="https://arxiv.org/abs/2105.07085" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/Publication-3.png"
                  alt="EdgeML Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>EdgeML: Towards Network-Accelerated Federated Learning over Wireless Edge</h3>
                  <p>P. Pinyoanuntapong, P. Janakaraj, R. Balakrishnan, M. Lee, C. Chen, P. Wang</p>
                  <p>
                    <em>Computer Networks, 2022</em>
                  </p>
                  <Link href="#" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/Publication-4.gif"
                  alt="Scalable AIoT Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>Towards Scalable and Robust AIoT via Decentralized Federated Learning</h3>
                  <p>P. Pinyoanuntapong, W. Huff, M. Lee, C. Chen, P. Wang</p>
                  <p>
                    <em>IEEE Internet of Things Magazine, 2022</em>
                  </p>
                  <Link href="#" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/lightweight.png"
                  alt="Lightweight Graph Transformer Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>A Lightweight Graph Transformer Network for Human Mesh Reconstruction from 2D Human Pose</h3>
                  <p>C. Zheng, M. Mendieta, P. Wang, A. Lu, C. Chen</p>
                  <p>
                    <em>Proc. ACM Multimedia (ACM MM), 2022</em>
                  </p>
                  <Link href="https://arxiv.org/pdf/2111.12696" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/local.png"
                  alt="Local Learning Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>Local Learning Matters: Rethinking Data Heterogeneity in Federated Learning</h3>
                  <p>S. Gupta, Z. Sun, P. Wang, A. Bhuyan</p>
                  <p>
                    <em>Proc. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022</em>
                  </p>
                  <Link href="https://arxiv.org/pdf/2111.14213" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/PaWLA.gif"
                  alt="PaWLA Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>PaWLA: PPG-based Weight Lifting Assessment</h3>
                  <p>A. Rahman, P. Wang, W. Wang, Y. Wang</p>
                  <p>
                    <em>
                      Proc. IEEE International Performance, Computing, and Communications Conference (IPCCC), 2022
                    </em>
                  </p>
                  <Link href="https://ieeexplore.ieee.org/document/9894324" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>

              <div className="publication">
                <Image
                  src="/assets/images/ppgsign.gif"
                  alt="PPGSign Publication"
                  width={150}
                  height={100}
                  className="publication-image"
                />
                <div className="publication-details">
                  <h3>PPGSign: Handwritten Signature Authentication using Wearable PPG Sensor</h3>
                  <p>A. Rahman, Y Cao, X Wei, P. Wang, F Li, Y Wang</p>
                  <p>
                    <em>Proc. IEEE Wireless Communications and Networking Conference (WCNC), 2022</em>
                  </p>
                  <Link href="https://ieeexplore.ieee.org/abstract/document/9771813" target="_blank" className="link">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
