import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className="navbar navbar-expand-lg bg-body-white fixed-top bg-white">
        <div className="container-fluid">
          <div className="Epoll_img_navbar">
          </div>
          {/* <a className="navbar-brand" href="#">E-poll</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="lp_textdiv gap-5">
        <div className="lp_flex_div">
          <div className="lp_first_div">
            <div className="text-white">
              <h1>Enhance your voting experience with E-poll</h1>
              <p>It's secure, transparent, and easy to use. Make your vote count effortlessly!</p>
              <div>
                <button className="btn btn-success" style={{ backgroundColor: "#228B22" }}>Vote Now</button>
              </div>
            </div>
          </div>
          <div className="lp_second_div">

          </div>
        </div>
      </div>

      <div>
        <div className="lp_Epoll_movedown mx-1 mx-sm-5">
          <div className="lp_Epoll_intro">
            <h1 style={{ fontSize: "50px" }} className="">Transform your decision-making process with E-poll</h1>
          </div>
          <div className="lp_Epoll_ptag">
            <p>
              modern, secure, and effective. Upgrade from manually counting ballots to an online election system, ensuring the integrity of your vote. Embrace the future of voting with confidence!
            </p>
          </div>
        </div>
      </div>

      <div className="lp_hover_page">
        <div className="lp_inner_res gap-4">
          <div className="card-container ">
            <div className="card2">
              <div className="front-content">
                <div>

                  <div className="lp_imgone">

                  </div>
                  <div className="text-center">
                    <p>Secure</p>
                  </div>
                </div>
              </div>
              <div className="content">
                {/* <p className="heading">Card Hover</p> */}
                <p>
                  E-poll ensures your vote is confidential, tamper-proof, and accurately counted. With top-notch encryption and authentication, you can trust your vote is secure. Make your voice heard with E-poll.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container mt-4 mt-sm-0">
            <div className="card2">
              <div className="front-content">
                <div>

                  <div className="lp_imgtwo">

                  </div>
                  <div className="text-center">
                    <p>Import Ballot & Voters</p>
                  </div>
                </div>
              </div>
              <div className="content">
                {/* <p className="heading">Card Hover</p> */}
                <p>
                  Save time with E-poll by importing your voters and ballots from an Excel spreadsheet or CSV file. Our streamlined process makes setting up your election quick and easy, ensuring a smooth and efficient voting experience.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container mt-4 mt-sm-0">
            <div className="card2">
              <div className="front-content">
                <div>

                  <div className="lp_imgthree">

                  </div>
                  <div className="text-center">
                    <p>Results Tabulation</p>
                  </div>
                </div>
              </div>
              <div className="content">
                {/* <p className="heading">Card Hover</p> */}
                <p>
                  E-poll automatically calculates election results and presents them with beautiful charts, making it easy to visualize and understand the outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lp_bg_cover_color">
        <div className="custom-shape-divider-bottom-1720443896">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="lp_inner_bg_text">
          <div className="lp_inner_width_text p-4">
            <h1 className="fw-bold lp_h1_styling">Election security you can rely on</h1>
            <p>Our E-poll security measures protect you, your data, and your organization against risk.</p>
            <div className="d-flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div className="mx-1">
                <p>
                  Our e-poll security measures protect your data and organization. Ensure vote integrity with robust auditing tools and eliminate double voting and fraud through closed voting events for trustworthy decision-making.</p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div className="mx-1">
                <p>
                  Our e-poll security measures protect you, your data, and your organization against risk. Ensure vote integrity with our robust auditing tools that demonstrate an accountable voting process.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lp_inner_bg_color">

        </div>
      </div>

      <div className="About_Epoll_div ">
        <div className="First_Epoll_about_div">
        </div>
        <div className="Second_Epoll_about_div shadow-lg">
          <div className="mx-3">
            <h2>Why Choose Us</h2>
          </div>
          <div className="mx-3">
            <p>
              E-poll offers a secure, user-friendly, and efficient voting experience. Our platform features advanced encryption for tamper-proof voting and an intuitive interface for easy voter and ballot import from Excel or CSV files. We provide automated, transparent results with clear charts and ensure accessibility from any device, anywhere in Nigeria. Supported by a dedicated team, E-poll guarantees a reliable and cost-effective solution. Choose E-poll for a modern, trustworthy, and seamless voting process.
            </p>
          </div>
          <div className="mx-3">
            <button className="btn btn-success" style={{ backgroundColor: "#228B22" }}>Read-more</button>
          </div>
        </div>
      </div>


      <div className="footer_lp mt-5">
        <div className="footer_lp_one">
          <div className="Epoll_img_navbar">
          </div>
          <div className="mx-4">
            <p >
              E-poll security measures protect your data and organization, ensuring vote integrity and preventing fraud. We're dedicated to empowering communities and driving positive change through engagement and advocacy.
            </p>
          </div>
        </div>
        <div className="footer_lp_two">
          <div>
            <h2>Contact Us</h2>
          </div>
          <div>
            <ul>
              <li>
                <a >Email: info@epoll.org</a>
              </li>
              <li>
                <a >Phone: (+234) 265-3434</a>
              </li>
              <li>
                <a >Address: No 12, E-poll Street, Abuja, Ogbomosho
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_lp_three">
          <div>
            <h2>Follow Us</h2>
          </div>
          <div>
            <a href="#">Facebook
            </a>
            <a href="#" className="mx-2">Instragram
            </a>
            <a href="#" className="mx-2">
            Twitter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
