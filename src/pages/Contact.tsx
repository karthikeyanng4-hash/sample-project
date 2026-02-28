import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-10 space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Contact Details</h1>
          <p className="text-zinc-400">Get in touch with our team</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Name</p>
              <p className="text-lg font-medium">Nigarika</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email</p>
              <a href="mailto:nigarika@example.com" className="text-lg font-medium hover:text-indigo-400 transition-colors">
                nigarika@example.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Phone</p>
              <p className="text-lg font-medium">+91 9876543210</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Location</p>
              <p className="text-lg font-medium">Bangalore, India</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
