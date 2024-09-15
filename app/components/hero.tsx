import Image from "next/image";
import avatar from "@/public/avatar.webp";

export default function Hero() {
  return (
    <main className=" w-full mx-auto rounded-md md:my-3  md:flex md:justify-evenly md:items-center lg:h-[500px]">
      <figure className=" mx-auto my-4 w-1/2 md:w-1/4 lg:w-1/6">
        <Image
          src={avatar}
          alt="avatar profile picture"
          className="w-3/4 mx-auto md:w-full "
        />
      </figure>
      <div className="bg-[#242424] shadow-lg shadow-blue-700 md:h-fit md:w-2/3 md:mr-3 lg:w-1/2 lg:mr-10">
        <section className="flex flex-col items-center ">
          <div className="w-full text-center m-1 font-bold text-[40px] p-1">
            <h2 className="">Nice to meet you!</h2>
            <h2>
              {" "}
              I&apos;m{" "}
              <span className="underline underline-offset-4 decoration-yellow-400">
                T. Augustus Baker
              </span>
            </h2>
          </div>
          <div className="text-center p-4 my-2">
            <p>
              I&apos;m American based in Cairo. An English teacher aspiring to
              be a Web Developer. I hope to work together to make your web apps
              enjoyable.
            </p>
          </div>
          <div className=" py-2 pb-5 underline underline-offset-4">
            Contact Me
          </div>
        </section>
      </div>
    </main>
  );
}
