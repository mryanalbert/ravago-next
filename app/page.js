import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <video
          muted
          autoPlay
          loop
          className="fixed w-full object-cover h-dvh aspect-[1.77/1]"
          style={{ zIndex: -2 }}
          quality={50}
        >
          <source src="/vid/ravago.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="hero-overlay bg-black opacity-50 fixed top-0 start-0 object-cover w-full h-full"
          style={{ zIndex: -1 }}
        ></div>
        <div className="hero-content mt-16">
          <h1
            className="roboto-bold w-full text-center mx-auto leading-tight"
            style={{ maxWidth: 865 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            We Provide Best Construction Equipment For You
          </h1>
          <p
            className="mt-4"
            style={{ fontSize: 20 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Your trusted partner for construction, mining, and industrial
            equipment rentals.
          </p>
          <a
            href="#services"
            id="hero-btn"
            className="inline-block mt-10 roboto-bold"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <i className="bi bi-arrow-right me-1"></i> GET STARTED
          </a>
        </div>
      </section>
      {/* Hero Section */}

      {/* About Section */}
      <section id="about">
        <div className="lower-section mx-auto">
          <div
            className="about-content w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">About Us</h2>
            <p className="section-heading">Working Through Dirt & Dust</p>
            <p className="section-body">
              Ravago is the one-stop shop that takes away the headache in your
              logistics and lifting requirements. Established in 1979, Ravago
              Equipment Rentals, Inc. (RAVAGO) is a pioneer in the Philippines’
              crane lifting industry. With our extensive fleet of cranes,
              trucks, trailers, and other heavy equipment, we aim to provide
              prompt quality service combined with safe methods to satisfy our
              customers’ every lifting and transport need. Along with our sister
              company, Asian Shipping Corp. (ASC), we make it possible to
              provide a total solution service to any location in the
              Philippines.
            </p>
          </div>
          <div
            className="about-img w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <div className="truck-img next-img aspect-[1.33/1]">
              <Image
                src="/img/mmexport1727219736007.jpg"
                alt="truck image"
                fill
                className="object-contain"
                sizes="100%"
                quality={35}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}

      {/* Services Section */}
      <section id="services" className="bg-gray-50">
        <div
          id="services-wrapper"
          className="services-cards mx-auto bg-gray-50"
        >
          <div
            className="services-content"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">Our Services</h2>
            <p className="section-heading">Lorem ipsum dolor sit.</p>
            <p className="section-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, reprehenderit?
            </p>
          </div>
          <div
            className="services-card bg-white gap-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <div className="service-img">
              <div className="crane-img next-img aspect-square max-w-[100px]">
                <Image
                  src="/img/crane.png"
                  alt="lifting pic"
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="service-card-header">
              <p className="section-card-title roboto-bold">Lifting</p>
            </div>
            <div className="service-card-body">
              <p className="section-body mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ab ratione voluptatum quidem ad harum non
                consequuntur, minima explicabo praesentium.
              </p>
            </div>
          </div>
          <div
            className="services-card bg-white gap-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className="service-img">
              <div className="dumptruck-img next-img aspect-[1.94/1] max-w-[130px]">
                <Image
                  src="/img/dumptruck.png"
                  alt="transport pic"
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="service-card-header">
              <p className="section-card-title roboto-bold">Transport</p>
            </div>
            <div className="service-card-body">
              <p className="section-body mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ab ratione voluptatum quidem ad harum non
                consequuntur, minima explicabo praesentium.
              </p>
            </div>
          </div>
          <div
            className="services-card bg-white gap-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <div className="service-img">
              {/* <img
                src="/img/access.png"
                className="img-fluid d-block mx-auto"
                alt="access pic"
                style={{ width: "90px" }}
              /> */}
              <div className="next-img max-w-[90px] aspect-[1.38/1]">
                <Image
                  src="/img/access.png"
                  alt="access pic"
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="service-card-header">
              <p className="section-card-title roboto-bold">Access</p>
            </div>
            <div className="service-card-body">
              <p className="section-body mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ab ratione voluptatum quidem ad harum non
                consequuntur, minima explicabo praesentium.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
    </main>
  );
}
