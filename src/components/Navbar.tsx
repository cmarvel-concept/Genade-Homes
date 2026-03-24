import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MapPin, Users, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Primesgate', path: '/primesgate' },
    { name: 'Webinar', path: '/webinar' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark-green text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 overflow-hidden rounded-lg flex items-center justify-center bg-brand-amber group-hover:bg-amber-400 transition-colors">
              <img 
                src="/logo.png" 
                alt="Genade Homes Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.innerText = 'G';
                    span.className = 'text-brand-dark-green font-bold text-xl';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              GENADE <span className="text-brand-amber">HOMES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-amber",
                  location.pathname === link.path ? "text-brand-amber" : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="http://wa.me/+2348143999430"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-amber text-brand-dark-green px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-400 transition-all shadow-lg shadow-brand-amber/20"
            >
              Book Inspection
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark-green border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg font-medium",
                    location.pathname === link.path ? "text-brand-amber" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="http://wa.me/+2348143999430"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-amber text-brand-dark-green px-6 py-3 rounded-xl font-bold"
              >
                Book Inspection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
