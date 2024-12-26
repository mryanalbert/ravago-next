import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main>
      {/* Section */}
      <section id="contact" className=" border-b-4 border-white">
        <div className="fixed w-full" style={{ zIndex: -2 }}>
          <div className="next-img aspect-[1.33/1] object-cover h-[100vh]">
            <Image
              src="/img/IMG_1940.JPG"
              alt="in port"
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
        <div>
          <h1
            className="roboto-bold w-full text-center mx-auto text-white leading-tight pt-20 contact-us-heading"
            style={{ maxWidth: 865 }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Contact Us
          </h1>
          <div className="contact-section mx-auto">
            <div
              className="w-full h-full flex flex-col gap-8 company-details"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="address-info flex gap-7">
                <div className="icon">
                  <div className="bg-white rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="info-text space-y-3 w-72">
                  <p className="info-text-title text-2xl roboto-bold text-[#fecb00]">
                    Addresses
                  </p>
                  <p className="text-white">
                    <span className="roboto-bold">HEAD OFFICE</span> - 88 C3
                    Road, Kaunlaran Village, Caloocan City, Metro Manila 1409,
                    Philippines
                  </p>
                  <p className=" text-white">
                    <span className="roboto-bold">CEBU OFFICE</span> - F.
                    Zuellig Ave., North Reclamation Area, Subangdaku, Mandaue
                    City, Cebu
                  </p>
                </div>
              </div>
              <div className="phone-info flex gap-7">
                <div className="icon">
                  <div className="bg-white rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="info-text w-72">
                  <p className="info-text-title mb-3 text-2xl roboto-bold text-[#fecb00]">
                    Phones
                  </p>
                  <p className="text-white">+63 (939) 9372712</p>
                  <p className=" text-white">+63 (947) 9961204</p>
                  <p className="text-white">+63 (947) 9961205</p>
                  <p className=" text-white">+63 (917) 8695034</p>
                  <p className=" text-white">+63 (917) 5372140</p>
                  <p className=" text-white">+632 8981 6200</p>
                </div>
              </div>
              <div className="email-info flex gap-7">
                <div className="icon">
                  <div className="bg-white rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
                <div className="info-text space-y-3 w-72">
                  <p className="info-text-title text-2xl roboto-bold text-[#fecb00]">
                    Email
                  </p>
                  <p className="text-white">sales@ravago.com.ph</p>
                </div>
              </div>
            </div>
            <div
              className="w-full bg-white"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div className="py-10 px-14 contact-form-wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section */}

      <section className="map w-full h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.198835190338!2d120.9602095748736!3d14.644651685846949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5c8e9d153a3%3A0x847934ae46ccfdc4!2sRavago%20Equipment%20Rentals%2C%20Inc.!5e0!3m2!1sen!2sph!4v1735181420872!5m2!1sen!2sph"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
