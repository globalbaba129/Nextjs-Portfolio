"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Your Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Your Phone Number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-15">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-full text-purple-700">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">My Address</h3>
              <p className="text-gray-600">Dubai / Karachi, Pakistan</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-purple-700">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Us Anytime</h3>
              <p className="text-gray-600">+92-335-459-4960</p>
              <p className="text-gray-600">+971-58-989-8635</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-full text-purple-700">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Send An Email</h3>
              <p className="text-gray-600">bilal1259hassan@gmail.com</p>
            </div>
          </div>
        </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* LinkedIn */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
        <FaLinkedin className="text-blue-600 text-2xl mt-1" />
        <div>
          <span className="text-sm text-gray-500">LinkedIn</span>
          <h3 className="text-base font-medium text-purple-600 break-words">
            <a
              href="https://www.linkedin.com/in/bilal-hassan-5717662b1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/bilal-hassan-5717662b1/
            </a>
          </h3>
        </div>
      </div>

      {/* Facebook */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
        <FaFacebook className="text-blue-500 text-2xl mt-1" />
        <div>
          <span className="text-sm text-gray-500">Facebook</span>
          <h3 className="text-base font-medium text-purple-600 break-words">
            <a
              href="https://www.facebook.com/profile.php?id=61553164050621"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/profile.php?id=61553164050621
            </a>
          </h3>
        </div>
      </div>

      {/* GitHub */}
      <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
        <FaGithub className="text-gray-700 text-2xl mt-1" />
        <div>
          <span className="text-sm text-gray-500">GitHub</span>
          <h3 className="text-base font-medium text-purple-600 break-words">
            <a
              href="https://github.com/globalbaba129?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/globalbaba129?tab=repositories
            </a>
          </h3>
        </div>
      </div>
    </div>
</div>
       
    </div>
  );
};

export default ContactPage;
