import React, { useState } from "react";
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, BarChart3, Zap } from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email functionality would be implemented here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold gradient-text">UK</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Syed Usman <span className="gradient-text">Kazmi</span>
                </h1>
                <p className="text-xl text-slate-600">Web Designer & Digital Marketer</p>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Crafting High-Converting Websites & High-ROI Digital Marketing Strategies. Based in Islamabad, Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => scrollToSection("projects")} className="btn-primary">
                  View My Work
                </button>
                <button onClick={() => scrollToSection("contact")} className="btn-secondary">
                  Let's Talk
                </button>
              </div>
              <div className="flex gap-4 pt-6">
                <a href="#" aria-label="LinkedIn" className="p-3 glass rounded-lg hover:bg-white/50 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="GitHub" className="p-3 glass rounded-lg hover:bg-white/50 transition-all">
                  <Github size={20} />
                </a>
                <a href="mailto:usmankazmi28@gmail.com" aria-label="Email" className="p-3 glass rounded-lg hover:bg-white/50 transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Professional Headshot Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/Profile.jpg" alt="Syed Usman Kazmi" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a passionate Web Designer and Digital Marketer with over 1 year of hands-on experience at a fast-growing software house. I specialize in bridging the gap between beautiful aesthetics and business growth.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My expertise spans from creating stunning, responsive web designs using modern tools like React and Builder.io, to developing data-driven marketing strategies that deliver measurable ROI. I believe that great design is not just about looks—it's about creating experiences that convert.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Age: <span className="font-semibold">30 years old</span> | Location: <span className="font-semibold">Islamabad, Pakistan</span>
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-slate-700 font-medium">ICS</p>
                <p className="text-slate-600">Islamabad College of Science & Commerce</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Certification</h3>
                <p className="text-slate-700 font-medium">Bano Qabil</p>
                <p className="text-slate-600">Internationally Recognized Professional Certification</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-slate-700 font-medium">1+ Year</p>
                <p className="text-slate-600">Fast-Growing Software House</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Web Design & Development */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Web Design & Development</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Builder.io",
                  "React",
                  "Component-Driven Design",
                  "UI/UX Wireframing",
                  "Responsive Layouts",
                  "VS Code",
                  "GitHub",
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/50 transition-all">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <BarChart3 size={24} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Digital Marketing</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Search Engine Optimization (SEO)",
                  "Social Media Marketing (SMM)",
                  "Performance Marketing",
                  "Lead Generation",
                  "Brand Strategy",
                  "Analytics & Optimization",
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/50 transition-all">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-12">Professional Experience</h2>
          
          <div className="relative">
            <div className="glass p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <h3 className="text-xl font-bold text-accent">1+ Year</h3>
                  <p className="text-slate-600 mt-2">Ongoing</p>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-2xl font-bold mb-2">Fast-Growing Software House</h4>
                  <p className="text-slate-700 mb-4">
                    Hands-on experience bridging the gap between beautiful aesthetics and business growth through innovative web design and data-driven digital marketing strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Web Design", "Digital Marketing", "React", "UI/UX", "SEO", "Brand Strategy"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Project 1 - Goodways Services */}
            <div className="glass p-6 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Palette size={48} className="text-emerald-700 mx-auto mb-2" />
                  <p className="text-emerald-700 font-semibold">Goodways Services</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Goodways Services</h3>
              <p className="text-slate-600 mb-4">
                A premium Document Legalization, Attestation, and Professional Translation Service website designed for high conversion and professional credibility.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all cursor-pointer">
                View Project <ExternalLink size={18} />
              </div>
            </div>

            {/* Project 2 - Digital Marketing Campaign */}
            <div className="glass p-6 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Zap size={48} className="text-blue-700 mx-auto mb-2" />
                  <p className="text-blue-700 font-semibold">SMM Campaign</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Marketing Campaign</h3>
              <p className="text-slate-600 mb-4">
                Strategic social media marketing campaign that increased brand awareness and engagement by 150% within 3 months.
              </p>
              <div className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all cursor-pointer">
                View Case Study <ExternalLink size={18} />
              </div>
            </div>
          </div>

          {/* Additional Project Placeholder */}
          <div className="glass p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <p className="text-slate-600 font-medium">More projects coming soon...</p>
            <p className="text-slate-500 text-sm mt-2">Showcase your additional web design mockups and case studies here</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:+923055888444" className="text-slate-600 hover:text-accent transition-colors">
                    +92 (305) 5888444
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:usmankazmi28@gmail.com" className="text-slate-600 hover:text-accent transition-colors">
                    usmankazmi28@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-slate-600">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Syed Usman Kazmi</h3>
              <p className="text-white/70">Web Designer & Digital Marketer</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection("skills")} className="hover:text-white transition-colors">Skills</button></li>
                <li><button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="mailto:usmankazmi28@gmail.com" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 Syed Usman Kazmi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
