import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const hourlyPlans = [
  {
    title: "Cold Caller",
    price: "$8",
    unit: "/hr",
    features: [
      "Outbound cold calling",
      "Lead qualification",
      "Script following & adaptation",
      "CRM data entry",
      "Daily call reports",
    ],
    popular: false,
  },
  {
    title: "Acquisitions Manager",
    price: "$10",
    unit: "/hr",
    features: [
      "Lead follow-up & nurturing",
      "Offer preparation",
      "Seller negotiations",
      "Contract coordination",
      "Deal pipeline management",
    ],
    popular: true,
  },
  {
    title: "Disposition Manager",
    price: "$10",
    unit: "/hr",
    features: [
      "Buyer list management",
      "Property marketing",
      "Buyer negotiations",
      "Assignment coordination",
      "Closing support",
    ],
    popular: false,
  },
];

const crmPackages = [
  {
    title: "Starter Package",
    subtitle: "Best for Wholesalers just getting started with CRM",
    price: "$999",
    label: "One-Time Setup Fee",
    features: [
      "CRM sub-account set up",
      "Basic pipeline setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "Email & SMS templates",
      "AI chatbot on your website and SMS",
      "Lead management dashboard",
      "CRM Setup and configuration",
      "1 onboarding training call",
      "Email Support",
    ],
    popular: false,
  },
  {
    title: "Boost Package",
    subtitle: "Best for Active wholesalers ready to scale their pipeline",
    price: "$1,299",
    label: "One-Time Setup Fee",
    features: [
      "CRM sub-account setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "Everything on Basic",
      "Appointment reminder sequences",
      "2-way SMS conversation",
      "Bi-weekly strategy call with our team",
      "Priority email support",
    ],
    popular: true,
  },
  {
    title: "Premium Package",
    subtitle: "The ultimate system with multi-channel outreach.",
    price: "$1,499",
    label: "One-Time Setup Fee",
    features: [
      "Advanced CRM automation setup",
      "Lead Tracking Workflow",
      "Immediate Outreach Workflow",
      "Long-Term Drip Workflow",
      "Contract Execution Workflow",
      "Inbound Intake Workflow",
      "Everything on Basic",
      "Advanced dashboards and analytics",
      "Monthly strategy call with dedicated account manager",
      "Dedicated Philippines VA support (onboarding, client management, pipeline oversight)",
      "Priority slack support channel",
    ],
    popular: false,
  },
];

const CALENDLY_URL = "https://calendly.com/ryan0312001/booking";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Simple</span>{" "}
            <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent, competitive rates with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto space-y-20">
          {/* Hourly Rates Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Hourly Rates</h3>
              <p className="text-gray-300 text-lg">Pay only for the hours you need.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hourlyPlans.map((plan) => (
                <div
                  key={plan.title}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border-yellow-400/40 shadow-2xl shadow-yellow-400/10"
                      : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-yellow-400">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "bg-white/10 text-white hover:bg-yellow-400 hover:text-black border border-gray-600"
                      }`}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CRM Packages Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">CRM Packages</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Every RealtyVAHub CRM package comes with a fully customized infrastructure, built and configured by our Philippines-based VA team. We don't just hand you software. We design it, test it, and ensure it's ready to support your wholesaling business from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {crmPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-105 flex flex-col ${
                    pkg.popular
                      ? "bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border-yellow-400/40 shadow-2xl shadow-yellow-400/10"
                      : "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-yellow-400">{pkg.price}</span>
                    <span className="text-gray-400 text-base ml-2">{pkg.label}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                        pkg.popular
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "bg-white/10 text-white hover:bg-yellow-400 hover:text-black border border-gray-600"
                      }`}
                    >
                      Book a Demo Call
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
