"use client";

import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const id = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const Key = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) return alert("Form is empty");
    emailjs.sendForm(id, templateId, form.current, Key).then(
      (result) => {
        form.current === null
          ? alert("Form is empty")
          : alert("Your message has been sent successfully!");
        console.log(result.status);
        form.current?.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className=" h-full w-full  flex flex-col justify-center lg:p-5">
      <div className=" bg-[#242424] shadow-lg md:flex md:flex-col md:justify-center md:w-11/12 md:mx-auto lg:p-2 lg:flex-row">
        <div className="h-full w-full flex flex-col items-center justify-center p-2">
          <h1 className="h-full w-full text-[40px] text-center lg:pb-5 lg:text-5xl">
            Contact
          </h1>
          <p className="h-full w-1/2 text-center lg:text-2xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I will get back to you as soon as possible.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          id="contact"
          className=" h-full w-full flex flex-col justify-between items-center my-4 text-white"
        >
          <Input
            placeholder="Name"
            required
            type="text"
            color="default"
            variant="underlined"
            style={{ borderStyle: "none", color: "white" }}
            className="m-1 md:w-1/2 text-white"
          />
          <Input
            placeholder="Email"
            required
            variant="underlined"
            style={{ borderStyle: "none", color: "white" }}
            className="m-1 md:w-1/2"
          />
          <Textarea
            placeholder="Enter your Message"
            required
            style={{ borderStyle: "none", color: "white" }}
            variant="underlined"
            className="m-1 md:w-1/2"
          />

          <div className="">
            <div className=" py-2 pb-5 p-3 text-lg underline underline-offset-8">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
