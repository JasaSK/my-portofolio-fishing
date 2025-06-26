import Image from "next/image";
import PasswordInput from "../../../components/Input.js";
export default function Register() {
  return (
    <main className="bg-white rounded-lg py-10 px-6 max-w-4xl mx-auto my-10">
      <div className="flex flex-col items-center">
        <form
          action={"/auth/login"}
          className="w-full max-w-md bg-white p-8 rounded-3xl  text-center"
        >
          <h3 className="mb-4 text-4xl font-extrabold text-gray-900">
            Sign In
          </h3>
          <p className="mb-6 text-gray-700">Enter your email and password</p>

          <button
            type="button"
            className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 transition"
          >
            <Image
              src="/images/google.png"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>

          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-400" />
            <span className="mx-4 text-gray-600 text-sm">or</span>
            <hr className="flex-grow border-gray-400" />
          </div>

          <div className="mb-6 text-start">
            <label
              htmlFor="username"
              className="mb-2 block text-sm text-gray-900"
            >
              Username*
            </label>
            <input
              id="username"
              type="username"
              placeholder="Enter your username"
              className="w-full px-5 py-4 text-sm font-medium bg-gray-200 text-gray-900 rounded-2xl placeholder:text-gray-700 outline-none focus:bg-gray-300 transition"
            />
          </div>
          <div className="mb-5 text-start">
            <label htmlFor="email" className="mb-2 block text-sm text-gray-900">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@loopple.com"
              className="w-full px-5 py-4 text-sm font-medium bg-gray-200 text-gray-900 rounded-2xl placeholder:text-gray-700 outline-none focus:bg-gray-300 transition"
            />
          </div>
          <div className="mb-6 text-start">
            <label
              htmlFor="no_telp"
              className="mb-2 block text-sm text-gray-900"
            >
              No telp*
            </label>
            <input
              id="no_telp"
              type="no_telp"
              placeholder="Enter your no_telp"
              className="w-full px-5 py-4 text-sm font-medium bg-gray-200 text-gray-900 rounded-2xl placeholder:text-gray-700 outline-none focus:bg-gray-300 transition"
            />
          </div>
          <PasswordInput/>

          <div className="flex justify-between items-center mb-8 text-sm">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
              />
              <span className="ml-2 text-gray-900">Keep me logged in</span>
            </label>

            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-5 mb-5 text-sm font-bold text-white bg-orange-500 rounded-2xl hover:bg-orange-600 focus:ring-4 focus:ring-orange-100 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-gray-900">
            Not registered yet?{" "}
            <a href="#" className="font-bold text-gray-700 hover:text-gray-900">
              Create an Account
            </a>
          </p>
        </form>

        <p className="text-sm text-slate-500 py-5 text-center">
          Tailwind CSS Component from{" "}
          <a
            href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents"
            className="text-slate-700 hover:text-slate-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Motion Landing Library
          </a>{" "}
          by{" "}
          <a
            href="https://www.loopple.com"
            className="text-slate-700 hover:text-slate-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loopple Builder
          </a>
          .
        </p>
      </div>
    </main>
  );
}
