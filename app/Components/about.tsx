
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

            <p className="text-gray-600">
  I am <span className="font-semibold text-blue-500">Murad Raza</span>, a
  dedicated Full-Stack No-Code Engineer with strong hands-on expertise in
  developing resilient
  <span className="font-medium text-blue-500"> web applications</span>,
  <span className="font-medium text-blue-500"> online stores</span>, and
  <span className="font-medium text-blue-500"> intelligent automation systems</span>.
  My primary focus includes no-code platforms such as
  <span className="font-medium text-blue-500"> Bubble.io</span>,
  <span className="font-medium text-blue-500"> Lovable.dev</span>, and
  <span className="font-medium text-blue-500"> Windsurf.com</span>, in addition to
  building CMS-based solutions with
  <span className="font-medium text-blue-500"> WordPress</span>,
  <span className="font-medium text-blue-500"> Shopify</span>,
  <span className="font-medium text-blue-500"> Squarespace</span>, and
  <span className="font-medium text-blue-500"> Wix</span>.
</p>

<p className="mt-4 text-gray-600">
  I architect and implement advanced automation flows and operational pipelines
  using
  <span className="font-medium text-blue-500"> ChatGPT</span>,
  <span className="font-medium text-blue-500"> N8N</span>, and
  <span className="font-medium text-blue-500"> Make</span>, while seamlessly
  connecting third-party services through APIs such as
  <span className="font-medium text-blue-500"> Stripe</span>,
  <span className="font-medium text-blue-500"> Twilio</span>, and
  <span className="font-medium text-blue-500"> Google APIs</span> to deliver
  efficient, high-performance digital solutions.
</p>

<p className="mt-4 text-gray-600">
  Throughout my professional journey, I have successfully delivered products
  ranging from
  <span className="font-medium text-blue-500"> fintech platforms</span> and
  <span className="font-medium text-blue-500"> scalable e-commerce systems</span>
  to
  <span className="font-medium text-blue-500"> AI-powered applications</span>,
  consistently prioritizing clarity, sustainability, and exceptional usability.
</p>

<p className="mt-4 text-gray-600">
  Beyond development, I am deeply engaged in
  <span className="font-medium text-blue-500"> mentoring</span>,
  <span className="font-medium text-blue-500"> workflow optimization</span>, and
  continuous learning, and I am eager to help businesses transform ideas into
  polished, intuitive, and fully operational digital products.
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