export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <video
          muted
          autoPlay
          loop
          className="fixed w-full object-cover h-full"
          style={{ zIndex: -2 }}
        >
          <source src="/vid/ravago.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
    </main>
  );
}
