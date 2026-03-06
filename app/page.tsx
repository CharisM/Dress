import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#6B4E71]"> {/* outer purple like your screenshot */}

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tight">
            Chay Fashion
          </h1>

          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <Link href="/" className="hover:text-pink-600 transition">HOME</Link>
            <Link href="/about" className="hover:text-pink-600 transition">ABOUT</Link>
            <Link href="/contact" className="hover:text-pink-600 transition">CONTACT US</Link>
          </nav>

          <div className="flex items-center space-x-5">
            <button aria-label="Search" className="text-xl">🔍</button>
            <button aria-label="Cart" className="text-xl">🛒</button>
            <button aria-label="Account" className="text-xl">👤</button>
            {/* mobile menu button - you can expand later */}
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* HERO SECTION – matches your reference closely */}
      <section className="relative bg-pink-400 h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background image – woman with bags (replace with your actual image) */}
        <div className="absolute inset-0">
          <Image
            src="/woman-shopping-bags-pink-bg.jpg" // ← replace with your real image path
            alt="Woman holding shopping bags"
            fill
            className="object-cover object-right md:object-center brightness-95"
            priority
          />
        </div>

        {/* Overlay gradient to improve text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="max-w-lg text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              STYLIST PICKS <br />
              BEAT THE HEAT
            </h2>

            <button className="mt-8 px-8 py-4 bg-white text-black font-semibold text-lg rounded hover:bg-gray-100 transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 tracking-wide">
            Discover New Arrivals
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <Image
                    src={`/dress${i + 1}.jpg`}
                    alt={`Dress ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-medium">Summer Dress {i + 1}</p>
                  <p className="text-gray-600">$89.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-4">Chay Fashion</h3>
            <p className="text-sm text-gray-600">
              Premium summer styles curated by stylists.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Shop</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Order Tracking</li>
              <li>Delivery Info</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-pink-500"
              />
              <button className="bg-pink-500 text-white px-5 rounded-r hover:bg-pink-600">
                →
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} Chay Fashion. All rights reserved.
        </p>
      </footer>
    </div>
  );
}