import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Bot, Sparkles, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3 h-3" />
          <span>Next Generation AI Assistant</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Experience Intelligence Like Never Before
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          SmartAI is your personal companion for knowledge, creativity, and problem-solving. 
          Powered by the latest Gemini models for human-like conversations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/chatbot" 
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            Go to Chatbot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 bg-zinc-900 text-white border border-white/10 rounded-full font-bold text-lg transition-all hover:bg-zinc-800"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full"
      >
        <div className="glass-panel p-6">
          <Bot className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Smart Context</h3>
          <p className="text-zinc-400 text-sm">Remembers your conversation history for more natural interactions.</p>
        </div>
        <div className="glass-panel p-6">
          <Sparkles className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Gemini Powered</h3>
          <p className="text-zinc-400 text-sm">Utilizes Google's most capable models for accurate information.</p>
        </div>
        <div className="glass-panel p-6">
          <Shield className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
          <p className="text-zinc-400 text-sm">Your conversations are handled with the highest security standards.</p>
        </div>
      </motion.div>
    </div>
  );
}
