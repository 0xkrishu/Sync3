import React from 'react';
import { ArrowRight, MessageCircle, Target, BarChart as ChartBar, Zap, Mail, Twitter, Linkedin, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none"></div>
        
        <header className="container mx-auto px-6 pt-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Sync3</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-all">
              Contact Us
            </button>
          </nav>
        </header>

        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full text-yellow-400 font-medium mb-6">
              Web3 Business Development as a Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Unlocking{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
                Web3 Growth
              </span>{' '}
              Through Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Struggling to build the right Web3 partnerships? We connect you with top-tier protocols, 
              investors, and ecosystems to drive adoption and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/sync3org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2"
              >
                Start Scaling Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3,000+", label: "Web3 Connections" },
                { number: "200+", label: "Successful Partnerships" },
                { number: "50+", label: "Projects Scaled" },
                { number: "100%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
            <p className="text-gray-400">
              We specialize in Business Development as a Service (BDaaS) for Web3 projects, 
              delivering measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-yellow-400" />,
                title: "Strategic Partnerships",
                description: "Connect with top-tier protocols and key industry players."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Seamless Integrations",
                description: "Ensure smooth interoperability across blockchain networks."
              },
              {
                icon: <ChartBar className="w-8 h-8 text-yellow-400" />,
                title: "Growth Optimization",
                description: "Data-driven strategies that deliver measurable results."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-yellow-400" />,
                title: "Performance-Based",
                description: "No upfront costs. We succeed when you succeed."
              }
            ].map((service, index) => (
              <div key={index} 
                   className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                            hover:border-yellow-400/50 transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Ready to Scale Your Web3 Project?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:contact@sync3.io" 
               className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-yellow-400/10 
                        border border-white/10 hover:border-yellow-400/50 transition-all">
              <Mail className="w-5 h-5" />
              contact@sync3.io
            </a>
            <a href="https://x.com/sync3org" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-yellow-400/10 
                        border border-white/10 hover:border-yellow-400/50 transition-all">
              <Twitter className="w-5 h-5" />
              @sync3org
            </a>
            <a href="https://www.linkedin.com/company/sync3org" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-yellow-400/10 
                        border border-white/10 hover:border-yellow-400/50 transition-all">
              <Linkedin className="w-5 h-5" />
              Sync3
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 
                          border border-white/10">
              <MessageCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-400">Telegram:</span>
              <a href="https://t.me/zeroxkrishna" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-yellow-400 hover:text-yellow-300">@zeroxkrishna</a>
              <span className="text-gray-400 mx-2">|</span>
              <a href="https://t.me/himanshurajtg" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-yellow-400 hover:text-yellow-300">@himanshurajtg</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Sync3</span>
          </div>
          <div className="text-gray-400">© 2025 Sync3. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;