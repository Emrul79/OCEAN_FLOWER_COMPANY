import emailjs from "@emailjs/browser";
import {
  Briefcase,
  CheckCircle2,
  Headphones,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Contact information cards data
  const contactCards = [
    {
      icon: Briefcase,
      title: "Logistic Department",
      description: "Discuss workforce solutions for your business",
      phone: "+966 533 729 927",
      email: "oceanflower2024company@gmail.com",
      color: "blue",
    },
    {
      icon: Users,
      title: "Operations Team",
      description: "Worker deployment and management",
      phone: "+966 54 943 4884",
      email: "hemrul494@gmail.com",
      color: "green",
    },
    {
      icon: Headphones,
      title: "Support Center",
      description: "24/7 assistance for existing clients",
      phone: "+966 56 878 9078 , +966 53 692 5391",
      email: "hemrul494@gmail.com",
      color: "purple",
    },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // EmailJS integration - replace with your actual credentials
    try {
      // Simulate API call - In production, integrate with EmailJS:
      emailjs.send(
        "service_8qml62n",
        "template_4r5s612",
        {
          to_email: "hemrul494@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          company: formData.companyName,
          phone: formData.phone,
          message: formData.message,
        },
        "oNqkURKi-yS9bgCbu"
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted to hemrul494@gmail.com:", formData);

      setIsSuccess(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 mt-7 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-950/30 rounded-full mb-6">
            <span className="px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300">
              Trusted Manpower Solutions in KSA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Get in Touch With Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Manpower Team
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Based in Jeddah, Saudi Arabia, we provide reliable, skilled, and
            professional workforce solutions tailored to your business needs.
            Let's build your dream team together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                      card.color === "blue"
                        ? "from-blue-500 to-cyan-500"
                        : card.color === "green"
                        ? "from-emerald-500 to-teal-500"
                        : "from-purple-500 to-pink-500"
                    }`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 ${
                        card.color === "blue"
                          ? "bg-blue-100 dark:bg-blue-950/50"
                          : card.color === "green"
                          ? "bg-emerald-100 dark:bg-emerald-950/50"
                          : "bg-purple-100 dark:bg-purple-950/50"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          card.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : card.color === "green"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-purple-600 dark:text-purple-400"
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {card.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <span className="text-sm">{card.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <span className="text-sm">{card.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Location Card */}
            <a
              href="https://www.google.com/maps/place/21%C2%B026'48.5%22N+39%C2%B012'13.2%22E/@21.4468106,39.2010918,17z"
              target="_blank"
              className="p-6"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 text-white shadow-lg">
                <MapPin className="w-8 h-8 mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-slate-300 text-sm">
                  Gulail,Al-Mahjar, Jeddah, Kingdom of Saudi Arabia.
                </p>
                <p className="text-slate-400 text-xs mt-4">
                  Serving businesses across KSA with excellence.
                </p>
              </div>
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl dark:shadow-slate-950/50 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>

                {/* Success Message */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl flex items-center gap-3 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Thank you! Your message has been sent successfully. We'll
                      be in touch soon.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "fullName" || formData.fullName
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-2 text-blue-600 dark:text-blue-400"
                          : "top-4 text-sm text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl transition-all duration-200 text-slate-900 dark:text-white ${
                        errors.fullName
                          ? "border-red-300 dark:border-red-800 focus:border-red-500 dark:focus:border-red-600"
                          : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                      } focus:outline-none`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="relative">
                    <label
                      htmlFor="companyName"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "companyName" || formData.companyName
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-2 text-blue-600 dark:text-blue-400"
                          : "top-4 text-sm text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("companyName")}
                      onBlur={() => setFocusedField("")}
                      className="w-full px-4 py-4 bg-transparent border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all duration-200 text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Email and Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "email" || formData.email
                            ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-2 text-blue-600 dark:text-blue-400"
                            : "top-4 text-sm text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl transition-all duration-200 text-slate-900 dark:text-white ${
                          errors.email
                            ? "border-red-300 dark:border-red-800 focus:border-red-500 dark:focus:border-red-600"
                            : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                        } focus:outline-none`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "phone" || formData.phone
                            ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-2 text-blue-600 dark:text-blue-400"
                            : "top-4 text-sm text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl transition-all duration-200 text-slate-900 dark:text-white ${
                          errors.phone
                            ? "border-red-300 dark:border-red-800 focus:border-red-500 dark:focus:border-red-600"
                            : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                        } focus:outline-none`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "message" || formData.message
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-900 px-2 text-blue-600 dark:text-blue-400"
                          : "top-4 text-sm text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      className={`w-full px-4 py-4 bg-transparent border-2 rounded-xl transition-all duration-200 resize-none text-slate-900 dark:text-white ${
                        errors.message
                          ? "border-red-300 dark:border-red-800 focus:border-red-500 dark:focus:border-red-600"
                          : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400"
                      } focus:outline-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 dark:shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-900/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                    By submitting this form, you agree to our privacy policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">
              Available 24/7 for urgent workforce needs
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
