import { BsLightningFill } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 lg:px-[50px] 2xl:px-[120px]">
      <hr className="my-20 text-gray-500" />
      <div className="features flex flex-col lg:flex-row  justify-center items-center gap-x-20 gap-y-10">
        {cards.map((card, index) => {
          return (
            <Cards
              key={index}
              title={card.title}
              icon={card.icon}
              brief={card.brief}
            />
          );
        })}
      </div>
      <hr className="my-20 text-gray-500" />
      <p className="text-center text-gray-600 mb-2">
        &copy; {new Date().getFullYear()} Shorty
      </p>
      <p className="text-center text-gray-600 mb-10">
        Designed and Developed By{" "}
        <span className="text-blue-500 font-medium">Prashant Maharjan</span>
      </p>
    </div>
  );
};

export default Footer;

function Cards({ title, icon, brief }) {
  return (
    <>
      <div className="card flex flex-col justify-center items-center gap-4 bg-gray-100 p-5 rounded shadow-lg w-full h-[200px] aspect-square">
        <div className="icon tex-2xl">{icon}</div>
        <div className="text flex flex-col justify-center items-center gap-1">
          <div className="title text-xl md:text-3xl">{title}</div>
          <div className="brief text-lg md:text-xl text-gray-400">{brief}</div>
        </div>
      </div>
    </>
  );
}

const cards = [
  {
    title: "Fast Redirects",
    icon: <BsLightningFill className="text-5xl" />,
    brief: "Blazing speed",
  },
  {
    title: "Secure Links",
    icon: <GrSecure className="text-5xl" />,
    brief: "Expiry settings",
  },
  {
    title: "Analytics",
    icon: <SiGoogleanalytics className="text-5xl" />,
    brief: "Click tracking",
  },
];
