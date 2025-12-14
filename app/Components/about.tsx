
'use client';

// import {
//   Rocket,
//   Clock,
//   Zap,
//   Smile,
//   LayoutGrid,
//   Code2,
//   Globe,
//   Settings,
// } from 'lucide';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="flex items-center gap-2 text-4xl font-semibold text-gray-900">
              👋 <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              I'm <span className="font-semibold text-blue-500">Talib Pirani</span>, a passionate
              Full Stack No-Code Developer with hands-on experience building scalable
              web apps, e-commerce stores, and automation solutions. I specialize in
              <span className="font-medium text-blue-500"> Bubble.io</span>,
              <span className="font-medium text-blue-500"> Lovable.dev</span>, and
              <span className="font-medium text-blue-500"> Windsurf.com</span> for
              no-code development, along with
              <span className="font-medium text-blue-500"> WordPress</span>,
              <span className="font-medium text-blue-500"> Shopify</span>,
              <span className="font-medium text-blue-500"> Squarespace</span>, and
              <span className="font-medium text-blue-500"> Wix</span> for CMS projects.
            </p>

            <p className="mt-4 text-gray-600">
              I build powerful automations and workflows using
              <span className="font-medium text-blue-500"> ChatGPT</span>,
              <span className="font-medium text-blue-500"> N8N</span>, and
              <span className="font-medium text-blue-500"> Make</span>, and integrate
              APIs like
              <span className="font-medium text-blue-500"> Stripe</span>,
              <span className="font-medium text-blue-500"> Twilio</span>, and
              <span className="font-medium text-blue-500"> Google APIs</span>
              to create seamless, efficient solutions.
            </p>

            <p className="mt-4 text-gray-600">
              Over the years, I’ve delivered projects ranging from
              <span className="font-medium text-blue-500"> finance apps</span> and
              <span className="font-medium text-blue-500"> e-commerce platforms</span>
              to
              <span className="font-medium text-blue-500"> AI-driven tools</span>,
              always focusing on clean, maintainable solutions that improve
              user experience.
            </p>

            <p className="mt-4 text-gray-600">
              I enjoy <span className="font-medium text-blue-500">mentoring</span>,
              <span className="font-medium text-blue-500"> process optimization</span>,
              and continuous learning, and I’d love to help your business turn ideas
              into fully functional, user-friendly applications.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '100+', label: 'Websites Built' },
                { value: '6+', label: 'Years Experience' },
                { value: '40+', label: 'Tools Expertise' },
                { value: '100%', label: 'Client Satisfaction', },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm"
                >
                  {/* <div className="text-3xl font-semibold text-blue-500 flex justify-center items-center gap-2">
                    {stat.value} <span className="text-xl">{stat.icon}</span>
                  </div> */}
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'CMS Mastery',
                  desc: 'Expert in WordPress, Webflow, and leading CMS platforms',
                },
                {
                 
                  title: 'No-Code Solutions',
                  desc: 'Building powerful apps without writing code',
                },
                {
                 
                  title: 'Web Presence',
                  desc: 'Responsive websites that convert visitors',
                },
                {
                //   icon: <Settings className="h-6 w-6 text-blue-500" />,
                  title: 'Automation',
                  desc: 'Streamlining workflows with smart tools',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    {item.icon}
                  </div> */}
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;