import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="/img/Logo-Ravago.png"
            alt="Ravago logo"
            fill
            className="object-contain" // This ensures the image doesn't stretch or crop, just fits within the container
            sizes="100%"
          />
        </div>
        <p>Your lifting and transport solutions provider.</p>

        <div className="icons">
          <a
            href="https://www.facebook.com/ravagocranes"
            target="_blank"
            style={{ fontSize: "2rem" }}
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a
            href="mailto:example@example.com"
            target="_blank"
            style={{ fontSize: "2rem" }}
          >
            <i className="bx bxs-envelope"></i>
          </a>
          <a
            href="https://www.youtube.com/@ravagocranesphilippines8822"
            target="_blank"
            style={{ fontSize: "2rem" }}
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <h4>Head Office</h4>
        <li>
          <i className="bx bx-current-location"></i> 88 C3 Road, Kaunlaran
          Village, Caloocan City, Metro Manila 1409, Philippines
        </li>
      </div>

      <div className="footer-content">
        <h4>Cellphone Nos.</h4>
        <li>
          <i className="bx bxs-phone"></i> +63 (939) 9372712
        </li>
        <li>
          <i className="bx bxs-phone"></i> +63 (947) 9961204
        </li>
        <li>
          <i className="bx bxs-phone"></i> +63 (947) 9961205
        </li>
        <li>
          <i className="bx bxs-phone"></i> +63 (917) 8695034
        </li>
        <li>
          <i className="bx bxs-phone"></i> +63 (917) 5372140
        </li>
      </div>

      <div className="footer-content">
        <h4>Telephone Nos.</h4>
        <li>
          <i className="bx bxs-phone"></i> +632 8981 6200
        </li>
      </div>
    </footer>
  );
}
