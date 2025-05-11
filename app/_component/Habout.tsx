"use client";
import Image from "next/image";
import React from "react";
import myimage from "../assets/BilalHassan_11zon.jpg";

const HAboutPage = () => {
  return (
    

    <>
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      {/* Hero Section */}
      <div className="relative bg-purple-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 px-4 sm:px-6 lg:px-8">
              <div className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Our Story</span>
                    <span className="block text-blue-200">Who We Are</span>
                  </h1>
                  <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                    Pioneering digital solutions with passion, innovation, and technical excellence since 2020.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Our team working"
            width={1200}
            height={800}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-64 w-full object-cover md:w-64"
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Our Mission"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">Our Mission</div>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Empowering Your Digital Journey</h2>
              <p className="mt-3 text-lg text-gray-600">
                At <span className="font-bold text-purple-600">Bilal Hassan</span>, we're dedicated to transforming your ideas into powerful digital solutions. 
                Our mission is to deliver cutting-edge technology with a human touch, ensuring every project 
                exceeds expectations while maintaining the highest standards of quality and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                description:
                  "We constantly push boundaries to deliver forward-thinking solutions that give you a competitive edge.",
              },
              {
                title: "Integrity",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                description:
                  "Honesty and transparency form the foundation of every client relationship and project we undertake.",
              },
              {
                title: "Collaboration",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                description:
                  "We believe the best results come from working closely with our clients as partners in the process.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-600 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <div className=" overflow-hidden">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">About Me</h2>

            <div className="flex justify-center items-center min-h-screen bg-white px-4">
              {[
                {
                  name: "Bilal Hassan",
                  role: "Full Stack Web & Mobile App Developer | MERN Stack Developer",
                  description:
                    "Full-stack wizard specializing in Web Development, E-commerce Development, and modern cloud infrastructure.",
                  img: myimage,
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 shadow-xl text-center max-w-sm w-full transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-purple-600 mt-1">{member.role}</p>
                  <p className="text-gray-600 mt-3">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
     

  );
};

export default HAboutPage;
