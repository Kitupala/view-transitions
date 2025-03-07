"use client";

import Image from "next/image";

const Projects = () => {
  return (
    <div className=" w-screen h-full min-h-svh py-8 px-10 flex flex-col items-center justify-center">
      <div className="relative h-screen w-1/3">
        <Image
          src="/assets/alexander-krivitskiy.jpg"
          alt="Photo by Alexander Krivitskiy"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative h-screen w-1/3">
        <Image
          src="/assets/andrey-zvyagintsev.jpg"
          alt="Photo by Andrey Zvyagintsev"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative h-screen w-1/3">
        <Image
          src="/assets/christian-holzinger.jpg"
          alt="Photo by Chritsian Holzinger"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Projects;
