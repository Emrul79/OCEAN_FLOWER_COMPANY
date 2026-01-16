import {
  ArrowRight,
  Award,
  CheckCircle2,
  Cog,
  Lightbulb,
  Pencil,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const OurProcessPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Plan",
      subtitle: "Strategic Planning",
      description:
        "We begin by understanding your business needs, analyzing workforce requirements, and creating a comprehensive recruitment strategy tailored to your specific industry demands.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      features: ["Needs Assessment", "Market Research", "Strategy Development"],
    },
    {
      icon: Pencil,
      title: "Design",
      subtitle: "Workforce Design",
      description:
        "Our team designs the perfect workforce solution by selecting candidates with the right skills, experience, and cultural fit for your organization's unique requirements.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      features: ["Candidate Sourcing", "Skill Matching", "Profile Creation"],
    },
    {
      icon: Cog,
      title: "Develop",
      subtitle: "Training & Onboarding",
      description:
        "We prepare and train your selected workforce, ensuring they meet all necessary requirements and are ready to integrate seamlessly into your operations.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      features: ["Skills Training", "Documentation", "Compliance Check"],
    },
    {
      icon: Rocket,
      title: "Launch",
      subtitle: "Deployment",
      description:
        "Finally, we deploy your workforce efficiently, providing ongoing support to ensure smooth operations and optimal performance from day one.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      features: [
        "On-site Deployment",
        "24/7 Support",
        "Performance Monitoring",
      ],
    },
  ];

  const companyValues = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted by 200+ companies across Saudi Arabia",
    },
    {
      icon: Award,
      title: "Quality",
      description: "ISO certified workforce solutions",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Deploy workforce in 48 hours",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "10+ years of industry experience",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-full mb-6 border border-blue-200 dark:border-blue-900">
              <span className="px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Our Proven Process
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              From Vision to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Reality
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to delivering exceptional workforce
              solutions
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
              <TrendingUp className="w-5 h-5" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Building Saudi Arabia's Workforce Excellence
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Since 2012, we've been at the forefront of manpower solutions in
              Jeddah, connecting talented professionals with leading
              organizations across the Kingdom. Our commitment to quality,
              reliability, and innovation has made us the trusted partner for
              over 200 companies.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We don't just supply workers—we build partnerships. Every
              workforce solution is crafted with precision, ensuring perfect
              alignment between talent capabilities and business objectives.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">1,000+ Workers Deployed</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">98% Satisfaction Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Value Cards */}
          <div className="grid grid-cols-2 gap-6">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-slate-950/50 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Steps Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Four strategic phases that guarantee excellence in every workforce
            solution
          </p>
        </div>

        {/* Interactive Process Timeline */}
        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`group relative transition-all duration-500 ${
                  isActive ? "scale-100" : "scale-95 opacity-75"
                }`}
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-slate-300 dark:from-slate-700 to-transparent z-0"></div>
                )}

                <div className="relative bg-white dark:bg-slate-900/50 rounded-3xl p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl dark:hover:shadow-slate-950/50">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Icon & Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Number Badge */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                          {index + 1}
                        </div>

                        {/* Icon Container */}
                        <div
                          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div
                            className={`w-full h-full ${step.bgColor} rounded-2xl flex items-center justify-center`}
                          >
                            <Icon
                              className={`w-10 h-10 ${
                                index === 0
                                  ? "text-amber-600 dark:text-amber-400"
                                  : index === 1
                                  ? "text-blue-600 dark:text-blue-400"
                                  : index === 2
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-green-600 dark:text-green-400"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </h3>
                          <span
                            className={`text-sm font-semibold px-3 py-1 rounded-full ${
                              index === 0
                                ? "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300"
                                : index === 1
                                ? "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300"
                                : index === 2
                                ? "bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300"
                                : "bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-300"
                            }`}
                          >
                            {step.subtitle}
                          </span>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3">
                        {step.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 ${
                                index === 0
                                  ? "text-amber-600 dark:text-amber-400"
                                  : index === 1
                                  ? "text-blue-600 dark:text-blue-400"
                                  : index === 2
                                  ? "text-purple-600 dark:text-purple-400"
                                  : "text-green-600 dark:text-green-400"
                              }`}
                            />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-8 h-8 text-slate-400 dark:text-slate-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Workforce?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our proven process can help you achieve your
                business goals
              </p>
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 mx-auto">
                <a
                  href="https://wa.me/message/J5WYTIYSI55ZL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex items-center gap-2 mx-auto"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessPage;
