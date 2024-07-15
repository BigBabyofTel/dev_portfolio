import Image from "next/image";


import github from "@/public/github-l.svg";
import outlook from "@/public/outlook.svg";
import linkedin from "@/public/linkedin-l.svg";
import discord from "@/public/discord-l.svg";

export interface Contact {
  id: number;
  account: string;
  url: string;
  svgComponent: string;
}

export default function Header() {
  const contacts: Contact[] = [
    {
      id: 0,
      account: "GitHub",
      url: "https://github.com/BigBabyofTel",
      svgComponent: github,
    },
    {
      id: 1,
      account: "Outlook",
      url: "mailto:augustus.tb@outlook.com",
      svgComponent: outlook,
    },
    {
      id: 3,
      account: "LinkedIn",
      url: "https://www.linkedin.com/in/taugustusb",
      svgComponent: linkedin,
    },
    {
      id: 4,
      account: "Discord",
      url: "https://discordapp.com/users/1089614219600732160",
      svgComponent: discord,
    },
  ];

  return (
    <header className="w-full h-full flex justify-center md:flex-col">
      <section className=" bg-[#242424] w-2/3 flex flex-col justify-center items-center my-4 rounded-md shadow-lg shadow-blue-700 md:w-full md:flex-row md:justify-between">
        <h1 className=" text-center font-bold my-3 md:text-[32px] md:pl-4">
          T. Augustus Baker
        </h1>
        <aside className="flex flex-col items-center md:flex-row md:w-1/3">
          <div className=" w-full">
            <div className="flex items-center justify-center w-full my-2">
              <div className="pl-4">
                <a href={contacts[0].url}>
                  <Image src={github} alt="github" className="w-[63%]" />
                </a>
              </div>
              <div>
                <a href={contacts[1].url}>
                  <Image src={outlook} alt="outlook" className="w-3/5" />
                </a>
              </div>
              <div className="">
                <a href={contacts[2].url}>
                  <Image src={linkedin} alt="linkedin" className="w-2/3" />
                </a>
              </div>
              <div>
                <a href={contacts[3].url}>
                  <Image src={discord} alt="discord" className="w-2/3" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </header>
  );
}
