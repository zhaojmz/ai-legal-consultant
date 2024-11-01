import React from 'react';
import { Gavel, FileText, Users, Building2 } from 'lucide-react';

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Services</h1>
        <p className="text-xl text-gray-600">Comprehensive legal solutions for individuals and businesses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Need Specialized Legal Assistance?</h2>
        <p className="text-gray-600 mb-6">
          Contact us for a personalized consultation with our expert legal team
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <Gavel className="h-8 w-8" />,
    title: "Civil Litigation",
    description: "Expert representation in civil disputes and litigation matters",
    features: [
      "Personal injury claims",
      "Contract disputes",
      "Property litigation",
      "Employment disputes"
    ]
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Document Review & Drafting",
    description: "Professional legal document services",
    features: [
      "Contract drafting",
      "Legal agreement review",
      "Terms and conditions",
      "Policy documents"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Family Law",
    description: "Compassionate guidance in family legal matters",
    features: [
      "Divorce proceedings",
      "Child custody",
      "Property settlement",
      "Domestic agreements"
    ]
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Corporate Law",
    description: "Comprehensive business legal solutions",
    features: [
      "Business formation",
      "Corporate compliance",
      "Mergers & acquisitions",
      "Intellectual property"
    ]
  }
];

export default Services;