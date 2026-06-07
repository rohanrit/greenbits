import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Globe, 
  Search, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

// Configuration for Tech Stack Floating Elements (3D-like Orbit)
const techStack = [
  { name: 'Next.js', color: 'bg-black text-white border-neutral-800', x: '100%', y: '100%', delay: 0 },
  { name: 'React', color: 'bg-sky-950 text-sky-400 border-sky-800', x: '-100%', y: '-100%', delay: 0.2 },
  { name: 'Node.js', color: 'bg-[#1a3a1a] text-[#3ab54b] border-[#2d5a2d]', x: '-100%', y: '100%', delay: 0.4 },
  { name: 'JavaScript', color: 'bg-yellow-950 text-yellow-400 border-yellow-800', x: '100%', y: '-100%', delay: 0.1 },
  { name: 'Python', color: 'bg-blue-950 text-blue-400 border-blue-800', x: '0', y: '65%', delay: 0.5 },
  { name: 'PHP', color: 'bg-indigo-950 text-indigo-400 border-indigo-800', x: '65%', y: '-25%', delay: 0.3 },
];

// Configuration for core agency services
const services = [
  { id: 'dev', title: 'Web Development', icon: Code2, desc: 'High-performance, pixel-perfect web applications tailored to scale.' },
  { id: 'design', title: 'UI/UX Web Design', icon: Layers, desc: 'Immersive, human-centric interfaces built for ultimate conversion.' },
  { id: 'consult', title: 'Website Consultation', icon: Globe, desc: 'Strategic architecture mapping and full-stack technical auditing.' },
  { id: 'seo', title: 'SEO Optimization', icon: Search, desc: 'Core Web Vitals acceleration and programmatic visibility scaling.' },
];

export default function HeroSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative min-h-screen w-full bg-neutral-950 text-neutral-50 overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient Radial Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3ab54b]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#2d8a3b]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Semantic Copy & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
          
          {/* Main Heading with Highlight */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Transforming Complex Visions Into{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3ab54b] via-[#45c65a] to-[#2d8a3b]">
                High-Performance Digital Reality
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              We craft robust ecosystem architectures, blending high-fidelity UI/UX design with scalable engineering to maximize performance, scalability, and clean modular structures.
            </motion.p>
          </div>

          {/* Action Callouts / CTAs */}
          <div className="hidden">
            <button>Initiate Project</button>
            <button>Explore Our Stack</button>
          </div>

          {/* Dynamic Service Feature Tabs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-neutral-900"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 text-center lg:text-left">
              Our Core Expertise
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = activeService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`relative p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                      isSelected 
                        ? 'bg-neutral-900 border-neutral-700 text-neutral-50 shadow-md' 
                        : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300 hover:border-neutral-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 transition-transform duration-300 ${isSelected ? 'text-[#3ab54b] scale-110' : 'group-hover:scale-105'}`} />
                    <span className="text-xs font-medium block leading-tight">{service.title}</span>
                    {isSelected && (
                      <motion.div 
                        layoutId="activeTabGlow"
                        className="absolute inset-0 border border-[#3ab54b]/30 rounded-xl pointer-events-none"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Service Detail Tray */}
            <div className="mt-4 h-14 relative overflow-hidden hidden sm:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-neutral-400 flex items-start gap-2 bg-neutral-900/40 p-3 rounded-lg border border-neutral-900"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3ab54b] shrink-0 mt-0.5" />
                  <span>{activeService.desc}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Concept-Centric 3D Architecture Canvas */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] flex items-center justify-center">
          
          {/* Inner Decorative Concentric Rings */}
          <div className="absolute w-72 h-72 rounded-full border border-neutral-900/60 flex items-center justify-center animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white border-dashed flex items-center justify-center animate-[spin_120s_linear_infinite]" />
          
          {/* Central Interactive Monolith Block */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            whileHover={{ rotateY: 15, rotateX: -15 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="min-w-[550px] h-[550px] rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shadow-2xl flex flex-col items-center justify-center p-10 relative group cursor-grab active:cursor-grabbing select-none"
          >
            {/* Glowing Focal Core */}
            <div className="absolute inset-0 bg-[#3ab54b]/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 pointer-events-none" />
            
            
            
            <p className="text-2xl font-bold tracking-wider uppercase text-neutral-300">Modern Web Development</p>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-inner mb-6 transition-transform duration-300 group-hover:translate-z-10">
              <Code2 className="w-16 h-16 text-[#3ab54b]" />
            </div>
            <p className="text-lg text-neutral-500 mt-3 font-mono">READY DEPLOYMENT</p>
            
            {/* Embedded Mini-Matrix Dots inside the Monolith */}
            <div className="absolute bottom-6 grid grid-cols-6 gap-2 opacity-40">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-[#3ab54b]' : 'bg-neutral-700'}`}
                  style={{ margin: '2px' }}
                />
              ))}
            </div>
          </motion.div>

          {/* Interactive Technology Orbit Cloud */}
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: tech.x,
                y: tech.y,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 70, 
                delay: tech.delay 
              }}
              className="absolute pointer-events-auto"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.3
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-medium shadow-xl whitespace-nowrap cursor-pointer backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl ${tech.color}`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-70 animate-pulse" />
                {tech.name}
              </motion.div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}