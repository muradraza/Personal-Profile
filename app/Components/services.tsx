'use client';

import { useState } from 'react';

const categories = [
  { label: 'All Skills', icon: '🔥' },
  { label: 'CMS', icon: '🌐' },
  { label: 'No-Code', icon: '🚀' },
  { label: 'Marketing', icon: '📈' },
  { label: 'Design', icon: '🎨' },
  { label: 'E-commerce', icon: '🛒' },
];

const services = [
  { name: 'WordPress', level: 'Expert', category: 'CMS', active: true, icon: '📄' },
  { name: 'Shopify', level: 'Expert', category: 'E-commerce', active: true, icon: '🛍️' },
  { name: 'Webflow', level: 'Advanced', category: 'CMS', active: false, icon: '🌊' },
  { name: 'Wix', level: 'Advanced', category: 'CMS', active: false, icon: '⚡' },
  { name: 'Squarespace', level: 'Advanced', category: 'CMS', active: false, icon: '⬜' },
  { name: 'Bubble.io', level: 'Expert', category: 'No-Code', active: true, icon: '🫧' },

  { name: 'Zapier', level: 'Expert', category: 'No-Code', active: true, icon: '🔗' },
  { name: 'Make', level: 'Advanced', category: 'No-Code', active: false, icon: '⚙️' },
  { name: 'Airtable', level: 'Advanced', category: 'No-Code', active: false, icon: '📋' },
  { name: 'Notion', level: 'Expert', category: 'No-Code', active: true, icon: '📓' },

  { name: 'SEO', level: 'Expert', category: 'Marketing', active: true, icon: '🔍' },
  { name: 'Mailchimp', level: 'Expert', category: 'Marketing', active: true, icon: '📬' },
  { name: 'Analytics', level: 'Advanced', category: 'Marketing', active: false, icon: '📊' },

  { name: 'Figma', level: 'Expert', category: 'Design', active: true, icon: '🎨' },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('All Skills');

  const filteredServices =
    activeTab === 'All Skills'
      ? services
      : services.filter(service => service.category === activeTab);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(cat.label)}
              className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition
                ${
                  activeTab === cat.label
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white border text-gray-700 hover:bg-gray-50'
                }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-center transition-all
                ${
                  service.active
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white border border-gray-200 text-gray-900'
                }`}
            >
              <div className="text-3xl mb-3">
                {service.icon}
              </div>

              <h3 className="font-semibold text-base">
                {service.name}
              </h3>

              <p
                className={`mt-1 text-sm ${
                  service.active ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {service.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
