import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex items-center flex-col mb-20 mt-20 px-2">
      <div className="flex items-center flex-col">
        <p className="text-3xl font-bold text-black">404 error</p>
        <h1 className="mt-3 text-3xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center gap-x-3">
          <Link
            to="/"
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link>
          <Link
            to="/contact"
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
