import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-not-home">
        <div className="fixed w-full" style={{ zIndex: -2 }}>
          <div
            className="next-img aspect-[1.78/1] object-cover"
            style={{ height: "100vh" }}
          >
            <Image
              src="/img/proper_crane_pic.jpg"
              alt="Logo image"
              id="logo-light"
              fill
              className="object-cover"
              sizes="100%"
            />
          </div>
        </div>
        <div
          className="hero-overlay bg-black opacity-50 fixed top-0 start-0 object-cover w-full h-full"
          style={{ zIndex: -1 }}
        ></div>
        <div className="hero-content">
          <h1
            className="roboto-bold w-full text-center mx-auto leading-tight"
            style={{ maxWidth: 865 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            About Us
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
            <i className="bi bi-arrow-right me-1"></i> READ MORE
          </a>
        </div>
      </section>
      {/* Hero Section */}

      {/* Second Section */}
      <section className="bg-white">
        <div className="second-section-about mx-auto">
          <div
            className="about-content w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">Who We Are</h2>
            <p className="section-heading">About the Company</p>
            <p className="section-body">
              Ravago Equipment Rentals, Inc. (RERI) is a 100% Filipino owned
              corporation that was established in 1979. The company started out
              with earth moving and lifting equipment like bulldozers, loaders,
              graders, forklifts, truck mounted cranes and crawler type cranes.
              As the need for higher efficiency and capacity was required, RERI
              started importing truck-mounted cranes with lattice as well as
              hydraulic telescopic booms. In its 42 years of operation, RERI is
              one of the biggest crane rental companies in the Philippines. Also
              expanded its line of forklifts, man lifts, aerial platforms,
              excavators, generators and other heavy equipment.
              <br />
              <br />
              Asian Shipping Corporation, a sister company, has the largest
              fleet of landing crafts (LCT), tugboats and barges. The close
              teamwork between the two companies gives RERI easy access in the
              transport of its rental fleet to and from job-sites all over the
              7,100 islands of the Philippines.
              <br />
              <br />
              With the constant upgrading of equipment and the continuous
              training of personnel, you can be assured of the best service in
              the industry.
            </p>
          </div>
          <div className="w-full second-section-about-images flex flex-col gap-6">
            <div
              className="truck-img next-img aspect-[1.33/1]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="300"
            >
              <Image
                src="/img/mmexport1727219736007.jpg"
                alt="truck image"
                fill
                className="object-contain"
                sizes="100%"
                quality={35}
              />
            </div>
            <div
              className="truck-img next-img aspect-[1.33/1]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="500"
            >
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
      {/* Second Section */}

      {/* Third Section */}
      <section className="bg-gray-50">
        <div className="third-section-about mx-auto">
          <div className="w-full second-section-about-images flex flex-col gap-6">
            <div
              className="truck-img next-img aspect-[1.33/1]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Image
                src="/img/mmexport1727219736007.jpg"
                alt="truck image"
                fill
                className="object-contain"
                sizes="100%"
                quality={35}
              />
            </div>
            <div
              className="truck-img next-img aspect-[1.33/1]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="300"
            >
              <Image
                src="/img/mmexport1727219736007.jpg"
                alt="truck image"
                fill
                className="object-contain"
                sizes="100%"
                quality={35}
              />
            </div>
            <div
              className="truck-img next-img aspect-[1.33/1]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="300"
            >
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
          <div
            className="about-content w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">Our Values and Purpose</h2>
            <p className="section-heading">Our Mission</p>
            <p className="section-body">
              We are a Filipino company providing lifting and logistical
              solutions to our customers. We aspire to become part of the global
              community of companies recognized for quality and excellence of
              service while maintaining the lowest cost position relative to out
              service commitment. Above all, we recognize customer satisfaction
              as the guiding principle behind a sustainable business. We value
              our social, environmental and economic responsibilities in all out
              business undertakings. We aspire to grow, build our business,
              enhance shareholder value, and be a responsible partner in nation
              building and community development.
              <br />
              <br />
              To achieve our mission, we must:
              <br />
            </p>
            <ul className="list-disc ml-10 mt-3 mission-list">
              <li>
                Dedicate ourselves in understanding and fulfilling our
                customers’ needs with appropriate mix of service, price,
                reliability, safety, and awareness of how we affect our
                environment.
              </li>
              <li>
                Deliver friendly, professional service consistently through well
                trained and motivated employees.
              </li>
              <li>
                Employ planning and decision-making processes in our engagements
                providing clear direction and sense of purpose.
              </li>
              <li>
                Search continuously for improvement through innovation and the
                use of technology.
              </li>
              <li>
                Nurture an environment that rewards achievement, enthusiasm,
                team spirit which offers each person opportunities for personal
                development and growth.
              </li>
              <li>
                Pursue all tasks with the idea that our goals can be
                accomplished in a superior fashion. The evolution of our
                business into new services and markets, our products will be
                completely driven by our single-minded commitment to
                anticipating and meeting the changing needs of our customers.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Third Section */}
    </main>
  );
}
