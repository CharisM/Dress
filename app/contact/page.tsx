// app/contact/page.tsx   (or pages/contact.tsx — both will work)

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app → send to backend / Formspree / EmailJS / etc.
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Optional: reset form
    // setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero / Banner */}
      <div className="relative h-80 md:h-96">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.jpg"           // ← replace with your actual image path
            alt="Hands holding phone"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-12">
        {/* Left - Form / Success message */}
        <div className="flex-1">
          {submitted ? (
            <div className="bg-white p-10 rounded-lg shadow-md text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Message sent. We&apos;ll contact you soon.
              </h2>
              <Link
                href="/"
                className="inline-block bg-purple-700 text-white px-8 py-3 rounded hover:bg-purple-800 transition"
              >
                GO BACK
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
                Get In Touch
              </h2>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-medium hover:bg-purple-800 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right - Contact Info */}
        <div className="md:w-80 lg:w-96 flex-shrink-0">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-700 mb-6">
              Visit Us
            </h3>
            <p className="text-gray-700 mb-2">
              UET Lahore, Punjab, Pakistan
            </p>
            <p className="text-gray-700 mb-2">
              Phone: +92 323 0989887
            </p>
            <p className="text-gray-700 mb-6">
              Email: bonjourpassion07@gmail.com
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600">
              You can get in touch with us on this provided email.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-auto">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="font-bold text-gray-800 mb-4">COMPANY INFO</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-purple-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Latest Posts
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-700">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-purple-700">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">HELP LINKS</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Order Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">USEFUL LINKS</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-700">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-4">GET IN THE KNOW</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
                />
                <button className="bg-purple-700 text-white px-5 rounded-r-lg hover:bg-purple-800">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            <p>© 2022 Chay Passion</p>
            <div className="flex justify-center gap-6 mt-3">
              <Image src="/visa.svg" alt="Visa" width={50} height={30} />
              <Image src="/mastercard.svg" alt="Mastercard" width={50} height={30} />
              <Image src="/paypal.svg" alt="PayPal" width={50} height={30} />
            </div>
            <div className="mt-4 space-x-4">
              <Link href="#" className="hover:text-purple-700">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-purple-700">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}