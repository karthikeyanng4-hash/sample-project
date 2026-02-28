import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Trash2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm SmartAI. How can I help you today?",
      sender: 'bot',
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini
  const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for context
      const history = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
      
      // Add current message to history
      history.push({
        role: 'user',
        parts: [{ text: input }]
      });

      const result = await genAI.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: history,
        config: {
          systemInstruction: "You are SmartAI, a helpful and intelligent chatbot assistant. You provide clear, accurate, and concise answers to all types of general knowledge questions. Maintain a professional yet friendly tone.",
        }
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: result.text || "I'm sorry, I couldn't generate a response.",
        sender: 'bot',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Gemini Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please check your API key or try again later.",
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! I'm SmartAI. How can I help you today?",
        sender: 'bot',
        timestamp: Date.now(),
      },
    ]);
  };

  return (
    <div className="min-h-screen pt-20 pb-6 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl flex-1 flex flex-col glass-panel overflow-hidden shadow-2xl">
        {/* Chat Header */}
        <div className="px-6 py-4 bg-zinc-800/50 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold">SmartAI Assistant</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={clearChat}
            className="p-2 text-zinc-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5"
            title="Clear conversation"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
                    {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-600 mt-1 px-10">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-zinc-500 ml-10"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs font-medium italic">SmartAI is thinking...</span>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-zinc-800/30 border-t border-white/5">
          <div className="relative flex items-center gap-2 max-w-3xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 text-center">
            <p className="text-[10px] text-zinc-600 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini 1.5 Flash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
