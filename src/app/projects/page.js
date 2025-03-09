import React from "react";
import ParallaxImage from "@/app/components/ParallaxImage";

const Projects = () => {
  return (
    <div className="parallax">
      <section className="hero">
        <div className="img">
          <ParallaxImage
            src="/assets/mon-trujillo.jpg"
            alt="Photo by Mon Trujillo"
          />
        </div>

        <div className="hero-title z-10">
          <h2 className="~text-5xl/7xl tracking-tighter">
            Cultural Memento Mori
          </h2>
        </div>
      </section>

      <section className="projects">
        <div className="img">
          <ParallaxImage
            src="/assets/anita-jankovic.jpg"
            alt="Photo by Anita Jankovic"
          />
        </div>

        <div className="col projects-cover">
          <div className="img">
            <ParallaxImage src="/assets/roger-ce.jpg" alt="Photo by Roger Ce" />
          </div>
        </div>

        <div className="col projects-list">
          <div className="project">
            <h3 className="~text-4xl/6xl tracking-tighter">
              Día de los Muertos
            </h3>
            <p>
              The series employs dramatic lighting techniques against textured
              backdrops to create a somber yet reverent atmosphere.
            </p>
          </div>
          <div className="project">
            <h3 className="~text-4xl/6xl tracking-tighter">
              "In Motion" Exhibition
            </h3>
            <p>
              The chiaroscuro effect highlights both the delicate face painting
              and the intricate patterns of the veils and fabrics, creating
              visual depth that draws viewers into a contemplation of life's
              impermanence.
            </p>
          </div>
          <div className="project">
            <h3 className="~text-4xl/6xl tracking-tighter">Circumstances</h3>
            <p>
              The project has been exhibited in galleries across three cities
              and featured in publications exploring contemporary
              interpretations of traditional cultural ceremonies.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="col intro">
          <p>
            This portrait series explores the intersection of cultural
            traditions and mortality through striking Día de los
            Muertos-inspired imagery. Each subject is meticulously styled with
            traditional calavera makeup while adorned in antique textiles that
            celebrate heritage and remembrance.
          </p>
        </div>

        <div className="col portrait">
          <div className="portrait-container">
            <div className="img">
              <ParallaxImage
                src="/assets/jelena-kostic.jpg"
                alt="Photo by Jelena Kostic"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="img">
          <ParallaxImage src="/assets/xxx_stas.jpg" alt="Photo by Xxx Stas" />
        </div>

        <div className="banner-copy">
          <p className="uppercase">Commercial Campaign</p>
          <h3 className="~text-4xl/6xl tracking-tighter uppercase">
            Sustainable Fashion
          </h3>
          <p className="max-w-4xl my-8">
            A collaborative project with emerging eco-conscious designers,
            highlighting their commitment to ethical production. The visual
            narrative follows materials from source to finished product,
            emphasizing craftsmanship and sustainability through intimate detail
            shots and editorial compositions.
          </p>
          <button className="uppercase font-semibold bg-slate-100/50 text-black rounded-md px-4 py-2">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};
export default Projects;
