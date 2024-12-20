"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="overlay"
        style={{
          zIndex: 999,
          position: "fixed",
          backgroundColor: "black",
          opacity: 0.5,
          height: "100%",
          width: "100%",
          display: "none",
        }}
      ></div>
      <button
        id="scrollToTopBtn"
        className="scroll-to-top-btn"
        style={{ padding: "12px 10px" }}
      >
        <i className="bx bx-up-arrow-alt fs-1 fw-bolder text-center d-block"></i>
      </button>
      <header>
        <div className="logo">
          <Image
            src="/img/Logo-Ravago.png"
            alt="log image"
            id="logo-light"
            width={200} // Set the width
            height={0} // Set height to 0 so it adjusts automatically based on aspect ratio
            priority
          />
          <Image
            src="/img/Logo-Ravago black.png"
            alt="log image"
            id="logo-dark"
            className="hidden"
            width={0} // Set the width
            height={0} // Set height to 0 so it adjusts automatically based on aspect ratio
            priority
          />
        </div>
        <input type="checkbox" id="nav_check" hidden />
      </header>
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={`${pathname == "/" ? "active roboto-medium" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname == "/about" ? "active roboto-medium" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/certifications"
              className={`${
                pathname == "/certifications" ? "active roboto-medium" : ""
              }`}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                pathname == "/projects" ? "active roboto-medium" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/rental-services"
              className={`${
                pathname == "/rental-services" ? "active roboto-medium" : ""
              }`}
            >
              Rental Services
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className={`${
                pathname == "/careers" ? "active roboto-medium" : ""
              }`}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname == "/contact" ? "active roboto-medium" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
