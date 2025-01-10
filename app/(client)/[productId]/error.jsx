"use client";

import React, { startTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ErrorPage = ({ reset, error }) => {
  const router = useRouter();

  const handleRefresh = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl font-bold">
        {error.message || "Somthing went wrong"}
      </h1>
      <button
        onClick={handleRefresh}
        className="mt-5 mb-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Refresh
      </button>
      <br />
      <Link href="/">
        <span className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 inline-block">
          Go to Home Page
        </span>
      </Link>
    </div>
  );
};

export default ErrorPage;
