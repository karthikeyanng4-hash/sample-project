import React from 'react';
import { motion } from 'motion/react';
import { Info, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About SmartAI</h1>
          <p className="text-zinc-400 text-lg">The future of human-AI collaboration.</p>
        </div>

        <div className="grid gap-8">
          <section className="glass-panel p-8 space-y-4">
            <div className="flex items-center gap-3 text-indigo-400">
              <Info className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              SmartAI was built with a single goal in mind: to make advanced artificial intelligence accessible, 
              intuitive, and helpful for everyone. We believe that AI should be a tool that empowers human 
              creativity and productivity, not a replacement for it.
            </p>
          </section>

          <section className="glass-panel p-8 space-y-4">
            <div className="flex items-center gap-3 text-indigo-400">
              <Target className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">What We Do</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Our chatbot utilizes the latest Gemini 1.5 Flash model from Google, allowing it to process 
              complex queries, maintain long-term context, and provide highly accurate answers across 
              a vast range of topics—from coding and science to creative writing and general knowledge.
            </p>
          </section>

          <section className="glass-panel p-8 space-y-4">
            <div className="flex items-center gap-3 text-indigo-400">
              <Users className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">The Team</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Led by visionary developers and AI researchers, our team is dedicated to refining the 
              user experience and ensuring that SmartAI remains at the forefront of the conversational 
              AI revolution.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
