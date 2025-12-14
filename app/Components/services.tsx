'use client';

import { useState } from 'react';



const categories = [
  'All Skills',
  'CMS',
  'No-Code',
  'Marketing',
  'Design',
  'E-commerce',
];

const services = [
  { name: 'WordPress', level: 'Expert', category: 'CMS', active: true},
  { name: 'Shopify', level: 'Expert', category: 'E-commerce', active: true },
  { name: 'Webflow', level: 'Advanced', category: 'CMS', active: false },
  { name: 'Wix', level: 'Advanced', category: 'CMS', active: false },
  { name: 'Squarespace', level: 'Advanced', category: 'CMS', active: false },
  { name: 'Bubble.io', level: 'Expert', category: 'No-Code', active: true },

  { name: 'Zapier', level: 'Expert', category: 'No-Code', active: true },
  { name: 'Make', level: 'Advanced', category: 'No-Code', active: false },
  { name: 'Airtable', level: 'Advanced', category: 'No-Code', active: false },
  { name: 'Notion', level: 'Expert', category: 'No-Code', active: true },
  { name: 'Glide', level: 'Intermediate', category: 'No-Code', active: false },
  { name: 'SEO', level: 'Expert', category: 'Marketing', active: true },

  { name: 'Google Analytics', level: 'Advanced', category: 'Marketing', active: false },
  { name: 'Mailchimp', level: 'Expert', category: 'Marketing', active: true },
  { name: 'SendGrid', level: 'Advanced', category: 'Marketing', active: false },
  { name: 'Stripe', level: 'Intermediate', category: 'E-commerce', active: false },
  { name: 'HubSpot', level: 'Intermediate', category: 'Marketing', active: false },
  { name: 'Figma', level: 'Expert', category: 'Design', active: true },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('All Skills');

  const filteredServices =
    activeTab === 'All Skills'
      ? services
      : services.filter(service => service.category === activeTab);

  return (
    <section id='service' className="bg-white py-20 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">
          🛠️ My Toolkit
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Comprehensive expertise in no-code solutions, CMS platforms, and digital tools
          to build powerful websites and applications without writing code.
        </p>

        {/* Categories Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeTab === cat
                  ? 'bg-blue-500 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 text-center transition hover:shadow-lg ${
                service.active
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-900 border-gray-200'
              }`}
            >
              <div className="text-lg font-semibold">
                {service.name}
              </div>

              <div
                className={`mt-2 text-sm ${
                  service.active ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {service.level}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
