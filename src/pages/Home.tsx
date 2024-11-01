import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Scale, BookOpen, Shield } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your AI-Powered Legal Assistant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Get instant legal guidance and professional consultation
            </p>
            <Link
              to="/chat"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Chatting Now
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LegalChat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="24/7 AI Support"
              description="Get instant answers to your legal questions anytime, anywhere"
            />
            <FeatureCard
              icon={<Scale className="h-8 w-8" />}
              title="Expert Consultation"
              description="Connect with qualified legal professionals for in-depth guidance"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Legal Resources"
              description="Access comprehensive legal documents and templates"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure & Confidential"
              description="Your information is protected with enterprise-grade security"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who trust LegalChat for their legal needs
          </p>
          <Link
            to="/chat"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try LegalChat Free
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;