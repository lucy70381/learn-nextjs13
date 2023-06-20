"use client";

import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 h-full w-full bg-black opacity-40"
        onClick={() => router.back()}
      ></div>
      <div className="flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-lg">
          <div className="mt-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="mt-2 text-center">
              <h4 className="text-lg font-medium text-gray-800">
                Successfully accepted!
              </h4>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
                eget lorem dolor sed viverra ipsum nunc. Consequat id porta nibh
                venenatis.
              </p>
            </div>
          </div>
          {/* <div className="mt-3 items-center gap-2 sm:flex">
            <button
              className="mt-2 w-full flex-1 rounded-md bg-indigo-600 p-2.5 text-white outline-none ring-indigo-600 ring-offset-2 focus:ring-2"
              onClick={() => setState(false)}
            >
              Dashboard
            </button>
            <button
              className="mt-2 w-full flex-1 rounded-md border p-2.5 text-gray-800 outline-none ring-indigo-600 ring-offset-2 focus:ring-2"
              onClick={() => setState(false)}
            >
              Undo
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
