"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"

interface Publication {
  title: string
  authors: string
  venue: string
  image: string
  link: string
}

export default function Publications() {
  const [collapsedYears, setCollapsedYears] = useState<{ [key: string]: boolean }>({})

  const toggleYear = (year: string) => {
    setCollapsedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  const publications = {
    "2025": [
      {
        title: "GenHMR: Generative Human Mesh Recovery",
        authors: "Muhammad Usama Saleem, Ekkasit Pinyoanuntapong, Pu Wang, Hongfei Xue, Srijan Das, Chen Chen",
        venue: "The Thirty-Ninth AAAI Conference on Artificial Intelligence (AAAI '25), 2025",
        image: "/placeholder.svg?height=100&width=150&text=GenHMR",
        link: "https://arxiv.org/abs/2412.14444",
      },
    ],
    "2024": [
      {
        title: "BAMM: Bidirectional Autoregressive Motion Model (ECCV 2024)",
        authors: "Ekkasit Pinyoanuntapong, Muhammad Usama Saleem, Pu Wang, Minwoo Lee, Srijan Das, Chen Chen",
        venue: "European Conference on Computer Vision (ECCV), 2024",
        image: "/placeholder.svg?height=100&width=150&text=BAMM",
        link: "https://exitudio.github.io/BAMM-page/",
      },
      {
        title: "ControlMM: Controllable Masked Motion Generation",
        authors:
          "Ekkasit Pinyoanuntapong, Muhammad Usama Saleem, Korrawe Karunratanakul, Pu Wang, Hongfei Xue, Chen Chen",
        venue: "Computer Vision and Pattern Recognition (CVPR), 2024",
        image: "/placeholder.svg?height=100&width=150&text=ControlMM",
        link: "https://exitudio.github.io/ControlMM-page/",
      },
    ],
    "2023": [
      {
        title: "MMM: Generative Masked Motion Model",
        authors: "E. Pinyoanuntapong, P. Wang, M. Lee, C. Chen",
        venue: "Proc. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
        image: "/placeholder.svg?height=100&width=150&text=MMM",
        link: "https://arxiv.org/pdf/2312.03596",
      },
      {
        title: "GaitSADA: Self-Aligned Domain Adaptation for mmWave Gait Recognition",
        authors: "E. Pinyoanuntapong, A. Ali, K. Jakkala, P. Wang, M. Lee, Q. Peng, C. Chen, Z. Sun",
        venue: "Proc. IEEE 20th International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2023",
        image: "/placeholder.svg?height=100&width=150&text=GaitSADA",
        link: "https://arxiv.org/pdf/2301.13384",
      },
    ],
    "2022": [
      {
        title: "MutualNet: Adaptive ConvNet via Mutual Learning from Different Model Configurations",
        authors: "T. Yang, S. Zhu, M. Mendieta, P. Wang, R. Balakrishnan, M. Lee, T. Han, M. Shah, C. Chen",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI), 2022",
        image: "/assets/images/MutualNet: Adaptive ConvNet via Mutual Learning from Different Model Configurations.png",
        link: "https://arxiv.org/abs/2105.07085",
      },
      {
        title: "EdgeML: Towards Network-Accelerated Federated Learning over Wireless Edge",
        authors: "P. Pinyoanuntapong, P. Janakaraj, R. Balakrishnan, M. Lee, C. Chen, P. Wang",
        venue: "Computer Networks, 2022",
        image: "/assets/images/Publication-3.png",
        link: "#",
      },
      {
        title: "Towards Scalable and Robust AIoT via Decentralized Federated Learning",
        authors: "P. Pinyoanuntapong, W. Huff, M. Lee, C. Chen, P. Wang",
        venue: "IEEE Internet of Things Magazine, 2022",
        image: "/assets/images/Publication-4.gif",
        link: "#",
      },
      {
        title: "A Lightweight Graph Transformer Network for Human Mesh Reconstruction from 2D Human Pose",
        authors: "C. Zheng, M. Mendieta, P. Wang, A. Lu, C. Chen",
        venue: "Proc. ACM Multimedia (ACM MM), 2022",
        image: "/assets/images/lightweight.png",
        link: "https://arxiv.org/pdf/2111.12696",
      },
      {
        title: "Local Learning Matters: Rethinking Data Heterogeneity in Federated Learning",
        authors: "S. Gupta, Z. Sun, P. Wang, A. Bhuyan",
        venue: "Proc. IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2022",
        image: "/assets/images/local.png",
        link: "https://arxiv.org/pdf/2111.14213",
      },
      {
        title: "PaWLA: PPG-based Weight Lifting Assessment",
        authors: "A. Rahman, P. Wang, W. Wang, Y. Wang",
        venue: "Proc. IEEE International Performance, Computing, and Communications Conference (IPCCC), 2022",
        image: "/assets/images/PaWLA.gif",
        link: "https://ieeexplore.ieee.org/document/9894324",
      },
      {
        title: "PPGSign: Handwritten Signature Authentication using Wearable PPG Sensor",
        authors: "A. Rahman, Y Cao, X Wei, P. Wang, F Li, Y Wang",
        venue: "Proc. IEEE Wireless Communications and Networking Conference (WCNC), 2022",
        image: "/assets/images/ppgsign.gif",
        link: "https://ieeexplore.ieee.org/abstract/document/9771813",
      },
    ],
    "2021": [
      {
        title:
          "Who is in Control? Practical Physical Layer Attack and Defense for mmWave based Sensing in Autonomous Vehicles",
        authors: "Z. Sun, S. Balakrishnan, L. Su, A. Bhuyan, P. Wang, C. Qiao",
        venue: "IEEE Transactions on Information Forensics and Security, Vol.16, pp.3199-3214, April 2021",
        image: "/assets/images/Publication-1.gif",
        link: "#",
      },
      {
        title:
          "Joint Design of Communication, Wireless Energy Transfer, and Control for Swarm Autonomous Underwater Vehicles",
        authors: "H. Guo, Z. Sun, P. Wang",
        venue: "IEEE Transactions on Vehicular Technology, Vol.70, No.2, pp.1821-1835, February 2021",
        image: "/assets/images/Publication-2.gif",
        link: "#",
      },
      {
        title: "Acoustic Intelligent Surface System for Reliable and Efficient Underwater Communications",
        authors: "Z. Sun, H. Guo, P. Wang, I.F. Akyildiz",
        venue: "Proc. Int. ACM Conference on Underwater Networks and Systems (WUWNET 21), 2021",
        image: "/assets/images/acoustic.png",
        link: "https://dl.acm.org/doi/pdf/10.1145/3491315.3491324",
      },
      {
        title: "Sim-to-Real Transfer in Multi-agent Reinforcement Networking for Federated Edge Computing",
        authors: "P. Pinyoanuntapong, T. Pothuneedi, R. Balakrishnan, M. Lee, C. Chen, P. Wang",
        venue: "Proc. ACM/IEEE 6th Symposium on Edge Computing (SEC), 2021",
        image: "/assets/images/sim.gif",
        link: "https://ieeexplore.ieee.org/document/9708919",
      },
    ],
  }

  return (
    <div className="legacy-content">
      <div className="container">
        <Sidebar />
        <main className="content">
          <h1 className="section-title">Publications</h1>

          <div
            style={{
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              padding: "15px",
              borderRadius: "5px",
              marginBottom: "30px",
            }}
          >
            <strong>DISCLAIMER:</strong> Readers may view, browse, and/or download any material in this website for
            temporary use only, provided that this is used for noncommercial personal purposes only.
          </div>

          {Object.entries(publications).map(([year, pubs]) => (
            <div key={year} className="year-section">
              <button className="year-header" onClick={() => toggleYear(year)}>
                <span>{year}</span>
                <span>{collapsedYears[year] ? "+" : "-"}</span>
              </button>
              <div className={`year-content ${collapsedYears[year] ? "collapsed" : ""}`}>
                {pubs.map((pub, index) => (
                  <div key={index} className="publication">
                    <img src={pub.image || "/placeholder.svg"} alt={pub.title} className="publication-image" />
                    <div className="publication-details">
                      <h3>{pub.title}</h3>
                      <p>{pub.authors}</p>
                      <p>
                        <em>{pub.venue}</em>
                      </p>
                      {pub.link && pub.link !== "#" && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
