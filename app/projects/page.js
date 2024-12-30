import Image from "next/image";
import Link from "next/link";
import projects from "./projects.json";

export default function Projects() {
  let aosDelay = 0;
  return (
    <main>
      <section id="projects" className="bg-white">
        <p
          className="roboto-bold w-full text-center mx-auto text-black leading-tight pt-20 section-heading"
          style={{ maxWidth: 865 }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          Projects
        </p>
        <div className="projects-wrapper">
          {projects.map(({ id, name, img }) => {
            aosDelay += 150;
            return (
              <div
                className="project"
                key={id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay={aosDelay}
              >
                <Link href={`projects/${id}`}>
                  <div className="overflow-hidden relative group">
                    <div className="max-w-60 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                      <p className="text-2xl roboto-medium text-center">
                        {name}
                      </p>
                      <p className="text-sm text-center roboto-light group">
                        Lorem ipsum dolor sit.
                      </p>
                      <div className="bg-white mt-2 h-[2px] w-full"></div>
                    </div>
                    <div className="bg-black opacity-40 absolute z-10 object-cover w-full h-full group-hover:opacity-50 duration-200"></div>
                    <div className="w-full relative aspect-square group-hover:scale-105 ease-in duration-150">
                      <Image
                        src={img}
                        alt="lifting pic"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
