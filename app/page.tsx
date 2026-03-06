import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-serif">Chay Fashion</h1>

          <nav className="space-x-8 text-sm">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT US</a>
          </nav>

          <div className="flex space-x-4">
            <span>🔍</span>
            <span>🛒</span>
          </div>

        </div>
      </header>


      {/* HERO SECTION */}
      <section className="relative h-[400px] bg-pink-300 flex items-center">

        <div className="px-20 text-white">
          <h2 className="text-4xl font-bold mb-4">
            STYLIST PICKS BEAT <br/> THE HEAT
          </h2>

          <button className="border px-6 py-2 hover:bg-white hover:text-black">
            SHOP NOW
          </button>
        </div>

      </section>


      {/* NEW ARRIVALS */}
      <section className="py-16 bg-gray-100">

        <h2 className="text-center text-2xl font-semibold mb-10">
          Discover NEW Arrivals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <Image src="/dress1.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress2.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress3.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress4.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress5.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress6.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress7.jpg" alt="dress" width={250} height={300}/>
          <Image src="/dress8.jpg" alt="dress" width={250} height={300}/>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-200 py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm px-6">

          <div>
            <h3 className="font-semibold mb-2">COMPANY INFO</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Shop</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">HELP LINKS</h3>
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">USEFUL LINKS</h3>
            <p>Gift Cards</p>
            <p>Special Offers</p>
            <p>Terms of Use</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">JOIN OUR NEWSLETTER</h3>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-2 w-full"
            />
          </div>

        </div>

        <p className="text-center text-xs mt-8 text-gray-600">
          © 2026 Chay Fashion
        </p>

      </footer>

    </div>
  );
}