import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage: "url('/bgpic.jpg')"
      }}
    >

<nav className="flex justify-between items-center px-10 py-4 bg-white/80">
  <h1 className="text-2xl font-serif italic">Chay Passion</h1>

  <ul className="flex gap-6 text-sm font-medium items-center">

    <li>
      <Link href="/" className="text-blue-600">
        HOME
      </Link>
    </li>

    <li>
      <Link href="/about">
        ABOUT
      </Link>
    </li>

    <li>
      <Link href="/contact">
        CONTACT US
      </Link>
    </li>

    
    <li>
      <Link href="/search">
        <button className="text-black text-xl hover:opacity-70">
          🔍
        </button>
      </Link>
    </li>

  </ul>
</nav>

      <div className="flex items-center h-[70vh] px-16">
        <div className="text-white max-w-lg">

          <h1 className="text-5xl font-bold drop-shadow-lg">
            STYLIST PICKS <br /> BEAT THE HEAT
          </h1>

          <Link href="/login">
            <button className="mt-8 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
              SHOP NOW
            </button>
          </Link>

        </div>
      </div>

      <footer className="bg-gray-100 text-gray-700 px-16 py-12">
        
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