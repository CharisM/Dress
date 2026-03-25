export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-lg shadow-md w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2"
          />

          <button
            className="w-full bg-black text-white py-2 hover:bg-gray-800"
          >
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>

      </div>

    </div>
  );
}