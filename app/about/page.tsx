import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-2xl font-serif italic">Chay Passion</h1>

        <ul className="flex gap-6 text-sm font-medium items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">HOME</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">CONTACT US</Link>
          </li>
          <li>
            <Link href="/search" className="text-xl text-black">🔍</Link>
          </li>
        </ul>
      </nav>

      {/* About Intro */}
      <section className="text-center px-10 py-16">
        <h1 className="text-4xl font-bold mb-6">About Chay Passion</h1>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Chay Passion is an online fashion platform designed to help people
          discover stylish and trendy clothing. Our goal is to provide
          fashionable outfits that allow customers to express their personality
          and confidence through style.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 px-16 py-10">

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide high-quality fashion products that are
            affordable, stylish, and accessible for everyone. We aim to make
            online shopping simple, convenient, and enjoyable.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to become a trusted online fashion store where people
            can easily explore modern clothing trends and confidently express
            their unique style.
          </p>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Trendy Fashion</h3>
            <p className="text-gray-600">
              We provide modern and stylish clothing inspired by the latest
              fashion trends.
            </p>
          </div>

          <div className="bg-white p-8 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Affordable Prices</h3>
            <p className="text-gray-600">
              Our products are designed to be both fashionable and affordable
              for everyone.
            </p>
          </div>

          <div className="bg-white p-8 shadow rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Easy Shopping</h3>
            <p className="text-gray-600">
              Our platform is built to provide a smooth and convenient online
              shopping experience.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 px-16 py-10">

        <div className="grid grid-cols-4 gap-10 text-sm">

          <div>
            <h3 className="font-semibold mb-3">COMPANY INFO</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Latest Posts</li>
              <li>Contact Us</li>
              <li>Shop</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">HELP LINKS</h3>
            <ul className="space-y-2">
              <li>Tracking</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>Special Offers</li>
              <li>Gift Cards</li>
              <li>Advertising</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">GET IN THE KNOW</h3>

            <div className="flex border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1"
              />
              <button className="ml-2">➤</button>
            </div>

          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-xs flex justify-between">
          <p>© 2026 Chay Passion</p>

          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

      </footer>

    </div>
  );
}