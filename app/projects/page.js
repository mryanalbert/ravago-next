import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <section id="projects" className="bg-white">
        <div className="projects-wrapper">
          {[1, 2, 3, 4].map((proj) => (
            <div className="project" key={proj}>
              <Link href={`projects/${proj}`}>
                <div className="overflow-hidden relative">
                  <div className="w-full relative aspect-square hover:scale-110 ease-in duration-150">
                    <div className="bg-black opacity-30 absolute z-10 object-cover w-full h-full"></div>
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
