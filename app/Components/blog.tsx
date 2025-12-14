'use client';

import { useState } from 'react';

const categories = [
  'All Posts',
  'Web Development',
  'No-Code',
  'Marketing',
  'Design',
  'E-commerce',
];

const blogs = [
  {
    title: 'Mastering WordPress in 2025',
    category: 'Web Development',
    date: 'Dec 1, 2025',
    excerpt: 'Learn the latest tips and tricks for building fast, responsive WordPress sites.',
    active: true,
  },
  {
    title: 'No-Code Automation with Zapier',
    category: 'No-Code',
    date: 'Nov 25, 2025',
    excerpt: 'Automate repetitive tasks without writing code using Zapier.',
    active: true,
  },
  {
    title: 'SEO Best Practices for 2025',
    category: 'Marketing',
    date: 'Nov 15, 2025',
    excerpt: 'Boost your website traffic with up-to-date SEO techniques.',
    active: true,
  },
  {
    title: 'Design Systems in Figma',
    category: 'Design',
    date: 'Nov 10, 2025',
    excerpt: 'Organize and scale your design projects with Figma design systems.',
    active: false,
  },
  {
    title: 'E-commerce Setup with Shopify',
    category: 'E-commerce',
    date: 'Oct 30, 2025',
    excerpt: 'Build and launch your online store with Shopify quickly.',
    active: true,
  },
];


const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('All Posts');

  const filteredBlogs =
    activeTab === 'All Posts'
      ? blogs
      : blogs.filter(blog => blog.category === activeTab);

  return (
    <section id='blog' className="bg-white py-20 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">📚 My Blog</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Explore articles on web development, no-code tools, marketing, design, and e-commerce.
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

        {/* Blog Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 text-left transition hover:shadow-lg ${
                blog.active
                  ? 'bg-blue-50 border-blue-300'
                  : 'bg-white text-gray-400 border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{blog.date}</p>
              <p className="mt-4 text-gray-700">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

