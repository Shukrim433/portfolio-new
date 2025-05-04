import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_af3847c", "template_u9sse9n", form.current, {
        publicKey: "m0WyYU63SZtOl-uRC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col  mt-32 xl:flex-row   font-custom w-full">
      {/* LEFT/TOP DIV: IMAGE */}
      <div
        className={`xl:w-[50%] bg-center bg-cover h-0 pt-[54.11%] bg-[url("/goodwillhunting.jpg")]`}
      ></div>

      {/* RIGHT/BOTTOM DIV: FORM */}
      <div className="w-full mt-10 xl:mt-0 xl:w-[50%]  flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl sm:6xl xl:text-7xl xl:pb-9">
          CONTACT ME<span className="text-red">.</span>
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 py-10 px-4 sm:px-10 md:px-16 border border-black rounded-lg"
        >
          <div className="flex flex-col gap-3">
            <label>Name</label>
            <input
              type="text"
              name="sender_name"
              className="pl-4 pr-16 py-2 border border-red rounded-lg bg-beige"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Email</label>
            <input
              type="email"
              name="sender_email"
              className="pl-4 pr-16 py-2 border border-red rounded-lg bg-beige"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Message</label>
            <textarea
              name="message"
              className="outline outline-1 px-5 py-8 bg-beige outline-red rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Send"
              className="cursor-pointer bg-red hover:bg-black border px-12 py-2 rounded-lg text-beige"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

/* 
<form
          action=""
          className="flex flex-col gap-8 py-10 px-4 sm:px-10 md:px-16 border border-black rounded-lg"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="pl-4 pr-16 py-2 border border-red rounded-lg bg-beige"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="px-16 py-2 border border-red rounded-lg bg-beige"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="outline outline-1 px-5 py-8 bg-beige outline-red rounded-lg"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-red hover:bg-black border px-12 py-2 rounded-lg text-beige">
              SEND
            </button>
          </div>
        </form> */
