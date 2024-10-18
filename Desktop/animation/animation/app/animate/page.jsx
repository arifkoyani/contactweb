"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContentTypeCardA from "../cards/CardA/page";
import ContentFormCard from "../cards/CardB/page";

const ScrollAnimation = () => {
  const [translateValue, setTranslateValue] = useState(-30);
  const [skewValue, setSkewValue] = useState({ x: 0, y: 0 });
  const [showContentA, setShowContentA] = useState(true);

  const handleScroll = () => {
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalScrollHeight) * 100;

    const cycle = Math.floor(scrolled / 30) % 2;

    if (cycle === 0) {
      setTranslateValue(-30);
      setSkewValue({ x: 5, y: 5 });
      setShowContentA(false);
    } else {
      setTranslateValue(0);
      setSkewValue({ x: -5, y: -5 });
      setShowContentA(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-transparent h-[4000px] text-white ">
      <div className="sticky top-[150px] bg-transparent">
        <motion.div
          className="w-[200px]  h-[300px] mx-auto shadow-xl rounded-lg transform translate-x-10 skew-x-6 skew-y-2 text-gray-900"
          animate={{
            x: `${translateValue}vw`,
            skewX: skewValue.x,
            skewY: skewValue.y,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            mass: 1,
          }}
        >
         
          {showContentA ? <ContentTypeCardA /> : <ContentFormCard />}
        </motion.div>
 




      </div>
      <section>
        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-2xl text-black">
              Effortlessly create content structures<br/> that flex to your needs.
            </p>
          </div>
        </div>
        <div className=" bg-transparent h-[200px] flex justify-between">
        

          <div class="w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-[#4f46e5]"></div>


          <div className="flex w-[40%]">
            <p className="text-sm text-black">
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className=" bg-transparent text-black h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-2xl">
              Effortlessly create content structures <br />
              that flex to your needs.
            </p>
          </div>
        </div>
        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-sm  text-black">
              <span className="text-orange-400 mb-12  font-extrabold">Step 1</span>
              <br />
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-sm text-white">
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-fit text-white">
            <p>
              Lorem ipsum dolor<br /> sit amet consectetur adipisicing elit. Repellat
              soluta ullam, vero nulla<br /> neque veniam quae explicabo corrupti ipsa
              doloremque pariatur<br /> consectetur. Possimus dolores esse nihil
              aliquid deserunt tempora dolore.
            </p>
          </div>
        </div>{" "}
        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[30%] text-black">
         

          </div>
        </div>

        <div className=" bg-transparent h-[200px] flex justify-start">
          <div className="flex w-[40%] pl-12 font-bold">
            <p className="text-2xl text-black">
              Seamlessly write, edit and manage <br />
              any content types.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-start">
          <div className="flex w-[40%] text-black pl-12">
            <p>
              <span className="text-orange-400 font-extrabold mb-3">Step 2</span>
              <br />
              Once you have created your content architecture, <br /> you can
              start telling engaging stories. Allow <br /> cross-functional
              teams to deliver content faster no <br />
              matter your industries, use cases, locations, devices, <br />
              and channels.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-start">
          <div className="flex w-fit text-white">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Repellat
              soluta ullam, vero nulla neque<br /> veniam quae explicabo corrupti ipsa
              doloremque pariatur consectetur.<br />Possimus dolores esse nihil
              aliquid deserunt tempora dolore.
            </p>
          </div>
        </div>

        <div className=" bg-transparent h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-2xl text-transparent">
              Seamlessly write, edit and manage <br />
              any content types.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-start">
          <div className="flex w-[30%]">
          <div class="w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[200px] border-b-[#4f46e5]"></div>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-xl text-black">
              Easily build apps and digital<br /> experiences <br /> without the
              distraction of CMS complexities.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-black">
              <span className="text-orange-400 font-extrabold mb-3">Step 3</span>
              <br />
              Once you have created your content architecture, <br /> you can
              start telling <br/> engaging stories. Allow <br /> cross-functional
              teams to deliver <br/> content faster no <br />
              matter your industries, use cases, locations, devices, <br />
              and channels.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-end">
          <div className="flex w-[40%]">
            <p className="text-sm text-black">
              Easily build apps and digital experiences <br /> without the
              distraction of CMS complexities.
            </p>
          </div>
        </div>{" "}




        <div className=" bg-transparent h-[200px] flex justify-start pl-12">
          <div className="flex w-[40%]">

         

           
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-start ">
          <div className="flex w-[50%]">
            <p className="text-transparent text-sm">
              <span className="text-transparent font-extrabold mb-3">Step 4</span>
              <br />
              You can use a standard RESTful API or GraphQL to <br /> query your
              content. Based on Apollo, our GraphQL <br /> plugin offers full
              compatibility with the whole GraphQL ecosystem.
            </p>
          </div>
        </div>{" "}




        <div className="bg-transparent h-[200px] flex justify-start pl-12">
          <div className="flex w-[50%]">
            <p className="text-xl font-bold text-black">
              Consume Strapi API from any <br /> client using REST or GraphQL.
            </p>
          </div>
        </div>{" "}

        <div className=" bg-transparent h-[200px] flex justify-start pl-12 ">
          <div className="flex w-[50%]">
            <p className="text-black text-sm">
              <span className="text-orange-500 font-extrabold mb-3">Step 4</span>
              <br />
              You can use a standard RESTful API or GraphQL to <br /> query your
              content. Based on Apollo, our GraphQL <br /> plugin offers full
              compatibility with the whole GraphQL ecosystem.
            </p>
          </div>
        </div>{" "}



      </section>
    </div>
  );
};

export default ScrollAnimation;
