"use client";
import Image from "next/image";

export default function Certifications() {
  const handleClick = (file) => {
    window.open(`/docs/${file}`, "_blank");
  };

  return (
    <main>
      {/* Second Section */}
      <section className="bg-white">
        <div className="certifications-section mx-auto">
          <div
            className="w-full"
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
          <div className="iso-certs w-full mx-auto mt-12 mb-12 max-w-[1000px]">
            <div
              className="iso-cert"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img next-img max-w-[200px] mx-auto aspect-square">
                  <Image
                    src="/img/cert-9001-2015.png"
                    alt="iso 9001:2015 logo"
                    fill
                    className="object-contain"
                    sizes="100%"
                  />
                </div>
                <div className="card-body mt-4 text-lg text-[#7a7a7a]">
                  Provision of lifting and transport services inclusive to the
                  rental of crane and support equipment such as high bed
                  trailer, low bed trailer, ballast trailer, and modular
                  trailer, including equipment operators and support staff such
                  as equipment mechanics.
                </div>
                <p
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={() => handleClick("ISO_9001_2015.pdf")}
                >
                  <a href="#">See Certificate {`>>`}</a>
                </p>
                <div className="card-footer mt-4 text-sm text-[#999999]">
                  <p>Issued by: Bureau Veritas</p>
                  <p>Date of Issuance: February 15, 2023</p>
                </div>
              </div>
            </div>
            <div
              className="iso-cert"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img next-img max-w-[200px] mx-auto aspect-square">
                  <Image
                    src="/img/cert-14001-2015.png"
                    alt="iso 14001:2015 logo"
                    fill
                    className="object-contain"
                    sizes="100%"
                  />
                </div>
                <div className="card-body mt-4 text-lg text-[#7a7a7a]">
                  Provision of lifting and transport services inclusive to the
                  rental of crane and support equipment such as high bed
                  trailer, low bed trailer, ballast trailer, and modular
                  trailer, including equipment operators and support staff such
                  as equipment mechanics.
                </div>
                <p
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={() => handleClick("ISO_14001_2018.pdf")}
                >
                  <a href="#">See Certificate {`>>`}</a>
                </p>
                <div className="card-footer mt-4 text-sm text-[#999999]">
                  <p>Issued by: Bureau Veritas</p>
                  <p>Date of Issuance: February 15, 2023</p>
                </div>
              </div>
            </div>
            <div
              className="iso-cert"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img next-img max-w-[200px] mx-auto aspect-square">
                  <Image
                    src="/img/cert-45001-2018.png"
                    alt="iso 45001:2018 logo"
                    fill
                    className="object-cover"
                    sizes="100%"
                  />
                </div>
                <div className="card-body mt-4 text-lg text-[#7a7a7a]">
                  Provision of lifting and transport services inclusive to the
                  rental of crane and support equipment such as high bed
                  trailer, low bed trailer, ballast trailer, and modular
                  trailer, including equipment operators and support staff such
                  as equipment mechanics.
                </div>
                <p
                  className="mt-4 text-blue-500 hover:underline"
                  onClick={() => handleClick("ISO_45001_2018.pdf")}
                >
                  <a href="#">See Certificate {`>>`}</a>
                </p>
                <div className="card-footer mt-4 text-sm text-[#999999]">
                  <p>Issued by: Bureau Veritas</p>
                  <p>Date of Issuance: February 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="verisita-logo next-img mt-12 aspect-[1/1.22] mx-auto max-w-[250px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <Image
              src="/img/bureau-veritas.png"
              alt="iso 9001:2015 logo"
              fill
              className="object-contain"
              sizes="100%"
              quality={35}
            />
          </div>
        </div>
      </section>
      {/* Second Section */}
    </main>
  );
}
