"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "boxicons/css/boxicons.min.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, content: "Home", path: "/" },
  { id: 2, content: "About Us", path: "/about" },
  { id: 3, content: "Certifications", path: "/certifications" },
  { id: 4, content: "Projects", path: "/projects" },
  { id: 5, content: "Services", path: "/services" },
  { id: 6, content: "Careers", path: "/careers" },
  { id: 7, content: "Contact", path: "/contact" },
];

export default function Header() {
  const [isNavChecked, setIsNavChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [navLinkIsScrolledForHome, setNavLinkIsScrolledForHome] =
    useState(false);

  const pathname = usePathname();

  useEffect(() => {
    AOS.init();

    function toggleNavbarBackground() {
      const navbar = document.querySelector("header");
      let links = [...navbar.querySelectorAll("nav ul li a")];

      const screenWidth = window.innerWidth;

      if (window.scrollY > 30) {
        setIsScrolled(true);

        links.forEach((link) => {
          if (screenWidth > 1080) {
            setNavLinkIsScrolledForHome(true);
            // link.classList.add("a-scrolled"); // Set color to black
          } else {
            setNavLinkIsScrolledForHome(false);
            // link.classList.remove("a-scrolled");
          }
        });
      } else {
        setIsScrolled(false);

        links.forEach((link) => {
          setNavLinkIsScrolledForHome(false);
          // link.classList.remove("a-scrolled");
        });
      }
    }

    // Function to toggle the visibility of the scroll-to-top button
    function toggleScrollToTopButton() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    }

    // Listen for the scroll event and call the function
    window.addEventListener("scroll", () => {
      toggleNavbarBackground();
      toggleScrollToTopButton();
    });

    window.addEventListener("resize", toggleNavbarBackground);

    toggleNavbarBackground();

    // Cleanup event listeners to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", toggleNavbarBackground);
      window.removeEventListener("resize", toggleNavbarBackground);

      AOS.refresh();
    };
  }, []);

  const hideNavbar = (e) => setIsNavChecked(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeLinkClass = (path) => {
    return pathname === path ? "active roboto-medium" : "";
  };

  const navLinkScrolledClass = () => {
    if (pathname === "/") {
      if (navLinkIsScrolledForHome) {
        return "a-scrolled";
      }
      return "";
    } else {
      return "a-scrolled";
    }
  };

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

      {showScrollToTop && (
        <button
          id="scrollToTopBtn"
          className="scroll-to-top-btn"
          style={{ padding: "12px 10px" }}
          onClick={handleScrollToTop}
        >
          <i className="bx bx-up-arrow-alt text-4xl font-bold text-center block"></i>
        </button>
      )}

      <header
        className={`
          ${isScrolled && "scrolled"}
          ${
            pathname === "/"
              ? "fixed"
              : "sticky shadow-[0_1px_1px_rgba(90,90,90,0.2)]"
          }
          ${pathname === "/" && !isScrolled ? "bg-transparent" : "bg-white"}
        `}
      >
        <div className="logo">
          {!isScrolled && pathname === "/" ? (
            <Image
              src="/img/Logo-Ravago.png"
              alt="Logo image"
              id="logo-light"
              fill
              className="object-contain"
              sizes="100%"
              priority
            />
          ) : (
            <Image
              src="/img/Logo-Ravago black.png"
              alt="Logo image"
              id="logo-dark"
              fill
              className="object-contain"
              sizes="100%"
              priority
            />
          )}
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
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={`
                  ${activeLinkClass(link.path)}
                  ${navLinkScrolledClass()}
                `}
                  onClick={hideNavbar}
                >
                  {link.content}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <label htmlFor="nav_check" className="hamburger">
          <div
            className={
              !isScrolled && pathname === "/"
                ? "hamburger-not-scrolled"
                : "hamburger-scrolled"
            }
          ></div>
          <div
            className={
              !isScrolled && pathname === "/"
                ? "hamburger-not-scrolled"
                : "hamburger-scrolled"
            }
          ></div>
          <div
            className={
              !isScrolled && pathname === "/"
                ? "hamburger-not-scrolled"
                : "hamburger-scrolled"
            }
          ></div>
        </label>
      </header>
    </>
  );
}
