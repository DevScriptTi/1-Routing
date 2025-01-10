import Link from "next/link";
import { Suspense } from "react";
import LoadingFallback from "./loading-fallback";
import Products from "./products";

async function HomePage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  if(Math.random() < 0.5) {
    throw new Error("An error occurred while rendering the home page");

  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="mb-6">
        This is the home page of our Next.js tutorial application.
      </p>
      <Suspense fallback={<LoadingFallback />}>
        <Products />
      </Suspense>
    </div>
  );
}
export default HomePage;
