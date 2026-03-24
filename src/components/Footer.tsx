import { Mail, Phone, MapPin, Youtube, Send, Twitter, Instagram, Facebook, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Twitter, href: '#', label: 'X' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Music2, href: '#', label: 'TikTok' },
  ];

  return (
    <footer className="bg-brand-dark-green text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 overflow-hidden rounded flex items-center justify-center bg-brand-amber">
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
                      span.className = 'text-brand-dark-green font-bold';
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                GENADE <span className="text-brand-amber">HOMES</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Sustainable Communities. Strategic Locations. Homes That Last.
              Developing structured residential communities within Abuja's expansion corridors.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-amber hover:text-brand-dark-green transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-amber transition-colors">Home</Link></li>
              <li><Link to="/primesgate" className="hover:text-brand-amber transition-colors">Primesgate Estate</Link></li>
              <li><Link to="/webinar" className="hover:text-brand-amber transition-colors">Real Estate Webinar</Link></li>
              <li><a href="http://wa.me/+2348143999430" target="_blank" rel="noopener noreferrer" className="hover:text-brand-amber transition-colors">Explore Properties</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-amber shrink-0" />
                <span>Plot 971 Gospel Light Avenue, Durumi, Area 1, Abuja</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-amber shrink-0" />
                <a href="mailto:genadehomes@gmail.com" className="hover:text-white">genadehomes@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-amber shrink-0" />
                <a href="http://wa.me/+2348143999430" target="_blank" rel="noopener noreferrer" className="hover:text-white">08143999430</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">Get the latest property updates and investment tips.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-amber"
              />
              <button className="bg-brand-amber text-brand-dark-green px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-400 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Genade Homes. All rights reserved. @Genade_Homes</p>
        </div>
      </div>
    </footer>
  );
}
