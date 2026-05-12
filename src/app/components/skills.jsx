import React from 'react';

// Reusable Badge Component
const SkillBadge = ({ name }) => (
  <div className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-800/30 text-gray-300 text-xs font-medium hover:border-gray-500 hover:bg-gray-800/60 transition-all cursor-default">
    {name}
  </div>
);

// Reusable Category Card Component
const SkillCard = ({ title, iconColor, skills }) => (
  <div className="p-6 rounded-2xl border border-gray-800 bg-[#0d1117] hover:border-gray-700 transition-colors shadow-xl">
    <div className="flex items-center gap-2 mb-6">
      <span className={`text-sm font-bold ${iconColor}`}>{"<>"}</span>
      <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillBadge key={skill} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      iconColor: "text-blue-400",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "React Router", "Astro", "Redux Toolkit", "Zustand", "TanStack Query", "RTK Query", "Tailwind CSS", "Bootstrap", "Material UI", "Headless UI", "Shadcn", "Radix UI", "Framer Motion", "GSAP"]
    },
    {
      title: "Backend",
      iconColor: "text-green-400",
      skills: ["Node.js", "Express.js", "Nest.js", "GraphQL", "REST APIs", "Better-Auth", "JWT Authentication", "Socket.io", "WebRTC", "Square", "Stripe"]
    },
    {
      title: "Databases",
      iconColor: "text-yellow-500",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Sequelize", "SQLite", "Redis"]
    },
    {
      title: "Mobile & Desktop",
      iconColor: "text-purple-400",
      skills: ["React Native", "Expo", "Reanimated", "Expo Router", "React Navigation", "Nativewind", "Unistyles", "Uniwind", "Electron.js", "App Store & Google Play Deployment"]
    },
    {
      title: "DevOps",
      iconColor: "text-red-400",
      skills: ["Docker", "AWS", "Digital Ocean", "Cloudflare", "NGINX", "PM2", "Turbo Repo", "Sentry", "GitHub Actions", "Vercel", "Netlify", "Railway"]
    },
    {
      title: "Tools",
      iconColor: "text-orange-400",
      skills: ["Git", "GitHub", "Notion", "Postman", "Linux", "Figma", "Firebase", "Clerk", "Supabase"]
    }
  ];

  return (
    <section className="bg-[#010409] py-20 px-6 md:px-20 min-h-screen">
      {/* Section Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-7xl md:text-8xl font-bold text-white/5 uppercase tracking-[0.2em] absolute inset-0 flex items-center justify-center select-none">
          Expertise
        </h2>
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            SKILLS
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Programming Languages, Frameworks, Libraries, Tools, and Technologies I'm working on.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <SkillCard 
            key={index} 
            title={cat.title} 
            iconColor={cat.iconColor} 
            skills={cat.skills} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;