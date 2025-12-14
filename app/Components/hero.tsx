'use client';

const HeroSection = () => {
  return (
    <section
            className="min-h-[calc(100vh-4rem)] relative overflow-hidden pt-20 flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="../herobanner.jpg"
          alt="Modern tech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">
                Full Stack NoCode Developer
              </span>
            </h1>

            <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Building Powerful Websites Without Writing Code ✨
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Specializing in creating beautiful, functional websites using
              no-code tools and CMS platforms. I help businesses establish their
              online presence quickly and effectively.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#projects"
              aria-label="View my work and projects"
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hero-button group h-11 px-8 py-2 text-primary-foreground shadow hover:bg-primary/90"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="mailto:talib.ivisiongate@gmail.com"
              aria-label="Send an email"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-6 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
