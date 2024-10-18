"use client";
import { useEffect, useState } from "react";
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
     
      setTranslateValue(-40);
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
    <div className=" bg-transparent h-[4000px] text-white  ">
      <div className="sticky top-[150px] bg-transparent  ">
        {/* Card Content */}
        <div
          className="w-[200px] h-[300px] mx-auto shadow-xl rounded-lg text-gray-900"
          style={{
            transform: `translateX(${translateValue}vw) skew(${skewValue.x}deg, ${skewValue.y}deg)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {/* Conditionally render ContentTypeCardA or ContentFormCard */}
          {showContentA ? <ContentTypeCardA /> : <ContentFormCard />}
        </div>
      </div>
      <section>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-4xl text-black">
              Effortlessly create content structures that flex to your needs.
            </p>
          </div>
        </div>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-sm text-black">
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-2xl">
              Effortlessly create content structures <br />
              that flex to your needs.
            </p>
          </div>
        </div>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-sm ">
              <span className="text-orange-400 mb-12  font-extrabold">
                Step 1
              </span>
              <br />
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-sm text-white">
              No matter which data structure is the best for your <br />{" "}
              business, you can easily define models and <br /> add relations to
              create rich layout experiences.
            </p>
          </div>
        </div>
        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-fit text-black">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              soluta ullam, vero nulla neque veniam quae explicabo corrupti ipsa
              doloremque pariatur consectetur. Possimus dolores esse nihil
              aliquid deserunt tempora dolore.
            </p>
          </div>
        </div>{" "}
        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-fit text-black">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              soluta ullam, vero nulla neque veniam quae explicabo corrupti ipsa
              doloremque pariatur consectetur. Possimus dolores esse nihil
              aliquid deserunt tempora dolore.
            </p>
          </div>
        </div>




        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-2xl">
              Seamlessly write, edit and manage <br />
              any content types.
            </p>
          </div>
        </div>{" "}



        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p>
              <span className="text-orange-400 font-extrabold mb-3">
                Step 2
              </span>
              <br />
              Once you have created your content architecture, <br /> you can
              start telling engaging stories. Allow <br /> cross-functional
              teams to deliver content faster no <br />
              matter your industries, use cases, locations, devices, <br />
              and channels.
            </p>
          </div>
        </div>{" "}





        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-fit ">
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Repellat
              soluta ullam, vero nulla neque veniam <br/>quae explicabo corrupti ipsa
              doloremque pariatur consectetur.<br/> Possimus dolores esse nihil
              aliquid deserunt tempora dolore.
            </p>
          </div>
        </div>







        
        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-2xl text-transparent">
              Seamlessly write, edit and manage <br />
              any content types.
            </p>
          </div>
        </div>{" "}



        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-black">
              <span className="text-transparent font-extrabold mb-3">
                Step 3
              </span>
              <br />
              Once you have created your content architecture, <br /> you can
              start telling engaging stories. Allow <br /> cross-functional
              teams to deliver content faster no <br />
              matter your industries, use cases, locations, devices, <br />
              and channels.
            </p>
          </div>
        </div>{" "}






        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-2xl text-white">
            Easily build apps and digital experiences <br/> without the distraction of CMS complexities.
            </p>
          </div>
        </div>{" "}



        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p>
              <span className="text-orange-400 font-extrabold mb-3">
                Step 3
              </span>
              <br />
              Once you have created your content architecture, <br /> you can
              start telling engaging stories. Allow <br /> cross-functional
              teams to deliver content faster no <br />
              matter your industries, use cases, locations, devices, <br />
              and channels.
            </p>
          </div>
        </div>{" "}






        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-sm text-white">
            Easily build apps and digital experiences <br/> without the distraction of CMS complexities.
            </p>
          </div>
        </div>{" "}



        <div className="w-[100vw] bg-black h-[200px] flex justify-end">
          <div className="flex w-[50%]">
            <p className="text-transparent">
              <span className="text-transparent font-extrabold mb-3">
                Step 3
              </span>
              <br />
              Focus your talent on what matters. <br/> You can integrate individual  best-in-class services  <br/>by third-party vendors and connect any framework of your choice.
            </p>
          </div>
        </div>{" "}







        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-xl text-transparent">
            Consume Strapi API from any <br/> client using REST or GraphQL.
            </p>
          </div>
        </div>{" "}

        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-xl text-white">
            Consume Strapi API from any <br/> client using REST or GraphQL.
            </p>
          </div>
        </div>{" "}



        <div className="w-[100vw] bg-black h-[200px] flex justify-start">
          <div className="flex w-[50%]">
            <p className="text-white text-sm">
              <span className="text-orange-500 font-extrabold mb-3">
                Step 4
              </span>
              <br />
              You can use a standard RESTful API or GraphQL to <br/> query your content. Based on Apollo, our GraphQL <br/> plugin offers a full compatibility with the whole GraphQL ecosystem.
            </p>
          </div>
        </div>{" "}




      </section>
    </div>
  );
};

export default ScrollAnimation;
