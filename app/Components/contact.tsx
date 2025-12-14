'use client';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Let's Start
            </h2>
            <p className="text-gray-600 text-lg">
              I’d love to hear about your project! Share your ideas, and let's create a solution that elevates your business.
            </p>
            <p className="mt-6 text-gray-600">
              Whether it’s building a new website, automating workflows, or developing custom tools, I’m here to help.
            </p>
          </div>

          {/* RIGHT: Contact Form */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
