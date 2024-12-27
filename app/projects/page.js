import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="bg-white">
        <h1
          className="roboto-bold w-full text-center mx-auto text-black leading-tight pt-20 contact-us-heading"
          style={{ maxWidth: 865 }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          Projects
        </h1>
        <div
          className="h-1 w-72 bg-[#fecb00] mx-auto"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        ></div>
        <div className="projects-wrapper">
          {[1, 2, 3, 4].map((proj) => (
            <div className="project" key={proj}>
              <Link href={`projects/${proj}`}>
                <div className="overflow-hidden relative">
                  <div className="bg-black opacity-30 absolute z-10 object-cover w-full h-full"></div>
                  <div className="w-full relative aspect-square hover:scale-110 ease-in duration-150">
                    <Image
                      src="/img/IMG_1940.JPG"
                      alt="lifting pic"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
