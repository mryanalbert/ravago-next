"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isNavChecked, setIsNavChecked] = useState(false);
  console.log(isNavChecked);

  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init();

    // Get the navbar element
    const navbar = document.querySelector("header");
    let links = navbar.querySelectorAll("nav ul li a");
    links = [...links];

    const hamburgerDivs = document.querySelectorAll(".hamburger div");
    const logoLight = document.querySelector("#logo-light");
    const logoDark = document.querySelector("#logo-dark");

    // Function to check scroll position and toggle the background class
    function toggleNavbarBackground() {
      const screenWidth = window.innerWidth;
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled"); // Add the 'scrolled' class when scrolling
        links.forEach((link) => {
          if (screenWidth > 1080) {
            link.classList.add("a-scrolled"); // Set color to black
          } else {
            link.classList.remove("a-scrolled");
          }
        });

        logoLight.classList.add("hidden");
        logoDark.classList.remove("hidden");

        hamburgerDivs.forEach((div) => {
          div.classList.add("hamburger-scrolled");
          div.classList.remove("hamburger-not-scrolled");
        });
      } else {
        navbar.classList.remove("scrolled"); // Remove the 'scrolled' class when at the top

        links.forEach((link) => {
          link.classList.remove("a-scrolled");
        });

        logoLight.classList.remove("hidden");
        logoDark.classList.add("hidden");

        hamburgerDivs.forEach((div) => {
          div.classList.remove("hamburger-scrolled");
          div.classList.add("hamburger-not-scrolled");
        });
      }
    }

    // Listen for the scroll event and call the function
    window.addEventListener("scroll", toggleNavbarBackground);
    window.addEventListener("resize", toggleNavbarBackground);

    // Initial check to handle the case when the page is loaded
    toggleNavbarBackground();

    // Get the button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
      // When the user scrolls down 200px from the top of the document, show the button
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      };

      // When the user clicks the button, scroll to the top of the document
      scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    // Cleanup event listeners to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", toggleNavbarBackground);
      window.removeEventListener("resize", toggleNavbarBackground);

      AOS.refresh();
    };
  }, []);

  return (
    <>
      <div
        id="overlay"
        style={{
          zIndex: 999,
          position: "fixed",
          backgroundColor: "black",
          opacity: 0.5,
          height: "100vh",
          width: "100%",
          display: isNavChecked ? "block" : "none",
        }}
        onClick={(e) => setIsNavChecked(false)}
      ></div>
      <button
        id="scrollToTopBtn"
        className="scroll-to-top-btn"
        style={{ padding: "12px 10px" }}
      >
        <i className="bx bx-up-arrow-alt text-4xl font-bold text-center block"></i>
      </button>
      <header>
        <div className="logo">
          <Image
            src="/img/Logo-Ravago.png"
            alt="Logo image"
            id="logo-light"
            fill
            className="object-contain"
            sizes="100%"
          />

          <Image
            src="/img/Logo-Ravago black.png"
            alt="Logo image"
            id="logo-dark"
            fill
            className="hidden object-contain"
            sizes="100%"
          />
        </div>
        <input
          type="checkbox"
          id="nav_check"
          onChange={(e) => setIsNavChecked((prev) => !prev)}
          checked={isNavChecked}
          hidden
        />

        <nav>
          <ul>
            <li>
              <Link
                href="/"
                className={pathname == "/" ? "active roboto-medium" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname == "/about" ? "active roboto-medium" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/certifications"
                className={
                  pathname == "/certifications" ? "active roboto-medium" : ""
                }
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={
                  pathname == "/projects" ? "active roboto-medium" : ""
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/rental-services"
                className={
                  pathname == "/rental-services" ? "active roboto-medium" : ""
                }
              >
                Rental Services
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={pathname == "/careers" ? "active roboto-medium" : ""}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname == "/contact" ? "active roboto-medium" : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </header>
    </>
  );
}
