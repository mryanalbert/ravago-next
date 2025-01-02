import Image from "next/image";

const serviceTitles = [
  "Lifting Machines",
  "Transport Machines",
  "Access Machines",
  "Others",
];

const services = {
  0: [
    "Crawler Crane",
    "Truck Mounted Crane",
    "Rough Terrain Crane",
    "Forklift",
    "Telehandler",
    "Boom Truck",
  ],
  1: [
    "Low-Bed Trailer",
    "High-Bed Trailer",
    "Self-Loader Truck",
    "Self-Propelled Trailer",
    "Vessel Deck Trailer",
    "Multi-Axle Modular Trailer",
  ],
  2: ["Manlift", "Articulated Manlift", "Scissor Lift"],
  3: ["Backhoe", "Generator Set", "Tower Light", "Goldhofer"],
};

export default function RentalServices() {
  return (
    <main>
      {/* Second Section */}
      <div className="bg-white">
        <div className="rental-services mx-auto">
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2 className="section-text">Sales Rentals</h2>
            <p className="section-heading">Our Rental Services</p>
            <p className="section-body">
              With our extensive fleet of cranes, trucks, trailers, and other
              heavy equipment, we aim to provide prompt quality service combined
              with safe methods to satisfy our customers’ every lifting and
              transport needs. Asian Shipping Corporation, a sister company, has
              the largest fleet of landing crafts (LCT), tugboats and barges.
              The close teamwork between the two companies gives Ravago easy
              access in the transport of its rental fleet to and from job-sites
              all over the 7,100 islands of the Philippines.
            </p>
          </div>
          {/* 4 columns */}
          <div
            className="rental-services-wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="150"
          >
            {serviceTitles.map((title, i) => (
              <div key={title} className="rental-service">
                <div className="">
                  <div className="next-img h-56">
                    <Image
                      src="/img/pexels-pixabay-532079.jpg"
                      alt="Rental Service Pic"
                      fill
                      className="object-cover"
                      sizes="100%"
                    />
                  </div>
                </div>
                <div className="service-card-header mt-7">
                  <p className="section-card-title roboto-bold">{title}</p>
                </div>
                <div className="service-card-body">
                  <ul className="section-body mt-0">
                    {services[i].map((ser) => (
                      <li key={ser} className="leading-loose">
                        - {ser}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Second Section */}
    </main>
  );
}
