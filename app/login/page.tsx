export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-lg shadow-md w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">

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
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </p>

      </div>

    </div>
  );
}