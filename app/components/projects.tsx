import botion from "@/public/botion.webp"
import lingo from "@/public/lingo.webp"
import pepe from "@/public/pepe_co.webp"
import pokedex from "@/public/pokedex.webp"

import Image from "next/image";


export default function Projects() {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full p-3 flex justify-between items-center lg:w-5/6 lg:mx-auto">
        <h1 className="text-[40px] md:text-[65px] font-bold">Projects</h1>
        <div className=" py-2 pb-5 text-lg underline underline-offset-8">
          Contact Me
        </div>
      </div>
      <div className=" w-full h-full md:flex md:flex-wrap md:justify-evenly">
        <figure className=" w-full h-full my-5 bg-[#242424] shadow-lg shadow-blue-500 md:w-[45%]">
          <Image src={botion} alt="botion screenshot" />
          <figcaption className="h-full w-full text-center text-2xl p-3">
            Botion-Lp
          </figcaption>
          <div className="">
            <ul className="w-full text-lg flex justify-evenly p-3">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Convex</li>
            </ul>
            <div className=" py-2 pb-5 p-3 text-lg underline underline-offset-8">
              View Project
            </div>
          </div>
        </figure>
        <figure className=" w-full h-full my-5 bg-[#242424] shadow-lg shadow-blue-500 md:w-[45%]">
          <Image src={lingo} alt="botion screenshot" />
          <figcaption className="h-full w-full text-center text-2xl p-3">
            Lingo Academy
          </figcaption>
          <div className="">
            <ul className="w-full text-lg flex justify-evenly p-3">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
            </ul>
            <div className=" py-2 pb-5 p-3 text-lg underline underline-offset-8">
              View Project
            </div>
          </div>
        </figure>
        <figure className=" w-full h-full my-5 bg-[#242424] shadow-lg shadow-blue-500 md:w-[45%]">
          <Image src={pepe} alt="botion screenshot" />
          <figcaption className="h-full w-full text-center text-2xl p-3">
            Pepe Co.
          </figcaption>
          <div className="">
            <ul className="w-full text-lg flex justify-evenly p-3">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
            </ul>
            <div className=" py-2 pb-5 p-3 text-lg underline underline-offset-8">
              View Project
            </div>
          </div>
        </figure>
        <figure className=" w-full h-full my-5 bg-[#242424] shadow-lg shadow-blue-500 md:w-[45%]">
          <Image src={pokedex} alt="botion screenshot" />
          <figcaption className="h-full w-full text-center text-2xl p-3">
            Pokedex
          </figcaption>
          <div className="">
            <ul className="w-full text-lg flex justify-evenly p-3">
              <li>Astro</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
            </ul>
            <div className=" py-2 pb-5 p-3 text-lg underline underline-offset-8">
              View Project
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
