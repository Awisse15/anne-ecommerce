"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-pink-50 px-8 py-16">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12">
        {/* Left Side - Contact Details (no box) */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Contact Us</h2>
          <p className="mb-4">
            We'd love to hear from you! Reach out via the details below or send a message through the form.
          </p>
          <ul className="space-y-2">
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Email:</strong> craftedbylouisse.com</li>
            <li><strong>Address:</strong> 123 Flower Lane, Bloomtown, Philippines</li>
            <li><strong>Website:</strong> https://annelouisseechanes.my.canva.site/craftedbylouisse</li>
          </ul>
        </motion.div>

        {/* Right Side - Contact Form (in a box) */}
        <motion.div
          className="flex-1 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white rounded-full px-6 py-2 font-medium hover:bg-pink-700 transition w-fit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
