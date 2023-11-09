import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ThankYou from "../components/ThankYou";

const ContactPage = ({ isDarkMode }) => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .send(
          "service_ljwgc18",
          "template_i0vlv1e",
          formData,
          "NlTccOKLc594097u5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setSubmitted(true);

            // Reset the form and state after 5 seconds
            setTimeout(() => {
              setFormData({});
              setDone(false);
              setNotDone(false);
              setSubmitted(false);
            }, 8000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="-mb-16">
      <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-3xl xl:leading-tight font-bold text-center mt-8 ">
        <span className="yellow">Contact</span> Me
      </h1>
      <p className="py-2 text-center text-gray-500 -mb-20 md:text-xl ">
        For any queries or collaboration :)
      </p>
      <div className={"contact-container p-4 md:justify-center items-center"}>
        <div className={`contact-card ${isDarkMode ? "bg-black" : ""}`}>
          {!submitted ? (
            <div className="">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  className={`bg-white p-2 mb-2 ${
                    isDarkMode ? "text-black" : ""
                  }`}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="reply_to"
                  className={`bg-white p-2 mb-2 ${
                    isDarkMode ? "text-black" : ""
                  }`}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <textarea
                  style={{ resize: "none" }}
                  id="des"
                  name="message"
                  className={`bg-white p-2 mb-2 ${
                    isDarkMode ? "text-black" : ""
                  }`}
                  placeholder="Message"
                  onChange={handleChange}
                />
                <span
                  className={`text-red-500 ${isDarkMode ? "text-white" : ""} ${
                    notDone ? "block" : "hidden"
                  }`}
                >
                  Please, fill all the input fields.
                </span>
                <button
                  type="submit"
                  className={`bg-yellow-500 text-white p-2 mt-2 ${
                    done ? "bg-yellow-400 cursor-not-allowed" : ""
                  }`}
                  disabled={done}
                >
                  Send
                </button>
                <span
                  className={`text-green-500 ${
                    isDarkMode ? "text-black" : ""
                  } ${done ? "block" : "hidden"}`}
                >
                  Thanks for contacting me!
                </span>
              </form>
            </div>
          ) : (
            <ThankYou />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
