"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <nav>
            <div className="header-section">
              <div className="name-container">
                <Link href="/" className="name">
                  asya<br />tarabar
                </Link>
                <div className="sub-links">
                <a
  href="/about"
  rel="noopener noreferrer"
  className={pathname === "/about" ? "active-link" : ""}
>
  About
</a>
  <span className="separator">·</span>
  <a
    href="/cv"
    target="_blank"
    rel="noopener noreferrer"
    className={pathname === "/cv" ? "active-link" : ""}
  >
    CV
  </a>
  <span className="separator">·</span>
  <a href="mailto:asya.tarabar@yale.edu">
    Email
  </a>
  <span className="separator">·</span>
  <a
    href="https://www.linkedin.com/in/asya-tarabar-6a28372b8/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>
              </div>
            </div>
            <div className="middle-section">
              <table className="nav-table">
                <tbody>
                  <tr>
                    <td className="link-cell non-clickable">DESIGN PROJECTS</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/yale_ims"
                        className={`link ${
                          pathname === "/yale_ims" ? "active-link" : ""
                        }`}
                      >
                        YALE IMS
                      </Link>
                    </td>
                    <td className="descriptor-cell">WEBSITE</td>
                  </tr>
                  <tr>
                    <td className="link-cell no-border">
                      <Link
                        href="/sdh"
                        className={`link ${
                          pathname === "/sdh" ? "active-link" : ""
                        }`}
                      >
                        SDH
                      </Link>
                    </td>
                    <td className="descriptor-cell no-border">WEBSITE</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="no-border">&nbsp;</td>
                  </tr>
                  <tr>
                    <td className="link-cell non-clickable">ACADEMIC WORK</td>
                    <td></td>
                  </tr>
                  
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/food-truck-paradise"
                        className={`link ${
                          pathname === "/food-truck-paradise" ? "active-link" : ""
                        }`}
                      >
                        FOOD TRUCK PARADISE
                      </Link>
                    </td>
                    <td className="descriptor-cell">BRAND</td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/wired"
                        className={`link ${
                          pathname === "/wired" ? "active-link" : ""
                        }`}
                      >
                        WIRED
                      </Link>
                    </td>
                    <td className="descriptor-cell">FONT</td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/cruise-ships"
                        className={`link ${
                          pathname === "/cruise-ships" ? "active-link" : ""
                        }`}
                      >
                        CRUISE SHIPS
                      </Link>
                    </td>
                    <td className="descriptor-cell">BOOK</td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/mongooses"
                        className={`link ${
                          pathname === "/mongooses" ? "active-link" : ""
                        }`}
                      >
                        MONGOOSES
                      </Link>
                    </td>
                    <td className="descriptor-cell">POSTER</td>
                  </tr>
                  <tr>
                    <td className="link-cell no-border">
                      <Link
                        href="/tangerine"
                        className={`link ${
                          pathname === "/tangerine" ? "active-link" : ""
                        }`}
                      >
                        TANGERINE
                      </Link>
                    </td>
                    <td className="descriptor-cell no-border">FONT</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="no-border">&nbsp;</td>
                  </tr>
                  <tr>
                    <td className="link-cell non-clickable">FINE ART</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/portraits"
                        className={`link ${
                          pathname === "/portraits" ? "active-link" : ""
                        }`}
                      >
                        PORTRAITS
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/hands"
                        className={`link ${
                          pathname === "/hands" ? "active-link" : ""
                        }`}
                      >
                        HANDS
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="link-cell">
                      <Link
                        href="/still-lifes"
                        className={`link ${
                          pathname === "/still-lifes" ? "active-link" : ""
                        }`}
                      >
                        STILL LIFES
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="link-cell no-border">
                      <Link
                        href="/justine"
                        className={`link ${
                          pathname === "/justine" ? "active-link" : ""
                        }`}
                      >
                        JUSTINE
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer-section">
              <div className="footer-container">
                <img src="./footerlogo.png" alt="Logo" width="36" height="36" />
                <div className="footer-text">
                  <p>Designed & Coded by Asya Tarabar</p>
                  <p>Last Updated December 2024</p>
                </div>
              </div>
            </div>
          </nav>
          <div className="vertical-divider"></div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
