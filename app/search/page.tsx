// pages/search.tsx
import { useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  // Dress items
  const items = [
    "Red Dress",
    "Black Dress",
    "White Summer Dress",
    "Floral Dress",
    "Long Gown Dress",
    "Casual Mini Dress",
    "Elegant Evening Dress",
    "Denim Dress",
    "Bodycon Dress",
    "Cocktail Dress",
  ];

  // Filter suggestions
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center pt-20"
      style={{ backgroundImage: "url('/bgpic.jpg')" }}
    >
      {/* Navigation */}
      <nav className="flex gap-6 mb-10 text-white font-semibold text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/search">Search</Link>
      </nav>

      {/* Search Box */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-[#6B4E71] text-center">
          Search Dresses
        </h2>

        <input
          type="text"
          placeholder="Search dress..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />

        {/* Suggestions */}
        {query && (
          <ul className="border border-gray-200 rounded max-h-40 overflow-y-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-[#6B4E71] hover:text-white cursor-pointer"
                  onClick={() => setQuery(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500">No dresses found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}