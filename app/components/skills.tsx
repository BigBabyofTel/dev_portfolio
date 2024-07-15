import html from "@/public/html-5.svg";
import css from "@/public/css-3.svg";
import js from "@/public/js.svg";
import ts from "@/public/typescript.svg";
import react from "@/public/react.svg";
import next from "@/public/next-js-svgrepo-com.svg";
import bootstrap from "@/public/bootstrap.svg";
import tailwind from "@/public/tailwind.svg";
import hono from "@/public/hono.svg";
import vite from "@/public/vite.svg";
import astro from "@/public/astro.svg";
import redux from "@/public/redux.svg";
import bun from "@/public/bun1.svg"
import Image from "next/image";

export default function Skills() {
  const skillSet = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "TypeScript",
      icon: ts,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Hono",
      icon: hono,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Astro",
      icon: astro,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Bun",
      icon:  bun
    },
  ];



  return (
    <article className="h-fit w-screen my-6  ">
      <section className="h-fit w-11/12 p-2 mx-auto">
        <div className="text-center grid gap-3 grid-col-2 grid-rows-7 md:w-full md:justify-items-center md:p-2 bg-[#242424] rounded-md shadow-lg shadow-blue-700">
            <section className="col-start-1 row-start-1 md:w-1/2">
                <figure><Image src={skillSet[0].icon} alt={skillSet[0].name}/></figure>
                <figcaption>{skillSet[0].name}</figcaption>
            </section>
            <section className="col-start-2 row-start-1 md:w-1/2">
                <figure><Image src={skillSet[1].icon} alt={skillSet[1].name}/></figure>
                <figcaption>{skillSet[1].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-2 md:w-1/2">
                <figure><Image src={skillSet[2].icon} alt={skillSet[2].name}/></figure>
                <figcaption>{skillSet[2].name}</figcaption>
            </section>
            <section className=" col-start-2 row-start-2 md:w-1/2">
                <figure><Image src={skillSet[3].icon} alt={skillSet[3].name}/></figure>
                <figcaption>{skillSet[3].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-3 md:w-1/2">
                <figure><Image src={skillSet[4].icon} alt={skillSet[4].name}/></figure>
                <figcaption>{skillSet[4].name}</figcaption>
            </section>
            <section className="col-start-2 row-start-3 md:w-1/2">
                <figure><Image src={skillSet[5].icon} alt={skillSet[5].name}/></figure>
                <figcaption>{skillSet[5].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-4 md:w-1/2">
                <figure><Image src={skillSet[6].icon} alt={skillSet[6].name}/></figure>
                <figcaption>{skillSet[6].name}</figcaption>
            </section>
            <section className="col-start-2 row-start-4 md:w-1/2">
                <figure><Image src={skillSet[7].icon} alt={skillSet[7].name}/></figure>
                <figcaption>{skillSet[7].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-5 md:w-1/2">
                <figure><Image src={skillSet[8].icon} alt={skillSet[8].name} className="w-3/4 mx-auto"/></figure>
                <figcaption className="pt-2">{skillSet[8].name}</figcaption>
            </section>
            <section className="col-start-2 row-start-5 md:w-1/2">
                <figure><Image src={skillSet[9].icon} alt={skillSet[9].name}/></figure>
                <figcaption>{skillSet[9].name}</figcaption>
            </section>
            <section className="col-start-2 row-start-6 md:w-1/2">
                <figure><Image src={skillSet[10].icon} alt={skillSet[10].name}/></figure>
                <figcaption>{skillSet[10].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-6 md:w-1/2">
                <figure><Image src={skillSet[11].icon} alt={skillSet[11].name}/></figure>
                <figcaption>{skillSet[11].name}</figcaption>
            </section>
            <section className="col-start-1 row-start-7 md:w-1/2">
                <figure><Image src={skillSet[12].icon} alt={skillSet[12].name}/></figure>
                <figcaption>{skillSet[12].name}</figcaption>
            </section>
        </div>
      </section>
    </article>
  );
}
