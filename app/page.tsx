"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);

  return (
    <main className="min-h-screen grid grid-cols-3 items-center justify-between bg-indigo-950">
      <section className="pl-8 col-span-1">
        <h3 className="text-7xl font-semibold">3D Website</h3>
        <p className="my-6 text-2xl">
          Step into the future of web design with our{" "}
          <span className="text-indigo-400">3D landing page</span>. It&apos;s
          not just a webpage; its a journey, an experience, and a testament to
          what&apos;s possible in the digital world. We invite you to explore,
          engage, and discover a new dimension of online interaction.
        </p>
        <ul className="flex gap-5 font-semibold">
          <li className="outline-dotted outline-indigo-500 p-3 rounded-full">
            Spline
          </li>
          <li className="outline-dotted outline-indigo-500 p-3 rounded-full">
            React
          </li>
          <li className="outline-dotted outline-indigo-500 p-3 rounded-full">
            Tailwind CSS
          </li>
          <li className="outline-dotted outline-indigo-500 p-3 rounded-full">
            Figma
          </li>
        </ul>
      </section>
      <section className="col-span-1">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <Spline scene="https://prod.spline.design/7QEwin2WqPs0i0pR/scene.splinecode" />
          </div>
        )}
      </section>
    </main>
  );
}
