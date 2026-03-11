import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "bgpic" // butangi imong image sa public folder
      }}
    >

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white/80">
        <h1 className="text-2xl font-serif italic">Chay Passion</h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li className="text-blue-600">HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center h-[80vh] px-16">
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

    </div>
  );
}