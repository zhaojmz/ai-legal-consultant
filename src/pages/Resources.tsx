import React from 'react';
import { FileText, BookOpen, Video, Download } from 'lucide-react';

function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Resources</h1>
        <p className="text-xl text-gray-600">Access our comprehensive collection of legal resources and guides</p>
      </div>

      {/* Featured Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuredResources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Document Templates */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Document Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentTemplates.map((template, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
              <FileText className="h-6 w-6 text-indigo-600 mr-3" />
              <div className="flex-1">
                <h3 className="font-semibold">{template.title}</h3>
                <p className="text-sm text-gray-600">{template.type}</p>
              </div>
              <Download className="h-5 w-5 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      {/* Legal Guides */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Legal Guides</h2>
        <div className="space-y-6">
          {legalGuides.map((guide, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                Read Guide →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const featuredResources = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Legal Knowledge Base",
    description: "Access our comprehensive database of legal articles and explanations"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Document Templates",
    description: "Download and customize professional legal document templates"
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Video Tutorials",
    description: "Watch expert explanations of common legal procedures and concepts"
  }
];

const documentTemplates = [
  { title: "Non-Disclosure Agreement", type: "Business Contract" },
  { title: "Employment Contract", type: "HR Document" },
  { title: "Service Agreement", type: "Business Contract" },
  { title: "Privacy Policy", type: "Website Legal" },
  { title: "Terms of Service", type: "Website Legal" },
  { title: "Power of Attorney", type: "Personal Legal" }
];

const legalGuides = [
  {
    title: "Starting a Business: Legal Essentials",
    description: "A comprehensive guide to legal requirements for new businesses"
  },
  {
    title: "Understanding Intellectual Property Rights",
    description: "Learn about patents, trademarks, and copyrights"
  },
  {
    title: "Employment Law Basics",
    description: "Essential information for employers and employees"
  }
];

export default Resources;