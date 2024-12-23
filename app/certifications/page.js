import Image from "next/image";

export default function Certifications() {
  return (
    <main>
      {/* Second Section */}
      <section className="bg-white">
        <div className="certifications-section mx-auto">
          <div
            className="about-content w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">Our Achievements</h2>
            <p className="section-heading">Our ISO Certifications</p>
            <p className="section-body">
              Our company is certified and adheres to the highest standards of
              quality, environmental management, and information security. Below
              are some of the ISO certifications that we have achieved, ensuring
              our commitment to excellence.
            </p>
          </div>
          <div className="iso-certs">
            <div className="iso-cert">
              <div className="card">
                <div className="card-img relative aspect-square">
                  <Image
                    src="/img/cert-9001-2015.png"
                    alt="iso 9001:2015 logo"
                    fill
                    className="object-contain"
                    sizes="100%"
                    quality={35}
                  />
                </div>
                <div className="card-title"></div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="iso-cert">
              <div className="card">
                <div className="card-img"></div>
                <div className="card-title"></div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="iso-cert">
              <div className="card">
                <div className="card-img"></div>
                <div className="card-title"></div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
    </main>
  );
}
