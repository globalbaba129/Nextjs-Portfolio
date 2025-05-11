"use client";
import Image from "next/image";
import Image3 from "../assets/service/softare.jpeg";
import Image5 from "../assets/service/db.jpeg";
import Image6 from "../assets/service/ui-ux.png";
import React from "react";
import image1 from "../assets/service/web.jpeg";
import image2 from "../assets/service/CWD.png";
import image4 from "../assets/service/ecom.jpeg";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-purple-50">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Our Featured Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Web Development",
            desc: "Build responsive, dynamic, and fully functional websites tailored to your business needs.",
            img: image1,
          },
          {
            title: "Custom WordPress Development",
            desc: "We specialize in building custom WordPress websites that are both highly functional and user-friendly.",
            img: image2,
          },
          {
            title: "Software Development",
            desc: "Create custom software solutions to enhance your workflow and meet your unique business requirements.",
            img: Image3,
          },
          {
            title: "E-Commerce Development",
            desc: "Build scalable and secure e-commerce platforms to drive online sales and grow your business.",
            img: image4,
          },
          {
            title: "Digital Marketing",
            desc: "Increase your online presence with our expert digital marketing strategies, including SEO and paid ads.",
            img: Image5,
          },
          {
            title: "UI/UX Design",
            desc: "Craft visually appealing and user-friendly interfaces that enhance user experience and engagement.",
            img: Image6,
          },
        ].map((service, i) => (
          <div
            key={i}
            className="group relative h-96 rounded-xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl 
                          shadow-lg transform group-hover:-translate-y-2 group-hover:rotate-${i % 2 === 0 ? "2" : "-1"} 
                          transition-all duration-300`}
            ></div>

            <div
              className={`relative h-full p-6 rounded-xl bg-white border-2 border-purple-400 
                          transform group-hover:-translate-y-4 transition-all duration-300
                          flex flex-col overflow-hidden`}
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <hr className="border-t border-purple-200 my-2" />
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
    </div>
  );
};

export default Services;
