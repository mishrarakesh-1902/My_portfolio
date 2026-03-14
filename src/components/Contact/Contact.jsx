import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0mo6veo",  // Replace with your EmailJS Service ID
        "template_9u2qpk9",  // Replace with your EmailJS Template ID
        form.current,
        "uRjHxH7a-nri9pGQq"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setIsSubmitting(false);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSubmitting(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 pb-32 px-[5vw] lg:px-[15vw] relative"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          CONTACT
        </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto"
        >
          I’d love to hear from you—reach out for any opportunities or questions!
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-4 w-full max-w-lg bg-gray-900/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 relative z-10 group overflow-hidden"
      >
        {/* Glow behind form */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/0 via-fuchsia-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-fuchsia-600/5 group-hover:to-purple-600/10 blur-xl transition-all duration-700 -z-10"></div>
        
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Connect With Me <span className="ml-2 inline-block origin-bottom-right hover:animate-pulse">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500 resize-none"
            />
          </div>
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-4"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
