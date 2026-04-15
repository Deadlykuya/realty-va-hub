import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const crmPackages = [
  {
    title: "Starter Package",
    subtitle:
      "Best for wholesalers just getting started with CRM and outreach. Includes 1 dedicated cold caller to begin building your pipeline.",
    price: "$999",
    label: "One-Time Setup Fee",
    features: [
      "Lead tracking workflow to organize prospects",
      "Immediate outreach workflow for fast follow-up",
      "Long-term drip workflow to nurture leads",
      "Contract execution workflow for smooth closings",
      "Inbound intake workflow for new inquiries",
      "Email & SMS templates for consistent communication",
      "Lead management dashboard for visibility",
      "CRM setup and full configuration",
      "One onboarding training call with our team",
      "Ongoing email support",
    ],
    popular: false,
  },
  {
    title: "Boost Package",
    subtitle:
      "Best for active wholesalers ready to scale their pipeline. Includes 1 cold caller + 1 acquisitions manager to generate leads and convert them into signed contracts.",
    price: "$1,299",
    label: "One-Time Setup Fee",
    features: [
      "All workflows included in Starter",
      "Appointment reminder sequences to reduce no-shows",
      "Two-way SMS conversations for real-time engagement",
      "Bi-weekly strategy calls with our team",
      "Priority email support for faster responses",
      "Enhanced lead tracking and reporting",
      "Streamlined contract execution oversight",
      "Improved drip campaigns for higher conversions",
      "Dedicated acquisitions manager to close deals",
      "Integrated CRM dashboard tailored for scaling",
    ],
    popular: true,
  },
  {
    title: "Premium Package",
    subtitle:
      "The ultimate system with multi-channel outreach and full team support. Includes 1 cold caller + 1 acquisitions manager + 1 dispositions manager for complete pipeline coverage.",
    price: "$1,799",
    label: "One-Time Setup Fee",
    features: [
      "All features included in Boost",
      "Advanced dashboards and analytics for deeper insights",
      "Monthly strategy call with a dedicated account manager",
      "Dedicated Philippines VA support for onboarding and client management",
      "Pipeline oversight handled by your VA team",
      "Priority Slack support channel for instant communication",
      "Dispositions manager to handle property marketing and buyer relations",
      "Comprehensive reporting across acquisitions and dispositions",
      "Multi-channel outreach workflows for maximum exposure",
      "End-to-end system for wholesalers who want full delegation",
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
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">CRM Packages</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Every RealtyVAHub CRM package comes with a fully customized infrastructure, built and
                configured by our Philippines-based automation team. We don't just hand you software.
                We design it, test it, and ensure it's ready to support your wholesaling business from
                day one.
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
