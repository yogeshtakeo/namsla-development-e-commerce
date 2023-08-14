"use client";
import Link from "next/link";

import React from "react";

function Homepage() {
  return (
    <div>
      <main className="h-screen">
        <div className="pt-5 m-7 text-center text-blue-900 capitalize mt-10 flex flex-col justify-center ml-10 mr-10">
          <img
            className="d-block mx-auto mb-4 opacity-0.01"
            src="data:image/jpeg;base64,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"
            alt="kid reading a book"
            width="80"
            height="70"
          />

          <h1 className="display-5 fw-bold text-body-emphasis text-4xl mb-5 font-mono font-bold mt-5">
            Welcome To Your Favorite e-Book Store!
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-md font-bold font-mono">
              “A great book should leave you with many experiences, and slightly
              exhausted at the end. You live several lives while reading.”
            </p>
          </div>
          <div className="px-4 py-5 my-5 text-center mt-20">
            <div className="flex justify-center">
              <Link
                href="/products"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-lg font-bold"
              >
                <div className="flex">
                  <div className="text-7xl">B</div>
                  <div>
                    <div className="pt-2 pl-2">uy</div>
                    <div>ooks</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
