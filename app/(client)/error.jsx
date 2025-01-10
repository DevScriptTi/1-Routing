"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({ error, reset }) {
  const router = useRouter();

  const handelReset = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-4">
          {error.message || "An error occurred while rendering the page"}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handelReset}
            className="text-blue-500 hover:underline"
          >
            Refresh
          </button>
          <Link href="/">
            <span className="text-blue-500 hover:underline">Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
