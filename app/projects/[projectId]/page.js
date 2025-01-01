import { notFound } from "next/navigation";
import projects from "../projects.json";
import Image from "next/image";
import Link from "next/link";
import BackLink from "@/app/components/BackLink";

export default async function Project({ params }) {
  const { projectId } = await params;
  const result = projects.find((proj) => proj.id == projectId);

  if (result === undefined) {
    notFound();
    return;
  }

  return (
    <main>
      <section id="project" className="bg-white">
        <div className="project-wrapper">
          <div data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <BackLink />
            <div className="w-full relative h-[550px]">
              <Image
                src={result.img}
                alt="lifting pic"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="roboto-medium project-title">{result.name} Project</p>
          </div>

          <p
            className="project-content"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi ad
            laboriosam mollitia, assumenda dolorum amet harum voluptates tenetur
            culpa dicta ipsum cupiditate ea, facere ex aspernatur! Expedita,
            dolorem maxime nobis voluptatem laborum voluptates corrupti
            explicabo delectus ipsam maiores voluptate.
          </p>
        </div>
      </section>
    </main>
  );
}
