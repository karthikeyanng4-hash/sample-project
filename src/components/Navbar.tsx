import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, User as UserIcon, LogIn } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-zinc-900/80 backdrop-blur-lg border-bottom border-white/5 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">SmartAI Chatbot</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link 
          to="/" 
          className={`text-sm font-medium transition-colors hover:text-indigo-400 ${isActive('/') ? 'text-indigo-400' : 'text-zinc-400'}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`text-sm font-medium transition-colors hover:text-indigo-400 ${isActive('/about') ? 'text-indigo-400' : 'text-zinc-400'}`}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm font-medium transition-colors hover:text-indigo-400 ${isActive('/contact') ? 'text-indigo-400' : 'text-zinc-400'}`}
        >
          Contact Details
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link 
          to="/login" 
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Link>
        <Link 
          to="/signin" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
