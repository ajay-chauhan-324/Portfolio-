
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import Swal from "sweetalert2";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields before submitting.",
        confirmButtonColor: "#8b5cf6",
      });
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting me. I'll get back to you soon.",
        confirmButtonColor: "#8b5cf6",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none focus:border-purple"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Ahmedabad,
                  <span className="text-purple"> Gujarat</span>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:imchauhanajay@gmail.com"
                  className="text-gray-400 hover:text-purple transition"
                >
                  imchauhanajay@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phone
                </h3>

                <a
                  href="tel:+916353277757"
                  className="text-gray-400 hover:text-purple transition"
                >
                  +91 63532 77757
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-sky-500 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-pink-500 hover:text-white transition duration-300"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

