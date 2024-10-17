"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollAnimation = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const handleScroll = () => {
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalScrollHeight) * 100;

    const cycle = Math.floor(scrolled / 10) % 2; 

    if (cycle === 0) {
      setTranslateValue(-40);
      setSkewValue({ x: 30, y: 30 });


    } else {
      setTranslateValue(0);
      setSkewValue({ x: -30, y: -30 });


    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[500vh] bg-black">
      <div
        className="sticky top-20 "
        style={{
          transform: `translateX(${translateValue}vw)`, 
          transition: "transform 0.7s ease-in-out",
        }}
      >
        {/* Card Code */}
        <div className="w-[200px] h-[300px] mx-auto bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-[100px] overflow-hidden">
            <img
              className="object-cover object-top w-full h-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-16 h-16 relative -mt-8 border-4 border-white rounded-full overflow-hidden">
            <Image
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
              width={64}
              height={64} // Adjusting image size accordingly
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="font-semibold text-sm">Sarah Smith</h2>
            <p className="text-gray-500 text-xs">Freelance Web Designer</p>
          </div>
          <ul className="py-2 mt-2 text-gray-700 flex items-center justify-around text-xs">
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <div>2k</div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>10k</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>15</div>
            </li>
          </ul>
          <div className="p-2 border-t mx-4 mt-2">
            <button className="w-full block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
