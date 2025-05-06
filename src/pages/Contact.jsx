import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formState.message.length < 30) {
      return toast.error("Message is too short.");
    }

    emailjs
      .sendForm("service_af3847c", "template_u9sse9n", form.current, {
        publicKey: "m0WyYU63SZtOl-uRC",
      })
      .then(
        () => {
          setFormState({
            sender_name: "",
            sender_email: "",
            message: "",
          });
          toast.success("Sent! I'll get back to you shortly.");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col  mt-32 xl:flex-row pb-10 font-custom w-full">
      {/* LEFT/TOP DIV: IMAGE */}
      <div
        className={`flex bg-red items-center justify-center p-20 xl:w-[50%]`}

      > <img src="/Atonement2.jpeg" alt="" /></div>

      {/* RIGHT/BOTTOM DIV: FORM */}
      <div className="w-full xl:mt-0 xl:w-[50%]  flex flex-col gap-6 items-center justify-center md:pt-8">
        <h1 className="text-4xl mt-10 lg:my-0 py-10 sm:text-6xl xl:text-7xl xl:py-0 xl:pb-10 ">
          CONTACT ME<span className="text-red">.</span>
        </h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 py-10 px-8 sm:px-10 md:px-14 xl:rounded-2xl border border-red bg-beige rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <label>Name</label>
            <input
              type="text"
              name="sender_name"
              className="pl-4 pr-12 md:pr-20 xl:px-24 py-2 border border-red rounded-lg bg-beige"
              value={formState.sender_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Email</label>
            <input
              type="email"
              name="sender_email"
              className="pl-4 pr-12 md:pr-20 xl:px-24 py-2 border border-red rounded-lg bg-beige"
              value={formState.sender_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Message</label>
            <textarea
              name="message"
              className="outline outline-1 px-5 py-8 bg-beige outline-red rounded-lg"
              value={formState.message}
              onChange={handleChange}
              required
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
