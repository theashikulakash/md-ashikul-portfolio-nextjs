import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaLink, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const ResumePage = () => {
  // Reusable Section Heading
  const SectionTitle = ({ children }) => (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl font-bold text-white whitespace-nowrap">{children}</h2>
      <div className="h-[1px] w-full bg-gray-800"></div>
    </div>
  );

  // Reusable Card for Experience/Education
  const ResumeCard = ({ title, subtitle, date, location, points, result }) => (
    <div className="mb-8 p-6 rounded-2xl border border-gray-800 bg-[#0d1117] hover:border-gray-700 transition-colors">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-blue-400 font-medium">{subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">{date}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
      {result && <p className="text-gray-300 mb-2 font-mono text-sm">Result: {result}</p>}
      <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed">
        {points && points.map((point, idx) => <li key={idx}>{point}</li>)}
      </ul>
    </div>
  );

  return (
    <section>
        <Navbar />
    <div className="min-h-screen bg-[#010409] text-gray-100 py-20 px-6 md:px-20 lg:px-40">
      
      {/* Header / Contact Info */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tighter">Md Ashikul Islam Akash</h1>
          <p className="text-xl text-blue-400 font-mono mb-4">Web Developer | CSE Graduate</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2"><FaPhone className="text-blue-400"/> 01737916060</span>
            <span className="flex items-center gap-2"><FaEnvelope className="text-blue-400"/> akashashikul@gmail.com</span>
            <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-400"/> Jashore, Bangladesh</span>
          </div>
        </div>
        <button className="btn btn-outline border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full px-8">
          <FaDownload /> Download CV
        </button>
      </header>

      {/* Summary */}
      <section className="mb-16">
        <SectionTitle>Career Summary</SectionTitle>
        <p className="text-gray-400 leading-relaxed  bg-gray-800/30 p-6 rounded-2xl border border-gray-800">
          CSE graduate and aspiring Web Developer with a strong eye for design. 
          Combining 5 years of creative experience with technical expertise in HTML, CSS, and JS 
          to build responsive, user-friendly websites. Eager to grow with a tech team 
          and leverage a background in Graphic Design and Marketing.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <SectionTitle>Experience</SectionTitle>
        <ResumeCard 
          title="Web Developer (Contract)"
          subtitle="Global Trade Solutions"
          date="Jun 2023 - Aug 2023"
          location="Guangzhou, China (Remote)"
          points={[
            "Remote contractual web development duties.",
          ]}
        />
        <ResumeCard 
          title="Digital Marketing Executive"
          subtitle="Arivid International Co., Ltd"
          date="Mar 2022 - Jan 2024"
          location="Regional Office, Jashore"
          points={[
            "Promotion of products and services using push and pull marketing.",
            "Applied On-page SEO and Google Analytics.",
            "Targeting consumers directly and indirectly.",
          ]}
        />
        <ResumeCard 
          title="Social Media Marketing Manager"
          subtitle="The Gorgeous"
          date="Nov 2021 - Aug 2023"
          location="Jashore"
          points={[
            "Scheduled social media posts and recorded insights.",
            "Collaborated with creative teams for content and product ads.",
            "Established communication with influencers and celebrities.",
          ]}
        />
      </section>

      {/* Education */}
      <section className="mb-16">
        <SectionTitle>Education</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResumeCard 
            title="B.Sc. in Computer Science & Engineering"
            subtitle="Daffodil International University (DIU)"
            date="Graduated 2022"
            result="2.9 / 4.0"
          />
          <ResumeCard 
            title="Higher Secondary Certificate (HSC)"
            subtitle="Dr. Abdur Razzak Municipal College"
            date="2016"
            result="3.67 / 5.0"
          />
        </div>
      </section>

      {/* Training & Courses */}
      <section className="mb-16">
        <SectionTitle>Training & Courses</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResumeCard 
            title="Web Development Level-1"
            subtitle="Programming Hero"
            date="On Going"
            result="--"
          />
          <ResumeCard 
            title="Basic to Advance Excel"
            subtitle="Skillful Bangladesh"
            date="2016"
            result="Expert"
          />
          <ResumeCard 
            title="English Speaking"
            subtitle="S@ifurs Bangladesh"
            date="2017"
            result="C1"
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-16">
        <SectionTitle>Key Expertise</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript", "Next.js", "React", "Node.js", "MongoDB", "Better-Auth", "Github", "Vercel", "Netlify", "REST API", 
            "Tailwind CSS", "DaisyUI", "SEO", "Graphic Design", "Data Entry", "Linux"
          ].map(skill => (
            <div key={skill} className="bg-gray-800/30 border border-gray-800 p-4 rounded-xl text-center text-gray-300 font-medium">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="mb-16">
        <SectionTitle>References</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-gray-800 bg-[#0d1117]/50">
            <h4 className="text-white font-bold text-lg">Raja Tariqul Hasan Tusher</h4>
            <p className="text-gray-400 text-sm">Assistant Lecturer, DIU</p>
            <p><a href="mailto:tusher.cse@diu.edu.bd" className="text-blue-400 text-xs mt-2">tusher.cse@diu.edu.bd</a></p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-[#0d1117]/50">
            <h4 className="text-white font-bold text-lg">Hashanul Banna</h4>
            <p className="text-gray-400 text-sm">Owner, Arivid International Co.</p>
            <p><a href="mailto:admin@arivid.com" className="text-blue-400 text-xs mt-2">admin@arivid.com</a></p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-[#0d1117]/50">
            <h4 className="text-white font-bold text-lg">KH Mohsin Karim</h4>
            <p className="text-gray-400 text-sm">Founder, Quality Food Servicec</p>
            <p><a href="mailto:qualitygroujsr@gmail.com" className="text-blue-400 text-xs mt-2">qualitygroujsr@gmail.com</a></p>
          </div>
        </div>
      </section>

     
    </div>
    <Footer />
    </section>

  );
};

export default ResumePage;